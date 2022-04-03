import {useEffect} from 'react';
import PageContainer from './page-container';
import Header from './header';
import Footer from './footer';

export default function Page({ title, description, children }) {
  useEffect(() => {
    if(window){
      const SmoothScroll = require('smooth-scroll');
      new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      })
    }
  }, []);

  return (
    <PageContainer title={title} description={description}>
      <Header />

      <div className="content" id="content">{children}</div>

      <Footer />
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          background: azure;
          padding-top: 50px;
        }
        @media (max-width: 1256px) {
          .content {
            padding-top: 0;
          }
        }
      `}</style>
    </PageContainer>
  );
}
