import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import eazzychat from "../../Assets/Projects/eazzychat.png";
import suicide from "../../Assets/Projects/suicide.png";
import arjunGroup from "../../Assets/Projects/arjunGroup.png";
import cusLogin from "../../Assets/Projects/cusLogin.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eazzychat}
              isBlog={false}
              title="EazzyChat"
              description="Personal Chat Room or Workspace to share thoughts and hangout with friends build with react.js, Chakra UI, socket.io and MongoDB. Have features which allows Authentcate user for realtime messaging, notifications, user typing indication messages etc."
              ghLink="https://github.com/Izharkhan19/Advance_Chat_Fullapp"
              demoLink="https://eazzy-chat.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arjunGroup}
              isBlog={false}
              title="Arjun-Group-Edu."
              description="The website is a one-stop hub, offering detailed info on college courses and various eMitra services. It helps prospective students explore courses with program details and career paths. Additionally, it serves as a guide for government processes like online applications and document verifications. This dual focus makes it a valuable resource for informed and efficient education and government interactions."
              ghLink="https://github.com/Izharkhan19/arjun-group.git"
              demoLink="https://arjun-group.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cusLogin}
              isBlog={false}
              title="MERN-Custom-Solutions"
              description="This website focuses on offering unique solutions, be it in the form of components, integrations, or services, designed specifically for the customer. Users visiting a custom component website can expect a high level of flexibility and customization, ensuring that the solutions provided align precisely with their distinct requirements. This approach emphasizes a customer-centric mindset, delivering a more personalized and effective experience compared to off-the-shelf solutions."
              ghLink="https://github.com/Izharkhan19/MERN-custom-solutions.git"
              demoLink="https://mern-custom-solutions.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
