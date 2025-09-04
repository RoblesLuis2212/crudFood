import FormularioProducto from "./products/FormularioProducto";
import ProductosDisponibles from "./ProductosDisponibles";

const Administrador = ({ setProductos, productos }) => {
  return (
    <>
      <section className="container mt-4">
        <hr />
        <ProductosDisponibles
          setProducto={setProductos}
          productos={productos}
        ></ProductosDisponibles>
      </section>
    </>
  );
};

export default Administrador;
