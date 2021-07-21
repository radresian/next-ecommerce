import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
  FaCartArrowDown,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { PRODUCTS_BY_IDS, CART, WISHLIST } from '../../apollo/client/queries';
import Page from '../../components/page';
import ErrorAlert from '../../components/alerts/error';
import { toggleCart, toggleWishlist } from '../../utils/toggleProductStates';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const cart = useQuery(CART);
  const wishlist = useQuery(WISHLIST);

  const { data, loading, error } = useQuery(PRODUCTS_BY_IDS, {
    variables: {
      id,
    },
  });

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
                <img src={data.productsById[0].img_url} width="50" height="50" style={{borderRadius:50}} />
                <span style={{margin:15}}>@{data.productsById[0].creator}</span>
              </div>
            </button>
            <h1 className="product-name">{data.productsById[0].name}</h1>

            <h3 className="product-description">
              {data.productsById[0].description}
            </h3>
          </div>
          <div className="price-contianer">
            <div className="price-section">
              <p className="">Reserve Price</p>
              <p className="price-value">{data.productsById[0].price} ETH</p>
            </div>
            <div className="auction-section">
              <p>Once a bid has been placed and the reserve price has been met, a 24 hour auction for this artwork will begin.</p>
            </div>
          </div>
          <button className="place-bid">Place A Bid</button>
          <div className="bid-container">
            <div className="bid-info">
              <div className="bidder-avatar">
                <img src={data.productsById[0].img_url} width="50" height="50" style={{borderRadius:50}} />
              </div>
              <div className="bidder-and-date">
                <div className="bidder"><span>@radresian</span></div>
                <div className="bid-date"><span>Jul 21, 2021 at 11:54am</span></div>
              </div>
              <div className="bid-price">
                <span>2 ETH</span>
              </div>
            </div>
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
          .bidder-and-date {
            margin-top: 8px;
          }
          .bid-price {
            margin-top: 15px
          }
          .creator-div {
            display:flex;
            flex-direction:row;
            
          }
          .bidder-avatar {
            height: 50px;
            width: 50px;
          }
          .bid-container {
            display:flex;
            width:100%;
            border-top: 1px solid;
            padding-top: 20px;
          }
          .bid-info {
            display:flex;
            width:100%;
            flex-direction: row;
            justify-content: space-between;
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
