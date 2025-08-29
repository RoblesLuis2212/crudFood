import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" className="titulo">
            <i className="bi bi-egg-fried me-2"></i>
            Crud Food
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className="nav-link">
                Inicio
              </NavLink>

              <NavLink to={"/administrador"} className="nav-link">
                Administrador
              </NavLink>
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
