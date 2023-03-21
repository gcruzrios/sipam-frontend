import React from "react";

const InfoDetallePamSocial = () => {
  return (
    <div>
      {" "}
      <div
        className="tab-pane fade"
        id="v-messages"
        role="tabpanel"
        aria-labelledby="v-messages-tab"
      >
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-10">
            <div className="user-social-profile mt-40 mb-50">
              <div className="user-tab-info-title mb-40 text-capitalize">
                <h5>Perfil Social</h5>
              </div>
              <div className="edit-profile__body">
                <form>
                  <div className=" mb-30">
                    <label for="socialUrl">facebook</label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text bg-facebook border-facebook text-white wh-44 radius-xs justify-content-center"
                          id="addon-wrapping1"
                        >
                          <i className="lab la-facebook-f fs-18"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control--social"
                        placeholder="Url"
                        aria-label="Username"
                        aria-describedby="addon-wrapping1"
                        id="socialUrl"
                      />
                    </div>
                  </div>

                  <div className="button-group d-flex pt-20 justify-content-md-end justify-content-start">
                    <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md">
                      Regresar
                    </button>

                    <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2">
                      Guardar perfil PAM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetallePamSocial;
