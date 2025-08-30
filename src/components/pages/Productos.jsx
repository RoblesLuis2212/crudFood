import { Form } from "react-bootstrap";
import ListaProductos from "./ListaProductos";

const Productos = () => {
  return (
    <>
      <section className="container mt-4">
        <h2 className="fontTiza fs-1">Nuestros Productos</h2>
        <hr />
        <p className="fontTiza fs-5">Buscar un producto</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="ingrese el nombre del producto"
            />
          </Form.Group>
        </Form>
      </section>
      <ListaProductos></ListaProductos>
    </>
  );
};

export default Productos;
