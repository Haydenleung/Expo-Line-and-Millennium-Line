import Head from "next/head";
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

//REASOn using dynamic is because map will render in client side.

export default function Home() {
  return (
    <>
      <Head>
        <title>Transit Map</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <DynamicMap />
    </>
  )
}
