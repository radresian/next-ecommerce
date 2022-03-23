import { useRouter } from 'next/router';
import { useState } from 'react';
import {useMutation, useQuery} from '@apollo/client';
import Image from 'next/image';
import {PRODUCTS_BY_IDS, BIDS_OF_PRODUCT, VIEWER} from '../../apollo/client/queries';
import Page from '../../components/page';
import ErrorAlert from '../../components/alerts/error';
import Input from '../../components/form/input';
import BestDropsSale, { bestDropsSaleAddress } from '../../contracts/BestDropsSale';
import useWeb3 from '../../lib/web3-browser-provider';
import { useAuction } from '../../components/productItem';
import {CREATE_BID} from '../../apollo/client/mutations';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [price, setPrice] = useState();
  const web3 = useWeb3();
  const [createBid] = useMutation(CREATE_BID);
  const { data: viewerData, loading: loadingViewer, error: errorViewer } = useQuery(VIEWER);

  const { data, loading, error, refetch } = useQuery(PRODUCTS_BY_IDS, {
    variables: {
      id,
    },
  });

  const { data: bidsData, loading: bidsLoading, error: bidsError, refetch: bidsRefetch } = useQuery(BIDS_OF_PRODUCT, {
    variables: {
      product_id: Number(id),
    },
  });
  const [remaining, auctionStarted, auctionEnded, auctionEndDate] = useAuction(data ? data.productsById[0].auctionEndTime : 0);

  function maxLengthCheck(object){
    console.log(object.target.max);
    if (object.target.value > Number(object.target.max) ) {
      object.target.value = Number(object.target.max);
    }
    if (object.target.value < Number(object.target.min) ) {
      object.target.value = Number(object.target.min);
    }
  }

  function placeABid(){
    createBid({
      variables: {
        product_id: Number(id),
        price
      },
    }).then(data => {
      console.log('bid creat date:' + data);
      bidsRefetch();
    }).catch(error=>{
      alert(error);
    })
    /*
    window.ethereum.enable().then(()=>{
      web3.eth.getAccounts().then(accounts=>{
        console.log({accounts});
        const bestDropsSaleContract =  new web3.eth.Contract(BestDropsSale, bestDropsSaleAddress);
        bestDropsSaleContract.methods.bid(data.productsById[0].tokenId).send({from: accounts[0], value: web3.utils.toWei(price)}).then((tx)=>{
          console.log({tx});
          refetch();
        }).catch(console.log);
      })});
     */
  }

  if ((error || !data?.productsById.length) && !loading) {
    return (
      <Page title="BestDrops - Products">
        <ErrorAlert message="This product is not found!"></ErrorAlert>
      </Page>
    );
  } else if (loading) {
    return (
      <Page title="BestDrops - Products">
        <p>Loading...</p>
      </Page>
    );
  }

  return (
    <Page title="BestDrops - Products">
      <div className="product-detail-container">
        <article>

          <div className="product-img">
            <Image src={data.productsById[0].img_url} layout='fill' objectFit='scale-down' />
          </div>

        </article>
        <article>
          <div className="nft-info-container">
            <button className="creator">
              <div className="creator-div">
                <img src={data.productsById[0].creator_avatar} width="50" height="50" style={{borderRadius:50}} />
                <span style={{margin:15}}>@{data.productsById[0].creator_userName}</span>
              </div>
            </button>
            <h1 className="product-name">{data.productsById[0].name}</h1>

            <h3 className="product-description">
              {data.productsById[0].description}
            </h3>
          </div>
          <div className="price-contianer">

            <div className="price-section">
              {!auctionStarted ? <p className="">Reserve Price</p> : <p className="">Current Bid</p> }
              <p className="price-value">{ auctionStarted ? Number(data.productsById[0].tokenHighestBid).toFixed(2) : data.productsById[0].price} TL</p>
            </div>
            {!auctionStarted ?
              <div className="auction-section">
                <p>Once a bid has been placed and the reserve price has been met, a 24 hour auction for this artwork
                  will begin.</p>
              </div>
              :
              <div className="status">
                {<p className="price-header">Ending In</p>}
                {(() => {
                  if (auctionEnded) {
                    return <p className="price-value1">Auction Ended</p>;
                  } else if (auctionEndDate > Date.now()) {
                    return <p className="price-value1">{remaining}</p>;
                  }
                })()
                }
              </div>
            }
          </div>

          {!auctionEnded && (
            <div className="place-bid-container">
              <Input
                width={'100%'}
                marginBottom={'0px'}
                type="number"
                min={data.productsById[0].price}
                max="999"
                step="0.01"
                name="price"
                placeholder="Enter bid in ETH"
                onInput={maxLengthCheck}
                onChange={(value) => setPrice(value)}
                value={price}
              />
              <button className="place-bid" onClick={placeABid}>Place A Bid</button>
            </div>
            )
          }

          {auctionEnded && bidsData?.bidsOfProduct.length && bidsData?.bidsOfProduct[0].buyer_id === Number(viewerData?.viewer?.id) &&(
            <div className="place-bid-container">
              <button className="place-bid" onClick={placeABid}>Claim NFT</button>
            </div>
            )
          }

          <div className="bid-container">
            { !bidsLoading && bidsData?.bidsOfProduct && bidsData?.bidsOfProduct.map((bid, index)=>
                (
                  <div className="bid-info" key={index}>
                    <div className="bid-avatar-info">
                      <div className="bidder-avatar">
                        <img src={bid.user_avatar} width="50" height="50" style={{borderRadius: 50}}/>
                      </div>
                      <div className="bidder-and-date">
                        <div className="bidder"><span>Bid placed by </span><span className="bidder-name-span">@{bid.user_name}</span></div>
                        <div className="bid-date"><span>{new Date(bid.created_at).toLocaleString()}</span></div>
                      </div>
                    </div>
                    <div className="bid-price">
                      {index>0 && Number(viewerData?.viewer?.id) === bid.buyer_id && (<button className="return-bid" onClick={()=>{}}>Return Money</button>)}
                      <div className="bid-price-span-container">
                        <span className="bid-price-span">{bid.price} TL</span>
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </article>
      </div>

      <style jsx>{`
          article {
            display: flex;
            align-items: center;
            flex-direction: column;
            box-sizing: border-box;
            height: auto;
            width: 100%;
            padding: 24px;
            background: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px;
          }
          .place-bid-container {
            width: 100%;
            margin-top: 20px;
          }
          .bidder-and-date {
            margin-top: 8px;
          }
          .bid-price {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .bid-price-span-container {
            margin-left: 8px;
          }
          .bid-price-span {
            display: flex;
            white-space: nowrap;
          }
          .creator-div {
            display:flex;
            flex-direction:row;
          }
          .bidder-name-span{
            font-weight:bold
          }
          .bidder-avatar {
            height: 50px;
            width: 50px;
            margin-right:10px;
          }
          .bid-container {
            display:flex;
            width:100%;
            border-top: 1px solid;
            padding-top: 20px;
            flex-direction: column;
          }
          .bid-info {
            display:flex;
            width:100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .bid-avatar-info {
            display:flex;
            width:100%;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nft-info-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            border-bottom: 1px solid;
            padding-bottom: 12px;
          }
          .price-value{
            margin-top: 5px;
            font-size: 25px;
            font-weight: bold;
          }
          .price-section {
            width: 250px;
          }
          .price-contianer {
            display:flex;
            flex-direction:row;
            margin-top: 24px;
          }
          .creator {
            border-radius: 9999px;
            height: 60px;
            margin-bottom: 20px;
            font-size: 16px;
            background-color: white;
            font-weight: bold;
          }
          .place-bid {
            border-radius: 9999px;
            width: 100%;
            height: 45px;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 18px;
            background-color: #021e66;
            color: white;
          }
          .return-bid {
            border-radius: 9999px;
            width: 150px;
            font-size: 18px;
            background-color: #021e66;
            color: white;
          }
          .product-detail-container {
            display:flex;
            flex-direction: row;
            width: 100%;
          }
          .top-buttons {
            margin-bottom: 24px;
            align-self: flex-end;
          }
          .top-buttons .add-wishlist {
            background: none;
            border: none;
          }
          .top-buttons .add-wishlist:focus {
            outline: none;
          }
          .product-img {
            position: relative;
            width: 100%;
            height: 500px;
            margin-bottom: 28px;
            justify-content: center;
            display: flex;  
          }
          .product-name {
            width: 80%;
            line-height: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 22px;
            text-align: center;
            color: #666666;
            margin-bottom: 28px;
          }
          .product-description {
            width: 40%;
            line-height: 22px;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: #666666;
          }
          .rating {
            margin-bottom: 18px;
          }
          .price {
            display: flex;
            align-items: center;
            font-weight: 900;
            font-size: 20px;
            color: #666666;
            margin-bottom: 20px;
          }
          .price .add-cart {
            background: none;
            border: none;
            margin-left: 5px;
          }
          .price .add-cart:focus {
            outline: none;
          }
          @media (max-width: 1000px) {
            .product-img {
              width: 225px;
              height: 180px;
              margin-bottom: 28px;
            }
            .product-name {
              width: 80%;
              line-height: 20px;
              text-decoration: none;
              font-weight: 500;
              font-size: 18px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
            .product-description {
              width: 80%;
              line-height: 22px;
              text-decoration: none;
              font-weight: 400;
              font-size: 14px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
          }
        `}</style>
    </Page>
  );
}
