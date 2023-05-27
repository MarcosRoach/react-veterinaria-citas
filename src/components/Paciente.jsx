import React from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  //Eliminar Paciente
  const handleElimminar = () => {
    Swal.fire({
      title: "Usted esta seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar Paciente!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(paciente.id);
        Swal.fire("Borrado!", "Su Paciente ha sido eliminado", "success");
      }
    });
  };

  return (
    <div className="m-5 bg-white shadow-md pt-10 pb-4 px-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        ID: <span className="font-normal normal-case">{paciente.id}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Sintomas:{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-end gap-2 mt-5">
        <button
          className="py-2 px-10 font-bold text-indigo-600 hover:bg-indigo-700 hover:text-white transition-all"
          onClick={() => setPaciente(paciente)}
        >
          Editar
          <FontAwesomeIcon className=" ps-2" icon={faPenToSquare} />
        </button>
        <button
          className="py-2 px-10 font-bold text-rose-600 hover:bg-rose-600 hover:text-white transition-all"
          onClick={handleElimminar}
        >
          Eliminar
          <FontAwesomeIcon className=" ps-2" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default Paciente;
