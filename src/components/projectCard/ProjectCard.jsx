import "./projectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, img, link, status, type, overview }) {
  return (
  <>
    <div className={type === 'portfolio' ? "portfolioCard" : "projectCard"}>
      <Link to={`/projects/${id}`}  className="link">
        <div className={type === 'portfolio' ? "portfolioCard-wrapper" : "projectCard-wrapper"}>
          {status === 'incomplete' &&
            <div className="projectCard-working-container">
              <i className="projectCard-working fa-solid fa-person-digging"></i>
            </div>
          }
          <div className={type === 'portfolio' ? "portfolioCard-img-container" : "projectCard-img-container"}>
            <img className={type === 'portfolio' ? "portfolioCard-img" : "projectCard-img"} src={img} alt="" />
          </div>
          <div className={type === 'portfolio' ? "portfolioCard-info" : "projectCard-info"}>
            <div className="projectCard-title">
              {title}
            </div>
            {type === 'portfolio' &&
            <div className="portfolioCard-overview">
              {overview}
            </div>}
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
