import styles from "../styles/Projects.module.scss";

export default function Projects() {
    return (
        <main className={styles.projects}>
            <h2>Projects</h2>

            <div className={styles.projectList}>
                <div className={styles.project}>
                    <a href="https://vue-project-manager.netlify.app" target="_blank">
                        <div className={styles.vpmImageBackground}>
                            <img alt="Vue Project Manager Icon" src="/vpm-icon.svg" height="100" className={styles.icon}/>
                        </div>
                    </a>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            <h3>
                                <a href="https://vue-project-manager.netlify.app" target="_blank">Vue Project Manager</a>
                            </h3>
                            <a href="https://github.com/davidmichaelm/vue-project-manager" target="_blank" className={styles.codeLink}>
                                <img alt="Github" src="/GitHub-Mark-32px.png" height="24"/>
                            </a>
                        </div>

                        <p>
                            A Kanban or Scrum-style project board with real-time cloud saving and collaboration.
                        </p>
                        <p>
                            I learned a ton from putting this app together.
                            Working with <strong>Google Firebase</strong> for authentication and data storage is an amazing alternative to a hand-coded backend.
                            But I realized the app's data structures could quickly get out of hand, so I implemented <strong>Vuex</strong>, a state management library for <strong>Vue</strong>.
                        </p>
                        <p>
                            Using <strong>Vuex</strong> also enabled me to make use of <strong>Vuexfire</strong> to power the app's real-time cloud saving--a feature that seemed necessary to make the app useful.
                        </p>
                        <p>
                            Tech used: <a href="https://vuejs.org">Vue.js</a>, <a href="https://vuex.vuejs.org">Vuex</a>, <a href="https://firebase.google.com">Firebase</a>, <a href="https://getbootstrap.com">Bootstrap</a>
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
                            A small web app that helps you narrow down your options to choose your next restaurant.
                        </p>
                        <p>
                            This app pulls data from both the <strong>Google Maps API</strong> (for location autocomplete) and the <strong>Yelp Fusion API</strong> (for restaurant data). <strong>Svelte</strong> works nicely as a simple component framework, with <strong>Sapper</strong> filling out the backend.
                        </p>
                        <p>
                            This was my first attempt to build a complete web app that someone might actually find helpful, and I'm pleased with the result.
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