import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title || 'BestDrops - Autonomous NFT Market'}</title>
        {description !== false && (
          <meta
            name="description"
            content={
              description ||
              'to be the Best Decentralized Autonomous NFT Market Organization.'
            }
          />
        )}
        <link rel="icon" href="/favicon.png" />
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
