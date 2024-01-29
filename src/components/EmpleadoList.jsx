import React from "react";
import EmpleadoCard from "./EmpleadoCard";

const EmpleadoList = ({ empleados, eliminarEmpleado }) => {
  return (
    <div>
      <h2 className="bg-dark text-bg-dark p-2">Lista de Empleados</h2>
      <div className="d-flex flex-wrap">
        {empleados.map((empleado) => (
          <EmpleadoCard
            key={empleado.id}
            empleado={empleado}
            eliminarEmpleado={eliminarEmpleado}
          />
        ))}
      </div>
    </div>
  );
};

export default EmpleadoList;
