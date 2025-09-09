import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";

const TablaProductos = ({ setProductos, productos, borrarProducto }) => {
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
        {productos.map((itemProducto, indice) => (
          <ItemProducto
            itemProducto={itemProducto}
            key={itemProducto.id}
            borrarProducto={borrarProducto}
            fila={indice + 1}
          ></ItemProducto>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaProductos;
