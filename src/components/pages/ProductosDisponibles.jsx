import Button from "react-bootstrap/Button";
import TablaProductos from "./TablaProductos";
import { Link } from "react-router";
import ProductosPrueba from "../../data/ProductosPrueba";

const ProductosDisponibles = ({ setProducto, productos, borrarProducto }) => {
  const cargarProductosPrueba = () => {
    setProducto(ProductosPrueba);
    console.log("cargando productos de prueba...");
  };

  return (
    <section className="container mt-3">
      <div className="d-flex align-items-start align-items-md-center">
        <h2 className="display-5 flex-grow-1">Productos disponibles</h2>
        <div className="d-flex gap-2">
          <Link to="/administrador/crear">
            <Button variant="primary" className="mt-4 me-md-2">
              <i className="bi bi-file-earmark-plus"></i>
            </Button>
          </Link>
          <Link>
            <Button
              variant="success"
              className="mt-4"
              onClick={cargarProductosPrueba}
            >
              <i className="bi bi-database-fill-add"></i>
            </Button>
          </Link>
        </div>
      </div>
      <hr />
      <TablaProductos
        setProductos={setProducto}
        productos={productos}
        borrarProducto={borrarProducto}
      ></TablaProductos>
    </section>
  );
};

export default ProductosDisponibles;
