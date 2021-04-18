import { useState } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import Link from 'next/link';
import { SIGN_IN } from '../../apollo/client/mutations';
import { useMutation, useApolloClient } from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';
import Image from 'next/dist/client/image';

export default function Create() {
  const client = useApolloClient();
  const [signIn] = useMutation(SIGN_IN);
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [msgError, setMsgError] = useState('');

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await client.resetStore();
      const { data } = await signIn({
        variables: {
          email: email.trim(),
          password: password.trim(),
        },
      });
      if (data.signIn.user) {
        await router.push('/market');
      }
    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  function handleFileChange(e){
    const selectedFile = e.target.files[0];
    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);
    fetch('/api/create-file', {
      method: 'POST',
      body: data
    }).then((res) => {
      res.json().then(json=>{
        console.log(json.path.replace('public',''));
        setFile(json.path.replace('public',''))
      })
    });
  }
  return (
    <Page>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Create NFT</h3>

          {msgError && <AlertError message={msgError} />}

          <InputContainer>
            <Input
              type="input"
              name="name"
              placeholder="Name"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            <Input
              type="input"
              name="description"
              placeholder="Description"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            <div style={{width:'104%'}}>
              <select id="sell-type" name="sell-type">
                <option value="" selected>
                  Price Offer
                </option>
                <option value="#">Auction</option>
                <option value="#">List Price</option>
              </select>
            </div>
            <Input
              type="input"
              name="price"
              placeholder="Reserve Price/List Price"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            {file &&
              <div className="product-img">
                <Image src={file} layout='fill' objectFit='scale-down' />
              </div>
            }
            <input type="file" name="file" onChange={handleFileChange} />
            <Button type="submit" title="Create" />
          </InputContainer>
        </form>

      </FormContainer>

      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
        }
        #sell-type {
          width: 100%;  
          font-size: 15px;
          margin-bottom: 34px;
          color: #4d4d4d;
          font-weight: 500;
          border: none;
          border-radius: 6px;
          background-color: #ffffff;
          box-shadow: 1px 1px 4px rgb(0 0 0 / 20%);
          padding-bottom: 1.25em;
          padding-top: 1.25em;
          padding-left: 32px;
        }
        .product-img {
            position: relative;
            width: 100%;
            height: 500px;
            margin-bottom: 28px;
            justify-content: center;
            display: flex;  
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
