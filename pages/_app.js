import '../public/reset.css';
import '../components/landing/index.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { Web3Provider } from '../lib/web3-browser-provider';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ApolloProvider>
  );
}
