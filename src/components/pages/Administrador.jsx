import FormularioProducto from "./products/FormularioProducto";
import ProductosDisponibles from "./ProductosDisponibles";

const Administrador = ({ setProductos, productos, borrarProducto }) => {
  return (
    <>
      <section className="container mt-4">
        <hr />
        <ProductosDisponibles
          setProducto={setProductos}
          productos={productos}
          borrarProducto={borrarProducto}
        ></ProductosDisponibles>
      </section>
    </>
  );
};

export default Administrador;
