import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>The Home Page</h1>
          <ul>
              <li>
                  <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                  <Link href="/clients">Clients</Link>
              </li>
          </ul>
      </main>
    </>
  )
}

export default Home;
