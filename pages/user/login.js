import { useState } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import Link from 'next/link';
import { SIGN_IN } from '../../apollo/client/mutations';
import {useMutation, useApolloClient, useQuery} from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';

export default function Login() {
  const client = useApolloClient();
  const [signIn] = useMutation(SIGN_IN);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState('');

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await signIn({
        variables: {
          email: email.trim(),
          password: password.trim(),
        },
      });
      await client.resetStore();
      if (data.signIn.user) {
        await router.replace('/market');
      }
    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  return (
    <Page>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Giriş</h3>

          {msgError && <AlertError message={msgError} />}

          <InputContainer>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(value) => setEmail(value)}
              value={email}
            />
            <Input
              type="password"
              name="password"
              placeholder="Şifre"
              onChange={(value) => setPassword(value)}
              value={password}
            />

            <Button type="submit" title="Giriş" />
          </InputContainer>
        </form>

        <Link href="/user/signup">
          <a className="switchForm">Yeni Kullanıcı Oluştur</a>
        </Link>
        <Link href="/user/resetpassword">
          <a className="switchForm">Şifremi Unuttum</a>
        </Link>
      </FormContainer>

      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
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
