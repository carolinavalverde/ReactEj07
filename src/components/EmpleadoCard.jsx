import React from "react";
import { Card, Button } from "react-bootstrap";

const EmpleadoCard = ({ empleado, eliminarEmpleado }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3 mx-1">
      <Card.Img
        variant="top"
        src={empleado.pic}
        className="h-100 w-100 img-fluid"
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
