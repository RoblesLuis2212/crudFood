import Button from "react-bootstrap/Button";
import { Link } from "react-router";

const ItemProducto = ({ itemProducto, borrarProducto }) => {
  return (
    <tr>
      <td>{itemProducto.id}</td>
      <td>{itemProducto.nombreProducto}</td>
      <td>{itemProducto.precio}</td>
      <td className="text-center">
        <img
          src={itemProducto.imagen}
          alt="pizza margarita clasica"
          className="imgTableProducto"
        />
      </td>
      <td>{itemProducto.categoria}</td>
      <td className="d-flex justify-content-md-center gap-1">
        <Link
          className="me-2 btn btn-warning"
          to={`/administrador/editar/${itemProducto.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          variant="danger"
          onClick={() => borrarProducto(itemProducto.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
