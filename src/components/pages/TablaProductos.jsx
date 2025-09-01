import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TablaProductos = () => {
  return (
    <Table striped bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pizza Margarita Clásica</td>
          <td>$4500</td>
          <td className="text-center">
            <img
              src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg"
              alt="pizza margarita clasica"
              className="imgTableProducto"
            />
          </td>
          <td>Comida</td>
          <td className="text-center">
            <Button variant="warning" className="me-2">
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button variant="danger">
              <i className="bi bi-trash-fill"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TablaProductos;
