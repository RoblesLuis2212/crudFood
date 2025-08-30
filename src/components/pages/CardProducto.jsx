import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProducto = ({ nombre, descripcion, precio }) => {
  return (
    <Card>
      <Card.Img src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg" />
      <Card.Body>
        <Card.Title className="fontTiza">{nombre}</Card.Title>
        <Card.Text className="fontTiza">{descripcion}</Card.Text>
        <p className="fontTiza">Precio: ${precio}</p>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" className="float-end fontTiza">
          Ver más
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
