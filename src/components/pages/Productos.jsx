import { Form, Button } from "react-bootstrap";
import ListaProductos from "./ListaProductos";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const Productos = ({ productos, filtrarProducto }) => {
  //Estado para guardar el producto filtrado
  const [productoFiltrado, setProductosFiltrados] = useState(productos);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const postValidaciones = (data) => {
    const resultado = filtrarProducto(data.nombreProducto);
    //Se muestra un mensaje de advertencia con sweetalert
    if (resultado.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "No se encontraron productos",
        confirmButtonText: "aceptar",
      });
      //En caso de no obtener datos el estado permanecera inmutable
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(resultado); //Se muestra los datos obtenidos
    }
    reset();
  };

  return (
    <>
      <section className="container mt-4">
        <h2 className="fontTiza fs-1">Nuestros Productos</h2>
        <hr />
        <p className="fontTiza fs-5">Buscar un producto</p>
        <Form onSubmit={handleSubmit(postValidaciones)}>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="text"
              placeholder="ingrese el nombre del producto"
              {...register("nombreProducto", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 8,
                  message:
                    "el nombre del producto debe contener minimo 8 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "el nombre del producto debe contener maximo 50 caracteres",
                },
              })}
            />
            <Button variant="success" type="submit" className="fontTiza ms-1">
              Buscar
            </Button>
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form>
      </section>
      <ListaProductos />
    </>
  );
};

export default Productos;
