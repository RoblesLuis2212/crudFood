import { Button, Row, Col, Form, Card } from "react-bootstrap";
import CardProducto from "./CardProducto";
import ItemProducto from "./ItemProducto";

const ListaProductos = ({ productos }) => {
  return (
    <section className="container mb-4 mt-2">
      <Row xs={1} md={3}>
        {productos.map((itemproducto) => (
          <Col key={itemproducto.id} className="mt-4">
            <CardProducto itemproducto={itemproducto}></CardProducto>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ListaProductos;
