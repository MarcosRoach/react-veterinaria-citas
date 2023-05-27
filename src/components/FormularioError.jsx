const FormularioError = ({ error }) => {
  return (
    <div className="bg-red-200 border-2 border-red-400 rounded-lg mt-2 font-bold text-red-700 text-center uppercase">
      <h2 className="p-1">{error}</h2>
    </div>
  );
};

export default FormularioError;
