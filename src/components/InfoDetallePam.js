import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

const InfoDetallePam = () => {
  const [pamSeleccionado, setpamSeleccionado] = useState({
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

  const { id } = useParams();
  //console.log(id);

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    
    const cedula = { cedula: id };
    console.log(cedula);
    await axios
      .post("/wsSIPAM/GetConsultaPAM", cedula, {
        headers: { Authorization: "Bearer " + Token },
      })
      .then((response) => {
        console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpamSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(pamSeleccionado);
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      {data.map((pam) => (
        <div
          className="tab-pane fade  show active"
          id="v-home"
          role="tabpanel"
          aria-labelledby="v-home-tab"
        >
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-10">
              <div className="mt-sm-40 mb-sm-50 mt-20 mb-20">
                <div className="user-tab-info-title mb-sm-40 mb-20 text-capitalize">
                  <h5 className="fw-500">Información Personal</h5>
                </div>
                <div className="account-profile d-flex align-items-center mb-4 ">
                  <div className="ap-img pro_img_wrapper">
                    <input
                      id="file-upload"
                      type="file"
                      name="fileUpload"
                      className="d-none"
                    />
                    {/* <!-- Profile picture image--> */}
                    <label for="file-upload">
                      <img
                        className="ap-img__main rounded-circle wh-120 bg-lighter d-flex"
                        src="/img/author/profile.png"
                        alt="profile"
                      />
                      <span className="cross" id="remove_pro_pic">
                        <img
                          src="/img/svg/camera.svg"
                          alt="camera"
                          className="svg"
                        />
                      </span>
                    </label>
                  </div>
                  <div className="account-profile__title">
                    <h6 className="fs-15 ms-20 fw-500 text-capitalize">
                      Foto de Perfil
                    </h6>
                  </div>
                </div>
                <div className="edit-profile__body">
                  <form>
                    <div className="form-group mb-25">
                      <label for="name1">identificación</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name1"
                        value={pam.identificacion}
                      />
                    </div>
                    <div className="form-group mb-25">
                      <label for="name1">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name1"
                        value={pam.nombre}
                      />
                    </div>
                    <div className="form-group mb-25">
                      <label for="name2">Apellido 1</label>
                      <input
                        type="email"
                        className="form-control"
                        id="name2"
                        value={pam.primerApellido}
                      />
                    </div>
                    <div className="form-group mb-25">
                      <label for="name2">Apellido 2</label>
                      <input
                        type="email"
                        className="form-control"
                        id="name2"
                        value={pam.segundoApellido}
                      />
                    </div>
                    <div className="form-group mb-25">
                      <label for="phoneNumber5">Número de Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber5"
                        placeholder="+440 2546 5236"
                      />
                    </div>
                    <div className="form-group mb-25">
                      <div className="countryOption">
                        <label for="countryOption">Nacionalidad</label>
                        <select
                          className="js-example-basic-single js-states form-control"
                          id="countryOption"
                        >
                         

                          <option value="JAN">Costarricense</option>
                          <option value="FBR">Extranjero</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group mb-25">
                      <div className="cityOption">
                        <label for="cityOption">Provincia</label>

                        {/* <select
                          className="js-example-basic-single js-states form-control"
                          id="cityOption"
                        >
                          <option value="JAN">San José</option>
                          <option value="FBR">Alajuela</option>
                          <option value="JAN">Cartago</option>
                          <option value="FBR">Heredia</option>
                        </select> */}
                        <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber5"
                        value={pam.provincia}
                        />
                         
                      </div>
                    </div>
                    <div className="form-group mb-25">
                      <label for="name3">Cantón</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name3"
                        value={pam.canton}
                      />
                    </div>
                    <div className="form-group mb-25">
                      <label for="name3">Distrito</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name3"
                        value={pam.distrito}
                      />
                    </div>

                    <div className="button-group d-flex pt-sm-25 justify-content-md-end justify-content-start ">
                      <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md btn-sm">
                        Cancelar
                      </button>

                      <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2 btn-sm">
                        Guardar &amp; Siguiente
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoDetallePam;

