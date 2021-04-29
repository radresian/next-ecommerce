import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '../../components/page';
import {useMutation, useQuery} from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import TextArea from '../../components/form/textArea';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';
import {VIEWER} from '../../apollo/client/queries';
import AlertSuccess from '../../components/alerts/success';
import {
  MdCloudUpload
} from 'react-icons/md';
import Image from 'next/dist/client/image';

export default function Profile() {
  const { data, loading, error } = useQuery(VIEWER);
  const viewer = data?.viewer;
  const router = useRouter();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [msgError, setMsgError] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');
  const [file, setFile] = useState('/img/logo.png');

  function handleFileChange(e){

  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await signUp({
        variables: {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        },
      });

    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  //https://twitter.com/intent/tweet?text=I%E2%80%99m%20on%20@withFND%20%F0%9F%8C%90%0A%0A0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9%0A%0Ahttps://foundation.app/0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9

  return (
    <Page title="BestDrops - User Profile">
      {viewer ?
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Update Profile</h3>

          {msgError && <AlertError message={msgError} />}
          {msgSuccess && <AlertSuccess message={msgSuccess} />}

          <InputContainer>
            <div className='inputContainer'>
              <div>
                <label className="custom-file-upload">
                  <input type="file" name="file" onChange={handleFileChange} />
                  <div className="icon">
                    <MdCloudUpload color="#000" size="22" />
                    <p className="icon-p"> Upload Profile Photo</p>
                  </div>
                </label>
                <p>Your Profile Photo</p>
              </div>
              <div className="profile-img">
                <Image src={file} layout='fill' objectFit='scale-down' />
              </div>

            </div>

            <p className='input-description'>Your name and surname</p>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(value) => setName(value)}
              value={name}
            />
            <p className='input-description'>Your nickname</p>
            <Input
              type="text"
              name="userName"
              placeholder="Username"
              onChange={(value) => setName(value)}
              value={name}
            />
            <p className='input-description'>Your email wont show other users</p>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            <p className='input-description'>Your Brief Description of your self</p>
            <TextArea
              rows="10"
              cols="50"
              name="description"
              placeholder="Short Bio"
              onChange={(value) => setName(value)}
              value={name}
            />
            <p className='input-description'>Verified twitter</p>
            <Input
              type="text"
              name="twitter"
              placeholder="twitter"
              onChange={(value) => setName(value)}
              value={name}
            />
            <p className='input-description'>Verified instagram</p>
            <Input
              type="text"
              name="instagram"
              placeholder="instagram"
              onChange={(value) => setName(value)}
              value={name}
            />



            <div className='inputContainer inputContainerColumn'>
              <div>
                <label className="custom-file-upload">
                  <input type="file" name="file" onChange={handleFileChange} />
                  <div className="icon">
                    <MdCloudUpload color="#000" size="22" />
                    <p className="icon-p"> Upload Cover Image</p>
                  </div>
                </label>
                <p>Your Page's Cover Image</p>
              </div>
              <div className="cover-img">
                <Image src={file} layout='fill' objectFit='scale-down' />
              </div>

            </div>
            <Button type="submit" title="Update Profile" />
          </InputContainer>
        </form>

      </FormContainer> : <p>Please Login</p>
      }

      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
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
          width: 40%;
          height: 200px;
          justify-content: center;
          display: flex;  
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
