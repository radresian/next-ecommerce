import { useRouter } from 'next/router';
import Page from '../../components/page';
import {useQuery} from '@apollo/client';
import {USER, VIEWER} from '../../apollo/client/queries';

export default function Profile() {

  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(VIEWER);
  const { data: userData, loading: userLoading, error: userError } = useQuery(USER, {
    variables: {
      id:Number(id),
    },
  });

  const viewer = data?.viewer;
  const user =userData?.userById;


  return (
    <Page title="BestDrops - User Profile">
      {user &&
      <div className="container">

          <div className="profile-img">
            <img src={user.profilePhoto || '/img/logo.png'} width="200" height="200" style={{borderRadius:200}} />
          </div>
        <div className="profile-content">
          <div className="user-info">
            <h1 className="user-name">{user.userName}</h1>
          </div>

        </div>


        </div>
      }

      <style jsx>{`
        .container {
          width:100%
        }
        .user-info{
          padding-top: 80px;
          padding-left: 20px;
        }
        form {
          width: 100%;
          align-items: center;
        }
        .profile-content {
          width:100%;
          border-top: solid 2px;
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
          position: relative;
          width: 100%;
          height: 400px;
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
