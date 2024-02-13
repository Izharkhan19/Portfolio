import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModelCss.css";

const ViewProjectDisc = ({ projName, title, description, show, onHide }) => {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => onHide(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <strong className="purple">{title} </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong className="purple">Modules : </strong> <br />
          {projName === "OMS" ? (
            <ul>
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Project</li>
              <li>Task</li>
              <li>Setup</li>
            </ul>
          ) : (
            <ul>
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Lead</li>
              <li>Account</li>
              <li>Contact</li>
              <li>Activity</li>
              <li>Opportunity</li>
              <li>Report</li>
              <li>Setup</li>
              <li>etc...</li>
            </ul>
          )}
          <strong className="purple">Description : </strong> <br />
          <p> {description} </p>
          <strong className="purple">Tools/Technologies : </strong> <br />
          {projName === "OMS" ? (
            <p> Postman, Swagger, Visual Studio Code, React js, Redux, .Net </p>
          ) : (
            <p>
              Postman, Swagger, Visual Studio Code, React js, Redux, Typescript,
              .Net
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onHide(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewProjectDisc;
