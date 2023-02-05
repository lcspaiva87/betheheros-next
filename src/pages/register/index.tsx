import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import RegisterView from "../../views/register/index"
import { GetStaticProps } from 'next'
import { getOngs } from '@/lib'
export default function Register() {
  return (
    <>
      <RegisterView />
    </>
  )
}


