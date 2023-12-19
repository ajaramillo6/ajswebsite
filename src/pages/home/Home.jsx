import Intro from "../../components/intro/Intro";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import "./home.css";

export default function Home() {

  return (
    <div className="home">
        <section><Intro /></section>
        <section><Skills /></section>
        <Projects />
        <section className="home-contact"><Contact /></section>
    </div>
  )
}
