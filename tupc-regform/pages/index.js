import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from "../components/HeaderSection/Header";
import Body from "../components/BodySection/Body";
import Footer from "../components/FooterSection/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TUPC Registration Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  )
}