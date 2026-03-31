import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Published Research Paper</h4>
                <h5>IJCRT</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Published a comprehensive research paper titled "DRONE TECHNOLOGIES: STATE OF THE ART, CHALLENGES AND FUTURE SCOPE" detailing the applications and impact of drone tech.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OCI 2025 Generative AI Professional</h4>
                <h5>Oracle Cloud Infrastructure</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Oracle Cloud Infrastructure 2025 Certified Generative AI Professional — certified on September 09, 2025 in building and deploying GenAI solutions on OCI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Student</h4>
                <h5>B.E / B.Tech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Consistently sharpening programming skills, building full-stack projects, and seeking out collaborative roles as a Software Development Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
