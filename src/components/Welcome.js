import React from "react";

const Welcome = () => {
  return (
    <div>
      <div class="col-xxl-12 mt-20 mb-10">
        <div class="card banner-feature--18 d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6">
                <div class="card-body px-25">
                  <h1 class="banner-feature__heading color-white">
                    Bienvenido a SIPAM
                  </h1>
                  <p class="banner-feature__para color-white">
                    Sistema de Manejo de Información de las Persona Adulta Mayor
                    de la Unidad de Fiscalización Operativa (UFO) del CONAPAM
                    Más información en nuestro sitio web : www.conapam.go.cr
                  </p>
                  <div class="d-flex justify-content-sm-start justify-content-center">
                    <button
                      class="banner-feature__btn btn btn-primary color-white btn-md px-20 radius-xs fs-15"
                      type="button"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="banner-feature__shape px-md-25 px-25 py-sm-0 pt-15 pb-30 d-flex justify-content-sm-end justify-content-center">
                  <img src="/img/CONAPAM_WEB.jpg" alt="img" class="svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
