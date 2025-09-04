import Button from "react-bootstrap/Button";

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
        <Button variant="warning" className="me-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
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
