import styles from "../styles/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Hi, I'm David,</h1>
                <h1 className={styles.subheading}>Software Developer</h1>
                <a href="#" className="button">Contact me today!</a>
            </div>
            <div className={styles.headerRight}>
                <p>
                    I'm a driven and resourceful junior developer based in <strong>Milwaukee, WI</strong>.
                </p>
                <p>
                    Frontend development with <strong>Vue</strong>, <strong>React</strong>, and other modern tech are the most interesting to me, but I'm also proficient with <strong>.Net Core</strong> backends.
                </p>
                <p>
                    Currently studying Web and Software Development full-time at <a href="https://www.wctc.edu">Waukesha County Technical College</a>, and on the lookout for my next opportunity.
                </p>
            </div>
        </header>
    );
}