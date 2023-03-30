import React, { useEffect, useState } from "react";
import axios from "axios";

const ConsultaPam = () => {
  const [consulta, setConsulta] = useState([]);
  const [data, setData] = useState([]);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    identificacion: "",
    nombre: "",
    papellido: "",
    sapellido: "",
    sexo: "",
    puesto: "",
    tcontrato: "",
    tipoIdentificacion: "",
    identificacion: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    sexo: "",
    estadoCivil: "",
    idNacionalidad: "",
    idDistrito: "",
    distrito: "",
    idCanton: "",
    canton: "",
    idProvincia: "",
    provincia: "",
    idRegion: "",
    region: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const idUsuario = localStorage.getItem("idUsuario");
    const Token = localStorage.getItem("Token");
    //const cedula: data.get('cedula')

    const datos = new FormData(event.currentTarget);
    console.log(datos)
    const cedula = datos.get("cedula");

    await axios
      .post("/wsSIPAM/GetPersonaPadron", cedula, {
        headers: { Authorization: "Bearer " + Token },
      })

      .then((response) => {
        console.log(response.data.Resultado);
        setData(response.data.Resultado);
        console.log(response.data.Resultado);
        //  setConsulta(response.data);
        //  console.log(response.data);
        setUsuarioSeleccionado(response.data.Resultado[0]);

        //   document.getElementById("nombre").value = usuarioSeleccionado.nombre;
        //   document.getElementById("papellido").value = usuarioSeleccionado.papellido;
        //   document.getElementById("sapellido").value = usuarioSeleccionado.sapellido;
      });

    console.log(usuarioSeleccionado);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Consulta de Nueva PAM para validación
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
                      Consultas PAM
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-horizontal card-default card-md mb-4">
              <div className="card-header">
                <h6>Consulta PAM por Cédula / Dimex</h6>
              </div>
              <div className="card-body py-md-30">
                <div className="horizontal-form">
                  {/* <form action="#"> */}
                    <div className="mb-3">
                   
                      <div class="radio-theme-default custom-radio ">
                        <input
                          class="radio"
                          type="radio"
                          name="radio-default"
                          value="0"
                          id="radio-un4"
                          checked
                        />
                        <label for="radio-un4">
                          <span class="radio-text">Número de Cédula</span>
                        </label>
                      </div>
                      <div className="radio-theme-default custom-radio ">
                        <input
                          className="radio"
                          type="radio"
                          name="radio-default"
                          value="1"
                          id="radio-un2"
                        />
                        <label for="radio-un2">
                          <span className="radio-text">Número DIMEX </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group row mb-25">
                      <div className="col-sm-3 d-flex aling-items-center ">
                        <label
                          for="inputName"
                          className=" col-form-label color-dark fs-14 fw-500 align-center"
                        >
                          Número de Cédula / DIMEX
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control ih-medium ip-gray radius-xs b-light px-15"
                          
                          id="cedula"
                          name="cedula"
                          placeholder="Número de cédula con ceros sin guiones"
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-sm-4">
                        <div className="layout-button mt-25 ">
                          
                          <button
                            type="submit"
                            className="btn btn-primary btn-default btn-squared px-30"
                            onSubmit={handleSubmit}
                          >
                            Consultar
                          </button>
                        </div>
                      </div>
                    </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Datos de PAM </h6>
              </div>
              <div className="card-body py-md-30">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Número de Cédula"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Apellido 1"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Apellido 2"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Provincia"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Cantón"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Distrito"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="email"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Correo Electrónico"
                      />
                    </div>
                    <div className="col-md-6">
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
            {/* <!-- ends: .card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaPam;
