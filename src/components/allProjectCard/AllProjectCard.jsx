import "./allProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, img, desc, link }) {

  return (
  <div className="allProjectCard">
    <Link to={`/projects/${id}`}  className="link">
      <div className="allProjectCard-wrapper">
        <div className="allProjectCard-img-container">
          <img className="allProjectCard-img" src={img} alt="" />
        </div>
        <div className="allProjectCard-info">
          <div className="allProjectCard-title">
            {title}
          </div>
          <div className="allProjectCard-desc">
            {desc}
          </div>
        </div>
      </div>
    </Link>
    <div className="allProjectCard-bottom">
      <div className="bottom-left">
        <Link to={`/projects/${id}`}  className="link">
          <div className="bottom-read">
            Read More
          </div>
        </Link>
      </div>
      <div className="bottom-right">
        <a href={link}  className="link">
          <div className="bottom-visit">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}