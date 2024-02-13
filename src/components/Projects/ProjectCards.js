import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsViewList } from "react-icons/bs";
import ViewProjectDisc from "../Modals/ViewProjectDisc";

function ProjectCards(props) {
  const [projName, setProjName] = useState("");
  const [lgShow, setLgShow] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "start" }}>
          {props.description}
        </Card.Text>
        {props.isView ? (
          <>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              onClick={() => {
                setProjName(props.title);
                setLgShow(true);
              }}
            >
              <BsViewList /> &nbsp;
              {"View"}
            </Button>

            {lgShow && (
              <ViewProjectDisc
                title={props.title}
                description={props.description}
                projName={projName}
                show={lgShow}
                onHide={() => setLgShow(false)}
              />
            )}
          </>
        ) : (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
