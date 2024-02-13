import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eazzychat from "../../Assets/Projects/eazzychat.png";
import arjunGroup from "../../Assets/Projects/arjunGroup.png";
import cusLogin from "../../Assets/Projects/cusLogin.png";
import PersonalProjects from "./PersonalProjects";
import ProfessionalProjects from "./ProfessionalProjects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* PROFESSIONAL PROJECTS */}
        <h3 className="text-white purple text-start mt-5">
          <strong className="purple">My Professional Project Works :</strong>
          <hr></hr>
        </h3>
        <ProfessionalProjects />

        {/* PERSONAL PROJECTS */}
        <h3 className="text-white purple text-start mt-5">
          <strong className="purple"> My Personal Projects Works :</strong>
          <hr></hr>
        </h3>
        <PersonalProjects />
      </Container>
    </Container>
  );
}

export default Projects;
