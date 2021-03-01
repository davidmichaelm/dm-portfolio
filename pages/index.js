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

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <Navbar />

            <Header />

            <Projects />

            <footer className={styles.footer}>
                <small>
                    Copyright &copy; 2021 David Marquardt. All rights reserved.
                </small>
            </footer>
        </div>
    )
}
