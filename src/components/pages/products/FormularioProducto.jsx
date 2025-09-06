import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { data, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Navigate } from "react-router";

const FormularioProducto = ({
  titulo,
  crearProducto,
  buscarProducto,
  modificarProducto,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (titulo === "Editar Producto") {
      const productoBuscado = buscarProducto(id);
      setValue("nombreProducto", productoBuscado.nombreProducto);
      setValue("precio", productoBuscado.precio);
      setValue("imagen", productoBuscado.imagen);
      setValue("categoria", productoBuscado.categoria);
      setValue("descripcion_breve", productoBuscado.descripcion_breve);
      setValue("descripcion_amplia", productoBuscado.descripcion_amplia);
    }
  });

  const postValidacion = (data) => {
    if (titulo === "Crear Producto") {
      //Agregar id
      data.id = uuidv4();
      console.log(data);

      if (crearProducto(data)) {
        Swal.fire({
          title: "Producto creado",
          text: `Producto ${data.producto} se creo correctamente`,
          icon: "success",
        });
        reset();
      }
    } else if (titulo === "Editar Producto") {
      if (modificarProducto(id, data)) {
        Swal.fire({
          title: "Producto Actualizado!",
          text: `El producto ${data.nombreProducto} se actualizo correctamente`,
          icon: "success",
        }).then(() => {
          navigate("/administrador");
        });
      }
    }
  };

  return (
    <>
      <h2 className="display-5 mt-3">{titulo}</h2>
      <hr />
      <Form onSubmit={handleSubmit(postValidacion)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombreProducto", {
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
            {errors.nombreProducto?.message}
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
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/pizza"
            {...register("imagen", {
              required: "la URL de la imagen es un dato obligatorio",
              validate: {
                validUrl: (value) =>
                  /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(value) ||
                  "la URL ingresada no es valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
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
            <option value="sandwiches_y_wraps">Sandwiches</option>
            <option value="pizzas">Pizzas</option>
            <option value="ensaladas">Ensaladas</option>
            <option value="acompanamientos">Acompañamientos</option>
            <option value="postres">Postres</option>
            <option value="bebidas">Bebidas</option>x
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
            {...register("descripcion_breve", {
              required: "la descripcion es una dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "la descripcion breve debe contener minimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "la descripcion breve puede contener maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripcion Amplia*</Form.Label>
          <Form.Control
            type="text"
            as={"textarea"}
            placeholder="Ej: Nuestra pizza margarita hecha con casa madre, salsa de tomate casera, queso mozzarella de búfala premium y hojas frescas de albahaca. Horneada en horno de piedra para obtener ese crujiente perfecto."
            className="text-tarea"
            {...register("descripcion_amplia", {
              required: "la descripcion amplia es un dato obligatorio",
              minLength: {
                value: 20,
                message:
                  "la descripcion amplia debe contener minimo 20 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "la descripcion amplia puede contener maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
};

export default FormularioProducto;
