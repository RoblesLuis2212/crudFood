import FormularioProducto from "./products/FormularioProducto";

const Administrador = () => {
  return (
    <section className="container mt-4">
      <h2 className="display-5">Crear Producto</h2>
      <hr />
      <FormularioProducto></FormularioProducto>
    </section>
  );
};

export default Administrador;
