import { useEffect, useState } from "react";
import FormularioError from "./FormularioError.jsx";
import Swal from "sweetalert2";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // estados
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  //useEffect
  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  //Funciones

  //Generar ID
  const generarID = () => {
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 9);
    return date + random;
  };

  //validar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      //Si pasa la validacion
      setError(false);

      //Crear Objeto
      const newPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      //Controlar si es edicion o nuevo
      if (paciente.id) {
        console.log("editando");
        var pacienteEdit = true;
        //Editar al State
        newPaciente.id = paciente.id;

        //Editar los pacientes generando un nuevo array
        const pacientesEditados = pacientes.map((pacienteState) => {
          if (pacienteState.id === newPaciente.id) {
            return newPaciente;
          } else {
            return pacienteState;
          }
        });
        //Actualizar State
        setPacientes(pacientesEditados);

        //Mostrar Mensaje
        Swal.fire({
          title: "Success!",
          text: "Paciente Actualizado",
          icon: "success",
          position: "center",
          timer: 3000,
        });

        //Reiniciar Paciente
        setPaciente({});
      } else {
        var pacienteEdit = false;
        //Agregar al State
        newPaciente.id = generarID();
        setPacientes((prevState) => [...prevState, newPaciente]);

        //Mostrar Mensaje
        Swal.fire({
          title: "Success!",
          text: "Paciente Agregado",
          icon: "success",
          position: "center",
          timer: 3000,
        });
      }

      //Reiniciar Formulario
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");

      //llevar cursor al primer input
      document.getElementById("mascota").focus();
    }
  };

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="mt-5 text-lg text-center">
        Añadir Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>

      <form
        className="mt-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="Nombre Mascota"
            // Cambiar valor de Hook nombre
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="Nombre Propietario"
            // Cambiar valor de Hook propietario
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold "
          >
            Email
          </label>
          <input
            id="email"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="email"
            placeholder="Email Contacto Propietario"
            // Cambiar valor de Hook email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold "
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="date"
            // Cambiar valor de Hook fecha
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold "
          >
            Email
          </label>
          <textarea
            id="sintomas"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Sintomas del Paciente"
            // Cambiar valor de Hook sintomas
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 rounded-md w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition duration-500 ease-in-out cursor-pointer"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
        {error ? <FormularioError error={"Hay Campos Incompletos"} /> : null}
      </form>
    </div>
  );
};

export default Formulario;
