import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const postValidacion = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(postValidacion)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Producto*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Pizza"
          {...register("producto", {
            required: "el nombre del producto es obligatorio",
            minLength: {
              value: 3,
              message:
                "el nombre del producto debe contener minimo 3 caracteres",
            },
            maxLength: {
              value: 50,
              message:
                "el nombre del producto puede contener maximo 50 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.producto?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Precio*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 5000"
          {...register("precio", {
            required: "el precio es un dato obligatorio",
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: "el precio ingresado no es valido",
            },
            min: {
              value: 0,
              message: "el precio ingresado no puede ser negativo",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://www.pexels.com/es-es/pizza"
          {...register("urlimagen", {
            required: "la URL de la imagen es un dato obligatorio",
            validate: {
              validUrl: (value) =>
                /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(value),
              message: "la URL ingresada no es valida",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.urlimagen?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select
          {...register("categoria", {
            required: "debe seleccionar una categoria",
          })}
        >
          <option value="">Seleccione una categoria</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion breve*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Pizza tradicional con salsa de tomate, mozarella y albahaca"
          {...register("descripcionbreve", {
            required: "la descripcion es una dato obligatorio",
            minLength: {
              value: 10,
              message:
                "la descripcion breve debe contener minimo 10 caracteres",
            },
            maxLength: {
              value: 70,
              message:
                "la descripcion breve puede contener maximo 70 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcionbreve?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion Amplia*</Form.Label>
        <Form.Control
          type="text"
          as={"textarea"}
          placeholder="Ej: Nuestra pizza margarita hecha con casa madre, salsa de tomate casera, queso mozzarella de búfala premium y hojas frescas de albahaca. Horneada en horno de piedra para obtener ese crujiente perfecto."
          className="text-tarea"
          {...register("descripcionamplia", {
            required: "la descripcion amplia es un dato obligatorio",
            minLength: {
              value: 20,
              message:
                "la descripcion amplia debe contener minimo 20 caracteres",
            },
            maxLength: {
              value: 100,
              message:
                "la descripcion amplia puede contener maximo 100 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcionamplia?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default FormularioProducto;
