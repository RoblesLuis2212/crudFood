import { Button, Row, Col, Form } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <section className="container border mt-5">
      <Row xs={1} md={2}>
        <Col className="p-0">
          <img
            src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg"
            alt="Pizza"
            className="img-fluid h-100"
          />
        </Col>
        <Col>
          <h3 className="fontTiza mt-3">Pizza Margarita Clasíca</h3>
          <hr />
          <p className="fontTiza">
            Nuestra pizza margarita artesanal hecha con casa madre, salsa de
            tomate casera, queso mozzarella de búfala premium y hojas frescas de
            albahaca. Horneada en horno de piedra para obtener ese crujiente
            perfecto.
          </p>
          <p className="fontTiza">Categoria: comida</p>
          <p className="fontTiza mt-0">Precio: $4500</p>
        </Col>
      </Row>
    </section>
  );
};

export default DetalleProducto;
