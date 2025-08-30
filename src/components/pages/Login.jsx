import { Button, Row, Col, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="mt-4">
      <Row xs={1} md={2}>
        <Col xs={{ order: 2 }} md={{ order: 1 }}>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="juanperez@gmail.com"
                  {...register("email", {
                    required: "el email es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "el email ingresado no es valido",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="ingresa tu contraseña"
                  {...register("contrasena", {
                    required: "la contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message:
                        "la contraseña debe contener minimo 8 caracteres",
                    },
                    maxLength: {
                      value: 30,
                      message: "la contraseña debe contener maximo 30 carteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.contrasena?.message}
                </Form.Text>
              </Form.Group>
              <Button variant="warning" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
          </Card.Body>
        </Col>
        <Col xs={{ order: 1 }} md={{ order: 2 }}>
          <img
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
            alt="comida"
            className="img-fluid h-100"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
