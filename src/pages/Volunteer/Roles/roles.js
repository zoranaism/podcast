import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { RolesData } from "./rolesData";

export const Roles = () => {
  return (
    <div className="mt-3 container">
      <h3 class="card-title">Available roles</h3>
      <Accordion defaultActiveKey="0">
        {RolesData.map((role, index) => (
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{role.role}</Accordion.Header>
            <Accordion.Body>{role.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
