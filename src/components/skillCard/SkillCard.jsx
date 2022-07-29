import "./skillCard.css";

export default function SkillCard({ title, logo, desc }) {
  return (
    <div className="skillCard">
      <div className="skillCard-wrapper">
        <div className="skillCard-title-wrapper">
          <div className="skillCard-logo">
            <i className={logo}></i>
          </div>
          <div className="skillCard-title">
            {title}
          </div>
        </div>
        <div className="skillCard-desc">
          {desc}
        </div>
      </div>
    </div>
  )
}
