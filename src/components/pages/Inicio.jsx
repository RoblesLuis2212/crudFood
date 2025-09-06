import Banner from "./Banner";
import Productos from "./Productos";

const Inicio = ({ productos, filtrarProducto }) => {
  return (
    <div>
      <Banner></Banner>
      <Productos
        productos={productos}
        filtrarProducto={filtrarProducto}
      ></Productos>
    </div>
  );
};

export default Inicio;
