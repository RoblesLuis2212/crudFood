import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioProducto = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Producto*</Form.Label>
        <Form.Control type="email" placeholder="Ej: Pizza" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Precio*</Form.Label>
        <Form.Control type="text" placeholder="Ej: 5000" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://www.pexels.com/es-es/pizza"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select>
          <option value="">Seleccione una categoria</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion breve*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Pizza tradicional con salsa de tomate, mozarella y albahaca"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion Amplia*</Form.Label>
        <Form.Control
          type="text"
          as={"textarea"}
          placeholder="Ej: Nuestra pizza margarita hecha con casa madre, salsa de tomate casera, queso mozzarella de búfala premium y hojas frescas de albahaca. Horneada en horno de piedra para obtener ese crujiente perfecto."
          className="text-tarea"
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default FormularioProducto;
