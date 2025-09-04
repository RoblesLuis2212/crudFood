import FormularioProducto from "./products/FormularioProducto";
import ProductosDisponibles from "./ProductosDisponibles";

const Administrador = () => {
  return (
    <>
      <section className="container mt-4">
        <hr />
        <ProductosDisponibles></ProductosDisponibles>
      </section>
    </>
  );
};

export default Administrador;
