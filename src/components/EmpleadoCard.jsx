import React from "react";
import { Card, Button } from 'react-bootstrap';

const EmpleadoCard = ({ empleado, eliminarEmpleado }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={empleado.remoteImage} style={{  height: "100px" }}
      />
      <Card.Body>
        <Card.Title>{empleado.fullName}</Card.Title>
        <Card.Text>
          <strong>{empleado.title}</strong> - {empleado.department}
        </Card.Text>
        <Button variant="danger" onClick={() => eliminarEmpleado(empleado.id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EmpleadoCard;
