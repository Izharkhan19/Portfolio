import React from "react";
import { Col, Row } from "react-bootstrap";
import InnLogin from "../../Assets/ProfessionalImg/InnLogin.png";
import omsLogin from "../../Assets/ProfessionalImg/omsLogin.png";
import ProjectCards from "./ProjectCards";

const ProfessionalProjects = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCards
            isView={true}
            imgPath={InnLogin}
            // isBlog={false}
            title="Inntelligent CRM"
            description="Specific-Measureable-Action Plan Driven-Realistic-TIme Oriented Customer Relationship Management System, built by hoteliers for hoteliers, offering organization, automation and synchronization of all your sales offers via a cloud based platform."
            // ghLink="https://github.com/Izharkhan19/Advance_Chat_Fullapp"
            // demoLink="https://eazzy-chat.onrender.com/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCards
            isView={true}
            imgPath={omsLogin}
            // isBlog={false}
            title="OMS"
            description="The Office Management System is a software tool that streamlines administrative tasks within an organization. It centralizes functions like scheduling, attendance tracking, leave management, document storage, and communication, enhancing productivity and coordination among employees."
            // ghLink="https://github.com/Izharkhan19/Advance_Chat_Fullapp"
            // demoLink="https://eazzy-chat.onrender.com/"
          />
        </Col>
      </Row>
    </>
  );
};

export default ProfessionalProjects;
