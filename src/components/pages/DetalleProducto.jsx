import { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerProductosID } from "../../helpers/queries";

const DetalleProducto = ({ }) => {
  const [productoBuscado, setProductoBuscado] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoID();
  }, [])

  const obtenerProductoID = async () => {
    const respuesta = await obtenerProductosID(id);
    if (respuesta.status === 200) {
      const productoBuscado = await respuesta.json();
      setProductoBuscado(productoBuscado);
    }
  }

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
