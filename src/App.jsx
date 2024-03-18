import styles from './App.module.css';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { MoreAboutMe } from './components/MoreAboutMe';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <AboutMe />
      <MoreAboutMe />
      <Experience />
      {/* < Projects /> */}
    </div>
  )
}

export default App
