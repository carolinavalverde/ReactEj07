import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EmpleadoForm = ({ agregarEmpleado }) => {
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    id: 0,
    fullName: "",
    title: "",
    department: "",
    picURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado({ ...nuevoEmpleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEmpleado({ ...nuevoEmpleado, id: Date.now() });
    setNuevoEmpleado({
      id: 0,
      fullName: "",
      title: "",
      department: "",
      pic: "",
    });
  };

  return (
    <div>
      <h2 className="bg-dark text-bg-dark p-2">Agregar Nuevo Empleado</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label className="form-label">Nombre Completo</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Ingrese el nombre completo"
            name="fullName"
            value={nuevoEmpleado.fullName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label className="form-label">Cargo</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Ingrese el cargo"
            name="title"
            value={nuevoEmpleado.title}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDepartment">
          <Form.Label className="form-label">Departamento</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Ingrese el departamento"
            name="department"
            value={nuevoEmpleado.department}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPic">
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Ingrese el link de la foto"
            name="pic"
            value={nuevoEmpleado.pic}
            onChange={handleInputChange}
            required
          />
          <Form.Label className="form-label">Vista previa</Form.Label>
          <img
            src={nuevoEmpleado.pic}
            alt="Vista previa"
            className="img-thumbnail"
            style={{ maxHeight: "100px" }}
          />
        </Form.Group>
        <Button className="btn btn-primary my-3" type="submit">
          Agregar Empleado
        </Button>
      </Form>
    </div>
  );
};

export default EmpleadoForm;
