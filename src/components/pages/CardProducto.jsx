import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

const CardProducto = ({ itemproducto }) => {
  return (
    <Card className="h-100">
      <Card.Img src={itemproducto.imagen} className="imgCardProducto" />
      <Card.Body>
        <Card.Title className="fontTiza">
          {itemproducto.nombreProducto}
        </Card.Title>
        <Card.Text className="fontTiza">
          {itemproducto.descripcion_breve}
        </Card.Text>
        <p className="fontTiza">Precio: ${itemproducto.precio}</p>
      </Card.Body>
      <Card.Footer>
        <Link
          className="btn btn-success float-end fontTiza"
          to={`/detalle/${itemproducto.id}`}
        >
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
