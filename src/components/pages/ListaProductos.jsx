import { Button, Row, Col, Form, Card } from "react-bootstrap";
import CardProducto from "./CardProducto";

const ListaProductos = () => {
  return (
    <section className="container">
      <Row xs={1} md={3}>
        <Col className="">
          <CardProducto
            nombre="Pizza Margarita Clásica"
            descripcion="Pizza tradicional con salsa de tomate, mozzarella y albahaca"
            precio={4500}
          ></CardProducto>
        </Col>
      </Row>
    </section>
  );
};

export default ListaProductos;
