import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import { borrarProductoAPI, listarProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ itemProducto, fila, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Vas a eliminar el producto "${itemProducto.nombreProducto}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(itemProducto._id);
        if (respuesta && respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `El producto "${itemProducto.nombreProducto}" fue eliminado correctamente.`,
            icon: "success",
            timer: 2000,
          });
          const respuestaProductos = await listarProductos();
          if (respuestaProductos.status === 200) {
            const respuestaRestantes = await respuestaProductos.json();
            setProductos(respuestaRestantes);
          }
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el producto. Intenta de nuevo más tarde.",
            icon: "error",
          });
        }
      }
    });
  }

  return (
    <tr>
      <td>{fila}</td>
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
          to={`/administrador/editar/${itemProducto._id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          variant="danger"
          onClick={borrarProducto}
        >
          <i className="bi bi-trash-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
