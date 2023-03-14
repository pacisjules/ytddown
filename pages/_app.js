import '@/styles/globals.css'
import Layout from "../app/layouts/Layout.js";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <NextNProgress color="red" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Component {...pageProps} />
    </Layout>
  )
}
