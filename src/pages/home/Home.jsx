import Intro from "../../components/intro/Intro";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
        <Intro />
        <Skills />
        <Projects />
    </div>
  )
}
