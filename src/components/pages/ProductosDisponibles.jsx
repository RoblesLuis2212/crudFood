import Button from "react-bootstrap/Button";
import TablaProductos from "./TablaProductos";
import { Link } from "react-router";
import ProductosPrueba from "../../data/ProductosPrueba";
import { useState, useEffect } from "react";
import { useEffectEvent } from "react";
import { listarProductos } from "../../helpers/queries";

const ProductosDisponibles = ({ borrarProducto }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    //Solicitar los datos al backend
    const respuesta = await listarProductos();
    //Verificar que se obtenieron correctamente los datos
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    }
    //Cargar los productos en el state
  }


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
        </div>
      </div>
      <hr />
      <TablaProductos
        productos={productos}
        borrarProducto={borrarProducto}
      ></TablaProductos>
    </section>
  );
};

export default ProductosDisponibles;
