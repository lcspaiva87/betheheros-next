import { ongsProps } from '@/@types/ongs';
import { getOngs } from '@/connection/ongs';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import HomeView from "../views/home/index"


export default function Home(props:any) {

  return (
    <>
      <Head>
        <title>Be the Hero</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView  ongs={props.data} />
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const ongs = await getOngs();
  console.log("getServerSideProps",ongs)
  return {
    props: {
      data: ongs,
    },
    
  };
};
