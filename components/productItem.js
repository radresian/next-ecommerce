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

export default function ProductSection({ id, name, rating, img_url, price }) {
  const cart = useQuery(CART);
  const wishlist = useQuery(WISHLIST);

  return (
    <article>
      <div className="product-img">
        <Link href={`/product/${id}`} >
          <Image src={img_url} layout='fill' objectFit='cover' className="img-class"  />
        </Link>
      </div>

      <Link href={`/product/${id}`}>
        <a className="product-name">{name}</a>
      </Link>



      <div className="price-container">
        <div className="price">
          <p className="price-header">Current Bid</p>
          <p className="price-value1">{price} ETH</p>
        </div>
        <div className="status">
          <p className="price-header">Ending In</p>
          <p className="price-value1">Auction Ended</p>
        </div>
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
        .product-name {
          width: 80%;
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #666666;
          margin-bottom: 18px;
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
          background: #021e66;
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
