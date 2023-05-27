import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //Estados
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); //Para editar

  //Eliminar Paciente
  const eliminarPaciente = (id) => {
    const newPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(newPacientes);
  };

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="md:flex mt-12">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        ;
      </div>
    </div>
  );
}

export default App;
