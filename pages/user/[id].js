import { useRouter } from 'next/router';
import Page from '../../components/page';
import {useQuery} from '@apollo/client';
import {PRODUCTS_BY_CREATOR_ID, USER, VIEWER} from '../../apollo/client/queries';
import ProductsGrid from '../../components/productsGrid';
import ProductItem from '../../components/productItem';

import {
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Profile() {

  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(VIEWER);
  const { data: userData, loading: userLoading, error: userError } = useQuery(USER, {
    variables: {
      id:Number(id),
    },
  });
  const { data: productsData, loading: productsLoading, error: productsError } = useQuery(PRODUCTS_BY_CREATOR_ID, {
    variables: {
      id:Number(id),
    },
  });

  const viewer = data?.viewer;
  const user =userData?.userById;
  const products = productsData?.productsByCreatorId || [];


  return (
    <Page title="eNeF-Turk Kullanıcı Profili">
      {user &&
      <div className="container">
        <div className="cover-img">
          <img src={user.coverImage || '/img/chain2.jpeg'} style={{objectFit: 'cover', width: '100%'}} />
        </div>

        <div className="profile-img">
          <img src={user.profilePhoto || '/img/logo.png'} width="200" height="200" style={{borderRadius:200}} />
        </div>
        <div className="profile-content">
          <div className="user-info">
            <h1 className="user-name">@{user.userName}</h1>
            <h2 className="name">{user.name}</h2>
            <div className="twitter-container">
              <span className="twitter">{user.twitter}</span>
              <FaTwitter />
            </div>
            <div className="twitter-container">
              <span className="twitter">{user.instagram}</span>
              <FaInstagram />
            </div>
            <h2 className="bio">Sanatçı Hakkında</h2>


            <div className="bio-divider">
              <span className="description">{user.description}</span>
            </div>

          </div>
          <div className="items">
            <h2 className="name">Sanat Eserleri</h2>
            <div className="items-container">
              <ProductsGrid>
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                  />
                ))}
              </ProductsGrid>
            </div>
          </div>

        </div>


        </div>
      }

      <style jsx>{`
        .container {
          width:100%
        }
        h1 {
          font-size: 30px;
          margin-bottom: 24px;
        }
        h2 {
          font-size: 20px;
          margin-bottom: 16px;
        }
        .items-container {
          border-top: outset 2px;
          flex:1;
        }
        .items {
          display: flex;
          flex:1;
          flex-direction: column;
          padding-top: 80px;
          padding-left: 20px;
        }
        .user-info{
          width: 400px;
          padding-top: 80px;
          padding-left: 20px;
        }
        form {
          width: 100%;
          align-items: center;
        }
        .twitter {
          margin-right: 8px;
        }
        .twitter-container {
          display: inline-flex;
          padding-left: 16px;
          padding-right: 16px;
          flex-direction: row;
          align-items: center;
          border-radius: 9999px;
          height: 60px;
          margin-bottom: 20px;
          font-size: 16px;
          background-color: white;
          font-weight: bold;
        }
        .bio {
          margin-top: 32px;
          font-weight: bold
        }
        .bio-divider {
          margin-top: 16px;
          padding-top: 16px;
          border-top: outset 2px
        }
        .profile-content {
          width:100%;
          border-top: outset 2px;
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 900px) {
          .profile-content {
            flex-direction: column;
          }
        }
        .input-description {
          align-self: flex-start;
          padding-left: 10px;
          padding-bottom: 5px;
        }
        .inputContainer {
          width:100%;
          display:flex;
          justify-content: space-between;
        }
        .inputContainerColumn {
          flex-direction: column;
          align-items: center;
        }
        input[type="file"] {
          display: none;
        }
        .custom-file-upload {
          border: 1px solid #ccc;
          display: inline-block;
          padding: 6px 12px;
          cursor: pointer;
          margin-bottom:20px;
          margin-top:20px;
        }
        .profile-img {
          position: relative;
          top: 55px;
          left: 20px;
        }
        .cover-img {
          position: absolute;
          top: 62px;
          width: 100%;
          height: 233px;
          justify-content: center;
          display: flex;
        }
        .icon {
          display:flex;
        }
        .icon-p {
          margin-top: 3px;
          margin-left: 10px;
        }
        form .formTitle {
          text-align: center;
          font-size: 38px;
          font-weight: 1000;
          letter-spacing: 1.65px;
          color: #b2b2b2;
          text-transform: uppercase;
          margin-bottom: 84px;
        }
        .switchForm {
          color: #b2b2b2;
          margin-top: 12px;
          font-weight: 500;
        }
      `}</style>
    </Page>
  );
}
