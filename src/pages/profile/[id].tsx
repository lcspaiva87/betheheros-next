
import { GetServerSideProps } from "next";
import {ProfileView} from "../../views/profile";
import { ongsProps } from '@/@types/ongs';
import { getIncidents } from "@/services/incidents";
import { useRouter } from "next/router";
export default function profile(props:any) {
  return <ProfileView   />;
}


