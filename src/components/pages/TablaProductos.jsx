import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";

const TablaProductos = ({ setProductos, productos }) => {
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
        {productos.map((itemProducto) => (
          <ItemProducto
            itemProducto={itemProducto}
            key={productos.id}
          ></ItemProducto>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaProductos;
