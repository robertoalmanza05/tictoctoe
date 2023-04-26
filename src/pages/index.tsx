import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Tablero from '@/components/Tablero'
import Link from 'next/link';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe  </title>
        <meta name="description" content="xd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tablero />
     <Link href="/A">xd</Link>  
         </main>
    </div>
  );
}
