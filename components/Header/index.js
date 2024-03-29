import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Hi, I'm David,</h1>
                <h1 className={styles.subheading}>Software Developer</h1>
                <a href="mailto:davidmarquardtdev@gmail.com" className="button">Contact me today!</a>
            </div>
            <div className={styles.headerRight}>
                <p>
                    I'm a driven and resourceful full-stack developer based in <strong>Milwaukee, WI</strong>.
                </p>
                <p>
                    Frontend development with <strong>React</strong>, <strong>Vue</strong>, and other modern tech are the most interesting to me, and I'm also proficient with <strong>.Net Core</strong> backends.
                </p>
            </div>
        </header>
    );
}
