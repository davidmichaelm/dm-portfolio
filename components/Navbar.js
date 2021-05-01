import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
    return (
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/logo.svg" height="40" alt="DM Logo"/>
                </div>

                <div className={styles.navItem}>
                    <a href="mailto:davidmarquardtdev@gmail.com">Contact</a>
                </div>

                <div className={styles.navItem}>
                    <a href="/DavidMarquardtResume.docx" target="_blank">Resume</a>
                </div>

                <div className={styles.navItem}>
                    <a href="https://github.com/davidmichaelm" target="_blank">Github</a>
                </div>

                <div className={styles.navItem}>
                    <a href="https://www.linkedin.com/in/david-marquardt-600005197/" target="_blank">LinkedIn</a>
                </div>
            </nav>
    );
}
