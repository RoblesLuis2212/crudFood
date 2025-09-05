import Banner from "./Banner";
import Productos from "./Productos";

const Inicio = ({ productos }) => {
  return (
    <div>
      <Banner></Banner>
      <Productos productos={productos}></Productos>
    </div>
  );
};

export default Inicio;
