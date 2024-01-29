import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpleadoCard = ({ empleado, eliminarEmpleado }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/${empleado.pic}`}
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
