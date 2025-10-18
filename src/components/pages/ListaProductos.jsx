import { Button, Row, Col, Form, Card } from "react-bootstrap";
import CardProducto from "./CardProducto";
import ItemProducto from "./ItemProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../../helpers/queries";

const ListaProductos = () => {
  const [productos, SetProductos] = useState([]);

  useEffect(() => {
    console.log("Ejecutando use effect desde el componente listar productos")
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await listarProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      SetProductos(datos);
    }
  }



  return (
    <section className="container mb-4 mt-2">
      <Row xs={1} md={3}>
        {productos.map((itemproducto) => (
          <Col key={itemproducto._id} className="mt-4">
            <CardProducto itemproducto={itemproducto}></CardProducto>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ListaProductos;
