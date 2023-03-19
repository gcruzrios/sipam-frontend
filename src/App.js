import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Actualizar from "./pages/Actualizar";
import Index from "./pages/Index";
import Login from "./pages/Login";

import Registro from "./pages/Registro";
import Listpam from "./pages/Listpam";
import Addpam from "./pages/Addpam";
import NotFound from "./pages/Error404";

const estaAutenticado = () => {
  const token = localStorage.getItem("Token");
  const estado = localStorage.getItem("Estado");

  if (token && estado) {
    return <Navigate to="/" replace />;
  } else {
    return false;
  }
};

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Login />} />

          <Route
            exact
            path="/index"
            element={estaAutenticado() ? <Index /> : <Navigate to="/" />}
          />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Registro />} />

          {/* <Route exact path="/listpam" element={<Listpam />} /> */}
          {/* <Route exact path="/listpam" element={estaAutenticado() ? <Listpam /> : <Navigate to="/" />}/> */}

          <Route exact path='/listpam/:id' element={estaAutenticado() ? <Listpam /> : <Navigate to="/" /> } />
          {/* <Route path="/agregarpam" element={<Addpam />} /> */}
          <Route exact path="/agregarpam" element={estaAutenticado() ? <Addpam /> : <Navigate to="/" />}
          />
          {/* <Route exact path='/clients' element={<Client/>} />
        <Route exact path='/reports' element={<Reportes/>} />
        <Route exact path='/integrations' element={<Integraciones/>} />
        <Route exact path='/maps' element={<Mapas/>} /> 

        <Route exact path='/clients/add-client' element={<FormClient/>} />
        <Route exact path='/clients/edit-client' element={<FormClient/>} />
        <Route exact path='/usuarios' element={<Usuarios/>} />
        <Route exact path='/consulta' element={<Consulta/>} />
        <Route exact path='/ejemplo' element={<Ejemplo/>} />
        <Route exact path='/form-select' element={<FormSelect/>} />  */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

