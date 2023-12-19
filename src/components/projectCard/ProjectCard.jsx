import { useContext } from "react";
import "./projectCard.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";

export default function ProjectCard({ id, title, img, link, status }) {
  const { theme } = useContext(ThemeContext);
  return (
  <>
    <div className="projectCard">
      <Link to={`/projects/${id}`}  className="link">
        <div className="projectCard-wrapper">
          {status === 'incomplete' &&
            <div className="projectCard-working-container">
              <i className="projectCard-working fa-solid fa-person-digging"></i>
            </div>
          }
          <div className="projectCard-img-container">
            <img className="projectCard-img" src={img} alt="" />
          </div>
          <div className={(theme === 'dark' ? "projectCard-info" : "projectCard-info-light")}>
            <div className={theme === 'dark' ? "projectCard-title" : "projectCard-title-light"}>
              {title}
            </div>
            <div className="projectCard-bottom">
              <div className="project-bottom-right">
                {status === "complete" &&
                  <a href={link}  className="link">
                    <div className="project-bottom-visit">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </>
  )
}
