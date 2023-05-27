//import imagen
import imagen from "../images/no-data.jpg";

const NoData = () => {
  return (
    <div className="mt-5 ms-3 me-3 w-100 h-100 bg-white">
      <img className="w-100 h-auto" src={imagen} alt="" />
    </div>
  );
};

export default NoData;
