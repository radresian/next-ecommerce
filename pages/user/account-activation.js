import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import Link from 'next/link';
import { ACTIVATE } from '../../apollo/client/mutations';
import {useMutation, useApolloClient, useQuery} from '@apollo/client';
import FormContainer from '../../components/form/formContainer';

export default function AccountActivation() {
  const client = useApolloClient();
  const [activate] = useMutation(ACTIVATE);
  const [activationState, setActivationState] = useState(0);

  const router = useRouter();

  useEffect(()=> {
    const activateCall = async () => {
      try {
        const { data } = await activate({
          variables: {
            confirmationToken: router.asPath.split('confirmationToken=')[1]
          },
        });
        await client.resetStore();
        setActivationState(1);
      } catch (error) {
        setActivationState(2);
      }
    }
    activateCall();
  },[]);

  return (
    <Page>
      {activationState ?
      <FormContainer>
        { activationState === 1 ?
          <h3 className="formTitle">Kullanıcınız başarı ile aktive edildi!</h3>
          : <h3 className="formTitle">Aktivasyon Başarısız!</h3>
        }
        <Link href="/user/login">
          <a className="switchForm">Giriş Yap</a>
        </Link>
      </FormContainer>
      : <h3 className="formTitle">Yükleniyor...</h3>
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
