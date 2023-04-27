import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CardFormProfileNew from "./CardFormProfileNew";

const FormProfileNuevo = () => {
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [obs, setObs] = useState("");

  const idUsuario = localStorage.getItem("idUsuario");
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  const correoUsuario = localStorage.getItem("correoUsuario");
  const nombreObs = localStorage.getItem("organizacion");
  const rolUsuario = localStorage.getItem("rolUsuario");

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({

    idUsuario: "0",
    usuario: "",
    clave: "",
    correo: "",
    fechaRegistro: "4/4/2023 2:40:19 PM",
    fechaCaducidad: "4/4/2023 2:40:19 PM",
    estado: "",
    rol: "",
    nombreRol: "",
    nombreCompleto: "",
    idOrganizacion: "",
    organizacion: ""
 
  });

  const getDataPam = async (e) => {
    e.preventDefault();

    const cedula_pam = { idUsuario: idUsuario };

    // {
    //   "idUsuario": "42"
    // }

    const Token = localStorage.getItem("Token");
    console.log(Token);
    console.log(cedula);

    await axios
      .post("/wsSIPAM/GetUsuario_X_Id", cedula_pam, {
        headers: { Authorization: "Bearer " + Token },
      })

      .then((response) => {
        setMensaje(response.data.CodigoResultado);
        console.log(mensaje);

        console.log(response.data.Resultado);

        //   setData(response.data.Resultado);
        //    console.log(data);
        //
        setUsuarioSeleccionado(response.data.Resultado);

        setObs(response.data.Resultado.organizacion);
        document.getElementById("identificacion").value = "CEDULA COORDINADOR";
        document.getElementById("nombre").value = nombreUsuario;
        document.getElementById("correo").value = correoUsuario;
        document.getElementById("organizacion").value = usuarioSeleccionado.organizacion;
        document.getElementById("correo").value = correoUsuario;
      });

    console.log(usuarioSeleccionado);

    if (mensaje !== "200") {
      Swal.fire({
        icon: "error",
        title: "No aparece en BD de TSE",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
    }
  };

  useEffect(() => {
    //getDataPam();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Configuración de Perfil de Usuario SIPAM
              </h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/index">
                        <i className="uil uil-estate"></i>Inicio
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Configuracion OBS / usuarios
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card card-horizontal card-default card-md mb-4"></div>
          </div>

          <div className="col-lg-12">
            <div class="col-lg-12">
              <div class="card card-default card-md mb-4">
                <div class="card-header">
                  <h6>Datos de Usuario SIPAM</h6>
                </div>
                <div class="card-body py-md-30">
                  <form action="#">
                    <div class="form-group row mb-n25">
                    <div class="col-md-12 mb-25">
                        <div class="with-icon">
                          <span class="las la-map-marker color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="organizacion"
                            placeholder="OBS"
                            value={nombreObs}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-user lar color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Número de Cédula"
                            id="identificacion"
                            value="NúMERO CEDULA"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-user lar color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Nombre"
                            id="nombre"
                            value={nombreUsuario}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="las la-envelope color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Correo Electrónico"
                            id="correo"
                            value={correoUsuario}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-phone las color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon6"
                            placeholder="Número de Teléfono"
                          />
                        </div>
                      </div>
                      
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="las la-map-marker color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon3"
                            placeholder="OBS"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                      </div>

                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-phone las color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon6"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                      </div>

                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-lock las color-light"></span>
                          <input
                            type="password"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                        </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-lock las color-light"></span>
                          <input
                            type="password"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon5"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                        </div>
                      <div className="col-md-6 mb-25">
                        <div className="layout-button mt-0">
                          <button
                            type="button"
                            className="btn btn-default btn-squared btn-light px-20 "
                          >
                            cancelar
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-default btn-squared px-30"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <CardFormProfileNew/>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProfileNuevo;

