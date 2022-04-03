import { useState, useEffect } from 'react';
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
import {UPDATE_PROFILE} from '../../apollo/client/mutations';

export default function ProfileEdit() {
  const { data, loading, error } = useQuery(VIEWER);
  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const viewer = data?.viewer;
  const router = useRouter();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [wallet, setWallet] = useState('');
  const [instagram, setInstagram] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [msgError, setMsgError] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('/img/logo.png');
  const [coverImage, setCoverImage] = useState('/img/logo.png');

  useEffect(()=>{
    if(data?.viewer){
      setName(data.viewer.name || '');
      setUserName(data.viewer.userName || '');
      setEmail(data.viewer.email || '');
      setWallet(data.viewer.wallet || '');
      setTwitter(data.viewer.twitter || '');
      setInstagram(data.viewer.instagram || '');
      setDescription(data.viewer.description || '');
      if(data.viewer.profilePhoto){
        setProfilePhoto(data.viewer.profilePhoto);
      }
      if(data.viewer.coverImage){
        setCoverImage(data.viewer.coverImage);
      }
    }
  },[data]);

  function handleProfilePhotoChange(e){
    const selectedFile = e.target.files[0];
    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);
    fetch('/api/create-file', {
      method: 'POST',
      body: data
    }).then((res) => {
      res.json().then(json=>{
        console.log(json.path.replace('public',''));
        setProfilePhoto(json.path.replace('public',''))
      })
    });
  }

  function handleCoverImageChange(e){
    const selectedFile = e.target.files[0];
    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);
    fetch('/api/create-file', {
      method: 'POST',
      body: data
    }).then((res) => {
      res.json().then(json=>{
        console.log(json.path.replace('public',''));
        setCoverImage(json.path.replace('public',''))
      })
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await updateProfile({
        variables: {
          name: name.trim(),
          email: email.trim(),
          userName: userName.trim(),
          wallet: wallet.trim(),
          twitter: twitter.trim(),
          instagram: instagram.trim(),
          description: description.trim(),
          profilePhoto: profilePhoto.trim(),
          coverImage: coverImage.trim()
        },
      });
      setMsgSuccess('Profile updated successfully');
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  //https://twitter.com/intent/tweet?text=I%E2%80%99m%20on%20@withFND%20%F0%9F%8C%90%0A%0A0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9%0A%0Ahttps://foundation.app/0x2E20e921d16Cd31dfEeA9beFDAb9A5480634CaB9

  return (
    <Page title="eNeF-Turk Profil Düzenle">
      {viewer ?
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Profil Düzenle</h3>

          {msgError && <AlertError message={msgError} />}
          {msgSuccess && <AlertSuccess message={msgSuccess} />}

          <InputContainer>
            <div className='inputContainer'>
              <div>
                <label className="custom-file-upload">
                  <input type="file" name="file" onChange={handleProfilePhotoChange} />
                  <div className="icon">
                    <MdCloudUpload color="#000" size="22" />
                    <p className="icon-p"> Profil Fotoğrafı Yükle</p>
                  </div>
                </label>
                <p>Profil Fotoğrafınız</p>
              </div>
              <div className="profile-img">
                <img className="image" src={profilePhoto}  />
              </div>

            </div>

            <p className='input-description'>Adınız ve Soyadınız</p>
            <Input
              type="text"
              name="name"
              placeholder="Adınız ve Soyadınız"
              onChange={(value) => setDe(value)}
              value={name}
            />
            <p className='input-description'>Kullanıcı Adınız</p>
            <Input
              type="text"
              name="userName"
              placeholder="Kullanıcı Adınız"
              onChange={(value) => setUserName(value)}
              value={userName}
            />
            <p className='input-description'>Emailiniz diğer kullanıcılara gösterilmez</p>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            <p className='input-description'>Kendiniz hakkında</p>
            <TextArea
              rows="10"
              cols="50"
              name="description"
              placeholder="Kısa Biografi"
              onChange={(value) => setDescription(value)}
              value={description}
            />
            <p className='input-description'>Twitter</p>
            <Input
              type="text"
              name="twitter"
              placeholder="twitter"
              onChange={(value) => setTwitter(value)}
              value={twitter}
            />
            <p className='input-description'>Instagram</p>
            <Input
              type="text"
              name="instagram"
              placeholder="instagram"
              onChange={(value) => setInstagram(value)}
              value={instagram}
            />
            <p className='input-description'>Ethereum Cüzdanı</p>
            <Input
              type="text"
              name="wallet"
              placeholder="wallet"
              onChange={(value) => setWallet(value)}
              value={wallet}
            />


            <div className='inputContainer inputContainerColumn'>
              <div>
                <label className="custom-file-upload">
                  <input type="file" name="file" onChange={handleCoverImageChange} />
                  <div className="icon">
                    <MdCloudUpload color="#000" size="22" />
                    <p className="icon-p"> Kapak Fotoğrafı Yükle</p>
                  </div>
                </label>
                <p>Profil Sayfanızın Kapak Fotoğrafı</p>
              </div>
              <div className="cover-img">
                <img className="image" src={coverImage} />
              </div>

            </div>
            <Button type="submit" title="Profili Düzenlee" />
          </InputContainer>
        </form>

      </FormContainer> : <p>Lütfen Giriş Yapın</p>
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
        .image {
          object-fit: scale-down 
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
