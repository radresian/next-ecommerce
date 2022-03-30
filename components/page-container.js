import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title || 'eNeF-Turk | Yetkili NFT Pazar Yeri'}</title>
        {description !== false && (
          <meta
            name="description"
            content={
              description ||
              'Türkiye\'nin ilk Özel, Doğrulanmış NFT pazar yeri.'
            }
          />
        )}
        <link rel="icon" href="img/logo1.png" />
      </Head>

      <main>{children}</main>

      <style jsx>{`
        main {
          display: flex;
          background-color: #fafafa;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: Roboto;
        }
      `}</style>
    </div>
  );
}
