import "./projectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, img, desc, link, status }) {
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
          <div className="projectCard-info">
            <div className="projectCard-title">
              {title}
            </div>
            <div className="projectCard-desc">
              {desc}
            </div>
          </div>
        </div>
      </Link>
      <div className="projectCard-bottom">
        <div className="project-bottom-left">
          <Link to={`/projects/${id}`}  className="link">
            <div className="project-bottom-read">
              Read More
            </div>
          </Link>
        </div>
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
  </>
  )
}
