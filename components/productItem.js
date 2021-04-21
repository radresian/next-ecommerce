import { useQuery } from '@apollo/client';
import Link from 'next/link';
import {
  FaCartArrowDown,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { toggleCart, toggleWishlist } from '../utils/toggleProductStates';
import { CART, WISHLIST } from '../apollo/client/queries';

export default function ProductSection(props) {
  const { id, name, img_url, price, creator, user_id, sellType } = props.product;
  const cart = useQuery(CART);
  const wishlist = useQuery(WISHLIST);

  let priceContainerColor = '#3176ba';
  if(sellType === 'auction'){
    priceContainerColor = '#021e66';
  }
  return (
    <article>
      <div className="product-img">
        <Link href={`/product/${id}`} >
          <Image src={img_url} layout='fill' objectFit='cover' className="img-class"  />
        </Link>
      </div>

      <div className='info-container'>
        <Link href={`/product/${id}`}>
          <a className="product-name">{name}</a>
        </Link>

        <Link href={`/creator/${user_id}`}>
          <a className="creator">@{creator}</a>
        </Link>
      </div>

      <div className="price-container">
        <div className="price">
          {sellType === 'auction' ? <p className="price-header">Current Bid</p>: <p className="price-header">Reserve Price</p>}
          <p className="price-value1">{price} ETH</p>
        </div>
        {sellType === 'auction' &&
          <div className="status">
            <p className="price-header">Ending In</p>
            <p className="price-value1">Auction Ended</p>
          </div>
        }
      </div>

      <style jsx>{`
        article {
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 0;
          background: white;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          justify-content: space-between;
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
          padding-bottom: 100%;
        }
        .info-container {
          display:flex;
          width:100%;
          flex-direction: column;
          align-items: flex-start
        }
        .product-name, .creator {
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #666666;
          margin-left: 20px;
          margin-bottom: 10px;
        }
        .product-name:hover {
          text-decoration: underline;
          font-weight: 600;
        }
        .rating {
          margin-bottom: 24px;
        }
        .price-container {
          display: flex;
          align-items: center;
          font-weight: 900;
          font-size: 16px;
          color: white;
          width:100%;
          background: ${priceContainerColor};
          flex-direction: row;
          justify-content: space-around;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          height:80px;
        }
        .price, .status {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 40px;
          justify-content: space-around;
        }
        .price-header {
          font-size: 15px;
          font-weight: 400;
        }
        .price .add-cart {
          background: none;
          border: none;
          margin-left: 5px;
        }
        .price .add-cart:focus {
          outline: none;
        }
      `}</style>
    </article>
  );
}
