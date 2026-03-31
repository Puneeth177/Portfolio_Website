import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

const projects = [
  {
    name: "SecureVault",
    category: "Full-stack App",
    tools: "MongoDB, Express, React, Node.js",
    image: "/images/securevault.webp",
    link: "https://securevault-snn7.onrender.com/"
  },
  {
    name: "Personal Portfolio",
    category: "Responsive UI",
    tools: "HTML, CSS, React, Animations",
    image: "/images/portfolio.webp",
    link: "https://m-s-puneeth-portfolio.vercel.app/"
  },
  {
    name: "Protein Grub Hub",
    category: "Meal Planner App",
    tools: "React, Node.js, MongoDB",
    image: "/images/protein.webp",
    link: "https://proteingrubhub.vercel.app/"
  }
];
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" style={{display: 'block', width: '100%'}}>
                <WorkImage image={project.image} alt={project.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
