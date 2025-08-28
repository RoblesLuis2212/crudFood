import Menu from "./components/pages/shared/Menu";
import Footer from "./components/pages/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import DetalleProducto from "./components/pages/DetalleProducto";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/products/FormularioProducto";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router";
BrowserRouter;

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route
            path="/detalle"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            path="/administrador/crear"
            element={<FormularioProducto></FormularioProducto>}
          ></Route>
          <Route
            path="/administrador/editar"
            element={<FormularioProducto></FormularioProducto>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
