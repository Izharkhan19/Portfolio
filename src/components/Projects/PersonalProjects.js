import React from "react";
import { Col, Row } from "react-bootstrap";
import eazzychat from "../../Assets/Projects/eazzychat.png";
import arjunGroup from "../../Assets/Projects/arjunGroup.png";
import cusLogin from "../../Assets/Projects/cusLogin.png";
import myIncome from "../../Assets/Projects/myIncome.png";
import ProjectCards from "./ProjectCards";

const PersonalProjects = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCards
            imgPath={eazzychat}
            isBlog={false}
            title="EazzyChat"
            description="Personal Chat Room or Workspace to share thoughts and hangout with friends build with react.js, Chakra UI, socket.io and MongoDB. Have features which allows Authentcate user for realtime messaging, notifications, user typing indication messages etc."
            ghLink="https://github.com/Izharkhan19/Advance_Chat_Fullapp"
            demoLink="https://eazzy-chat.onrender.com/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCards
            imgPath={arjunGroup}
            isBlog={false}
            title="Arjun-Group-Edu."
            description="The website is a one-stop hub, offering detailed info on college courses and various eMitra services. It helps prospective students explore courses with program details and career paths. Additionally, it serves as a guide for government processes like online applications and document verifications. This dual focus makes it a valuable resource for informed and efficient education and government interactions."
            ghLink="https://github.com/Izharkhan19/arjun-group.git"
            demoLink="https://arjun-group.vercel.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCards
            imgPath={cusLogin}
            isBlog={false}
            title="MERN-Custom-Solutions"
            description="This website focuses on offering unique solutions, be it in the form of components, integrations, or services, designed specifically for the customer. Users visiting a custom component website can expect a high level of flexibility and customization, ensuring that the solutions provided align precisely with their distinct requirements. This approach emphasizes a customer-centric mindset, delivering a more personalized and effective experience compared to off-the-shelf solutions."
            ghLink="https://github.com/Izharkhan19/MERN-custom-solutions.git"
            demoLink="https://mern-custom-solutions.vercel.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCards
            imgPath={myIncome}
            isBlog={false}
            title="My Income"
            description="
            My Income is a user-friendly financial management project comprising three modules:
            Dashboard: Provides a snapshot of financial health, including income, expenses, savings rate, and budget progress.
            Income: Helps track and categorize various income sources, facilitating optimization and trend analysis.
            Expense: Enables monitoring and control of spending through budget setting, categorization, and alerts for overspending.
          "
            ghLink="https://github.com/Izharkhan19/My-Income-UI"
            demoLink="https://my-income-ui.vercel.app/"
          />
        </Col>
      </Row>
    </>
  );
};

export default PersonalProjects;
