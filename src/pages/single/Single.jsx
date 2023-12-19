import "./single.css";
import SingleProject from "../../components/singleProject/SingleProject";
import Contact from "../../components/contact/Contact";
import { projects } from "../../data";
import { useContext } from "react";
import { ThemeContext } from '../../context';

export default function Single() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <div className="single" data-theme={theme}>
      <div className="single-wrapper">
        <SingleProject
          projects={projects} 
        />
      </div>
    </div>
    <Contact />
    </>
  )
}
