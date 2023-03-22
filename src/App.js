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
import Detallepam from "./pages/Detallepam";
import NotFound from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import GoogleMapsPam from "./components/GoogleMapsPam";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import Detalleobs from "./pages/Detalleobs";
import ListSolicitudes from "./pages/ListSolicitudes";
import ListUsers from "./pages/ListUsers";
import ListContactos from "./pages/ListContactos";
import ListAlertas from "./pages/ListAlertas";
import Ayuda from "./pages/Ayuda";

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

          {/* <Route
            exact
            path="/index"
            element={estaAutenticado() ? <Index /> : <Navigate to="/" />}
            element={estaAutenticado() ? <Dashboard/> : <Navigate to="/" />}
            
          /> */}
          <Route path="/index" exact element={estaAutenticado() ? <Index /> : <Navigate to="/" />} />

          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/register" element={<Registro />} />
          <Route exact path="/acerca" element={<AcercaDe />} />
          <Route exact path="/contactos" element={<Contacto />} />

          {/* <Route exact path="/listpam" element={<Listpam />} /> */}
          {/* <Route exact path="/listpam" element={estaAutenticado() ? <Listpam /> : <Navigate to="/" />}/> */}

          <Route exact path='/listpam/:id' element={estaAutenticado() ? <Listpam /> : <Navigate to="/" /> } />
          {/* <Route path="/agregarpam" element={<Addpam />} /> */}
          <Route exact path="/agregarpam" element={estaAutenticado() ? <Addpam /> : <Navigate to="/" />}/>
          <Route exact path='/detallepam/:id' element={estaAutenticado() ? <Detallepam /> : <Navigate to="/" />}/>
          <Route exact path='/detalleobs/:id' element={estaAutenticado() ? <Detalleobs /> : <Navigate to="/" />}/>
          <Route exact path='/googlemaps/:id' element={estaAutenticado() ? <GoogleMapsPam/> : <Navigate to="/" />}/>
          <Route exact path='/alertas/' element={estaAutenticado() ? <ListAlertas /> : <Navigate to="/" />}/>
          <Route exact path='/usuarios/' element={estaAutenticado() ? <ListUsers /> : <Navigate to="/" />}/>
          <Route exact path='/contactos/' element={estaAutenticado() ? <ListContactos /> : <Navigate to="/" />}/>
          <Route exact path='/solicitudes/' element={estaAutenticado() ? <ListSolicitudes/> : <Navigate to="/" />}/>
          
          <Route exact path='/ayuda/' element={estaAutenticado() ? <Ayuda/> : <Navigate to="/" />}/>
          
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

