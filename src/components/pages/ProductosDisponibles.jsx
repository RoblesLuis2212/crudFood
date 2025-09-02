import Button from "react-bootstrap/Button";
import TablaProductos from "./TablaProductos";

const ProductosDisponibles = () => {
  return (
    <section className="container mt-3">
      <div className="d-flex align-items-start align-items-md-center">
        <h2 className="display-5 flex-grow-1">Productos disponibles</h2>
        <div className="d-flex gap-2">
          <Button variant="primary" className="mt-4 me-md-2">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <Button variant="success" className="mt-4">
            <i className="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      <TablaProductos></TablaProductos>
    </section>
  );
};

export default ProductosDisponibles;
