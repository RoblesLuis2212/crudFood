import { useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router";

const DetalleProducto = ({ buscarProducto }) => {
  const { id } = useParams();

  const productoBuscado = buscarProducto(id);
  console.log(productoBuscado);

  return (
    <section className="container border mt-5 mb-3">
      <Row xs={1} md={4}>
        <Col className="p-0">
          <img
            src={productoBuscado.imagen}
            alt="Pizza"
            className="img-fluid h-100 imgDetalleProducto"
          />
        </Col>
        <Col xs={12} md={9}>
          <h3 className="fontTiza mt-3">{productoBuscado.nombreProducto}</h3>
          <hr />
          <p className="fontTiza">{productoBuscado.descripcion_amplia}</p>
          <p className="fontTiza">Categoria: {productoBuscado.categoria}</p>
          <p className="fontTiza mt-0">Precio: ${productoBuscado.precio}</p>
        </Col>
      </Row>
    </section>
  );
};

export default DetalleProducto;
