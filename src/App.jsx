import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList.jsx";
import EmpleadoForm from "./components/EmpleadoForm.jsx";

const App = () => {
  const [empleados, setEmpleados] = useState(() => {
    const storedEmpleados = localStorage.getItem("empleados");
    return storedEmpleados ? JSON.parse(storedEmpleados) : [];
  });

  useEffect(() => {
    localStorage.setItem("empleados", JSON.stringify(empleados));
  }, [empleados]);

  const agregarEmpleado = (nuevoEmpleado) => {
    setEmpleados([...empleados, nuevoEmpleado]);
  };

  const eliminarEmpleado = (id) => {
    const empleadosActualizados = empleados.filter(
      (empleado) => empleado.id !== id
    );
    setEmpleados(empleadosActualizados);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Empleados</h1>
      <EmpleadoList empleados={empleados} eliminarEmpleado={eliminarEmpleado} />
      <EmpleadoForm agregarEmpleado={agregarEmpleado} />
    </div>
  );
};

export default App;
