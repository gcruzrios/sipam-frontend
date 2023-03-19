import React, { useEffect, useState } from "react";

import {
  Link
} from "react-router-dom";


import axios from "axios";

const Tablaobs = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    codigoInstitucion: "",
    identificacion: "",
    razonSocial: "",
    tipoRazonSocial: "",
    nombreCONAPAM: "",
    idDistrito: "",
    region: "",
    otrasSenias: "",
    geoLocalizacion: "",
    cedulaRepresentanteLegal: "",
    nombreRepresentanteLegal: "",
    primerApellidoRepresentanteLegal: "",
    segundoApellidoRepresentanteLegal: "",
    correoRepresentante: "",
    telefonoRepresentante: "",
    cedulaCoordinador: "",
    nombreCoordinador: "",
    primerApellidoCoordinador: "",
    segundoApellidoCoordinador: "",
    correoCoordinador: "",
    telefonoCoordinador: "",
    capacidadAtencionPAM: "",
    correoOrganizacion: "",
    estado: "",
    modalidadAtencion: "",

    // jefe:localStorage.getItem('idUsuario')
  });

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');
   
    
    await axios
      .get('/wsSIPAM/GetOrganizaciones', {
        headers:{Authorization:'Bearer '+Token}
      })
      .then((response) => {
        //console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  }; 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setobsSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(obsSeleccionado);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  // useEffect(async () => {
  //   await peticionGet();
  // }, []);

  return (
    <div>
      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            <th>
              <span className="userDatatable-title userDatatable-title">
                Codigo
              </span>
            </th>
            <th>
              <span className="userDatatable-title">Nombre</span>
            </th>
            <th>
              <span className="userDatatable-title">Cédula Jurídica</span>
            </th>
            <th>
              <span className="userDatatable-title">Region</span>
            </th>
            <th>
              <span className="userDatatable-title">correo Organizacion</span>
            </th>
            <th>
              <span className="userDatatable-title">Estado</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(obs=>(
          <tr key={obs.idOrganizacion}>
            {/* data */}
            {/* <TableData /> */}
            
            <td>
              
              
              <div className="userDatatable-content">
              <Link  className="nav-author__signout" to={`/listpam/${obs.identificacion}`}>  <i className="uil uil-home-alt"></i> {obs.codigoInstitucion}</Link>
              </div>
            </td>
            <td>
              <div className="userDatatable-content">{obs.nombreCONAPAM.substring(40, obs.nombreCONAPAM)}</div>
            </td>
            <td>
              <div className="userDatatable-content">{obs.identificacion}</div>
            </td>
            <td>
              <div className="userDatatable-content">{obs.region}</div>
            </td>
            <td>
              <div className="userDatatable-content">{obs.correoOrganizacion}</div>
            </td>
            <td>
              <div className="userDatatable-content d-inline-block">
                <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                  activo
                </span>
              </div>
            </td>
            <td>
              <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                <li>
                  <a href="#" className="view">
                    <i className="uil uil-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="edit">
                    <i className="uil uil-edit"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="remove">
                    <i className="uil uil-trash-alt"></i>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablaobs;

