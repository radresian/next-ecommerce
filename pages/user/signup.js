import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '../../components/page';
import { SIGN_UP } from '../../apollo/client/mutations';
import { useMutation } from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';

export default function SignUp() {
  const [signUp] = useMutation(SIGN_UP);
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [msgError, setMsgError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password != confirm_password) {
      setMsgError('Şifre tekrarı uyumsuz');
      setPassword('');
      setConfirm_password('');
      return;
    }

    try {
      const result = await signUp({
        variables: {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        },
      });
      setRegisterSuccess(true);
    } catch (error) {
      setMsgError(getErrorMessage(error));
    }
  }

  return (
    <Page title="eNeF-Turk Kullanıcı Kayıt">
      {registerSuccess ?
        <FormContainer>
          <form>
            <h3 className="formTitle">Kayıt Başarılı</h3>
            <span>
              Emailinize gelen aktivasyon maili ile kullanıcınızı aktive ettikten sonra {' '}
              <Link href="/user/login">
                <a className="switchForm">Giriş</a>
              </Link> Yapabilirsiniz
            </span>
          </form>
        </FormContainer>
        :
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <h3 className="formTitle">Kayıt Ol</h3>

            {msgError && <AlertError message={msgError}/>}
            <InputContainer>
              <Input
                type="text"
                name="name"
                placeholder="Nick (Takma Ad)"
                onChange={(value) => setName(value)}
                value={name}
              />
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
              <Input
                type="password"
                name="confirm_password"
                placeholder="Şifre Tekrar"
                onChange={(value) => setConfirm_password(value)}
                value={confirm_password}
              />

              <Button type="submit" title="Kayıt Ol"/>
            </InputContainer>
          </form>

          <Link href="/user/login">
            <a className="switchForm">Zaten Bir Kullanıcım Var</a>
          </Link>
        </FormContainer>
      }
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
