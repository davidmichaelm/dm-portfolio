import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
    return (
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/logo.png" height="40" alt="DM Logo"/>
                </div>

                <div className={styles.navItem}>
                    <a href="#">Contact</a>
                </div>

                <div className={styles.navItem}>
                    <a href="#">Resume</a>
                </div>

                <div className={styles.navItem}>
                    <a href="https://www.linkedin.com/in/david-marquardt-600005197/">LinkedIn</a>
                </div>
            </nav>
    );
}