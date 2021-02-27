import styles from "../styles/Projects.module.scss";

export default function Projects() {
    return (
        <main className={styles.projects}>
            <h2>Projects</h2>

            <div className={styles.projectList}>
                <div className={styles.project}>
                    <a href="#">
                        <div className={styles.vpmImageBackground}>
                            <img alt="Vue Project Manager Icon" src="/vpm-icon.svg" height="100"/>
                        </div>
                    </a>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            <h3>
                                <a href="#">Vue Project Manager</a>
                            </h3>
                            <a href="https://github.com/davidmichaelm/vue-project-manager" className={styles.codeLink}>
                                <img alt="Github" src="/GitHub-Mark-32px.png" height="24"/>
                            </a>
                        </div>

                        <p>
                            A Kanban or Scrum-style project board with real-time cloud saving and collaboration.
                        </p>
                        <p>
                            Tech used: <a href="https://vuejs.org">Vue.js</a>, <a href="https://firebase.google.com">Firebase</a>, <a href="https://getbootstrap.com">Bootstrap</a>
                        </p>
                    </div>
                </div>

                <div className={styles.project}>
                    <a href="#">
                        <div className={styles.jpoImageBackground}>
                            <img alt="Just Pick One Icon" src="/jpo-icon.svg" height="100"/>
                        </div>
                    </a>

                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            <h3>
                                <a href="#">Just Pick One</a>
                            </h3>
                            <a href="https://github.com/davidmichaelm/just-pick-one" className={styles.codeLink}>
                                <img alt="Github" src="/GitHub-Mark-32px.png" height="24"/>
                            </a>
                        </div>

                        <p>
                            Helps you choose your next restaurant.
                        </p>
                        <p>
                            Tech used: <a href="https://svelte.dev">Svelte</a> + <a href="https://sapper.svelte.dev">Sapper</a>, <a href="https://developers.google.com/maps/documentation">Google Maps API</a>, <a href="https://www.yelp.com/fusion">Yelp Fusion API</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}