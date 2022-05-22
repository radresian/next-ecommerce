import { useRouter } from 'next/router';
import Page from '../../components/page';
import {useQuery} from '@apollo/client';
import {USERS} from '../../apollo/client/queries';
import ProductsGrid from '../../components/productsGrid';
import ProductItem from '../../components/productItem';

import {
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Users() {
  const router = useRouter();
  const { data, loading, error } = useQuery(USERS, {
    variables: {
      creator:true,
    },
  });

  const users = data?.users || [];


  return (
    <Page title="eNeF-Turk Sanatçılar">
      <div className="container">
        <div className="cover-img">
          <img src={'/img/chain2.jpeg'} style={{objectFit: 'cover', width: '100%'}} />
        </div>

        <div className="profile-img">
          <img src={'/img/logo.png'} width="200" height="200" style={{borderRadius:200}} />
        </div>
        <div className="profile-content">
          <div className="items">
            <h2 className="name">Sanatçılar</h2>
            <div className="items-container">
              <ProductsGrid>
                {users.map((user) => (
                  <ProductItem
                    key={user.id}
                    product={{creator_id:user.id, twitter:user.twitter, instagram:user.instagram, name:user.name, creator_userName: user.userName, img_url:user.profilePhoto || user.coverImage, isProfile : true}}
                  />
                ))}
              </ProductsGrid>
            </div>
          </div>

        </div>


        </div>

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
          padding-top: 16px;
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
