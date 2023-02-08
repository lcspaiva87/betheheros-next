import { ongsProps } from "@/@types/ongs";
import { getOngs } from "@/connection/ongs";
import { Inter } from "@next/font/google";
import { GetServerSideProps} from "next";

import RegisterView from "../../views/register/index";

export default function Register({ ongs }: any) {
  return (
    <>
      <RegisterView ongs={ongs} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ongs = await getOngs();
  return {
    props: {
      ongs,
    },
    
  };
};
