import Image from 'next/image';

export default function Step({ index, text, img_url }) {

  return (
    <article>

      <span>{index}</span>

      <div className="product-img">
        <Image src={img_url} width="75" height="75" />
      </div>

      <div className="product-name">{text}</div>

      <style jsx>{`
        article {
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 24px;
          background: white;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
        }
        span {
          font-size: 30px
        }
        .product-img {
          margin-top: 10px;
        }
        .product-name {
          width: 80%;
          height: 100px;
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #666666;
          margin-bottom: 18px;
        }
      `}</style>
    </article>
  );
}
