import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>David Marquardt</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <Header></Header>

            <main className={styles.main}>

            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
