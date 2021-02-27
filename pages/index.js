import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <div>
            <Head>
                <title>David Marquardt</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar />

            <Header />

            <Projects />

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
