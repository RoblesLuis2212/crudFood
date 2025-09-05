import Menu from "./components/pages/shared/Menu";
import Footer from "./components/pages/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import DetalleProducto from "./components/pages/DetalleProducto";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/products/FormularioProducto";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
BrowserRouter;

function App() {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogeado, setUsuarioLogueado] = useState(sesionUsuario);

  //Almacenar los productos en el local storage
  const productosLS = JSON.parse(localStorage.getItem("productosKey")) || [];

  const [productos, SetProductos] = useState(productosLS);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogeado));
  }, [usuarioLogeado]);

  useEffect(() => {
    localStorage.setItem("productosKey", JSON.stringify(productos));
  }, [productos]);

  const crearProducto = (productoNuevo) => {
    SetProductos([...productos, productoNuevo]);
    return true;
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = productos.filter(
      (itemProducto) => itemProducto.id !== idProducto
    );
    SetProductos(productosFiltrados);
    return true;
  };

  const buscarProducto = (idProducto) => {
    const productoBuscado = productos.find(
      (itemProducto) => itemProducto.id === idProducto
    );
    return productoBuscado;
  };

  const modificarProducto = (idProducto, datosProductos) => {
    const productoActualizado = productos.map((itemProducto) => {
      if (itemProducto.id === idProducto) {
        //Actulizar producto
        return {
          ...itemProducto,
          ...datosProductos,
        };
      }
      return itemProducto;
    });
  };

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <main className="container">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
            ></Route>
            <Route
              path="/administrador"
              element={
                <ProtectorAdmin
                  usuarioLogeado={usuarioLogeado}
                ></ProtectorAdmin>
              }
            >
              <Route
                index
                element={
                  <Administrador
                    setProductos={SetProductos}
                    productos={productos}
                    borrarProducto={borrarProducto}
                  ></Administrador>
                }
              ></Route>
              <Route
                path="crear"
                element={
                  <FormularioProducto
                    titulo="Crear Producto"
                    crearProducto={crearProducto}
                  ></FormularioProducto>
                }
              ></Route>
              <Route
                path="editar"
                element={
                  <FormularioProducto titulo="Editar Producto"></FormularioProducto>
                }
              ></Route>
            </Route>

            <Route
              path="/administrador"
              element={
                <Administrador
                  setProducto={SetProductos}
                  productos={productos}
                ></Administrador>
              }
            ></Route>
            <Route
              path="/administrador/crear"
              element={<FormularioProducto></FormularioProducto>}
            ></Route>
            <Route
              path="/administrador/editar/:id"
              element={<FormularioProducto></FormularioProducto>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
