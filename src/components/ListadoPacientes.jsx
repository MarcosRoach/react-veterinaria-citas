import NoData from "./NoData";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5 h-screen md:overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>

      <p className="mt-5 text-lg text-center">
        Administrar tus{" "}
        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
      </p>

      {
        // Si no hay pacientes
        pacientes.length === 0 ? (
          <NoData />
        ) : (
          // Listado de Pacientes
          pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })
        )
      }
    </div>
  );
};

export default ListadoPacientes;
