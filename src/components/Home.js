import React, { useEffect, useState } from 'react'
import Welcome from "./Welcome";
import Listobs from './Listobs';
import ListPam from './Listpam';
import TitleHome from './TitleHome';
//import ListPamxObs from './ListPamxObs';
import TitleHomeObs from './TitleHomeObs';
import Listpamxobs from './Listpamxobs';
import ModalChangePassword from './ModaChangePassword';
import NoModal from './NoModal';
import Swal from 'sweetalert2';

//const esObs = true;

const Home = () => {
  const rolUsuario = localStorage.getItem('rolUsuario');
  const estadoUsuario = localStorage.getItem('Estado');

  const [esObs, setEsObs] = useState(true);
  const [changePassword, setChangePassword] = useState(false);
  console.log(changePassword);

  const ChangePassword = () => {

    console.log("estadoUserRevisar: " + estadoUsuario);

    if (estadoUsuario === 'A') {
      setChangePassword(false)
    }
    if (estadoUsuario === 'T') {
      setChangePassword(true);
    }
    else {
      setChangePassword(true);
    }
  }

  const TipoOBS = () => {
    if (rolUsuario === 'Coordinador') {
      setEsObs(true)
    } else {
      setEsObs(false)
    }
  }

  useEffect(() => {

    console.log("estadoUsuario: " + estadoUsuario);
    console.log("cambiar Pass: " + changePassword);


    ChangePassword();


    console.log("Verifica si cambia PASS: " + changePassword);

    //Prueba carga
    if (estadoUsuario !== 'A') {
      setChangePassword(true);      

      Swal.fire({

        icon: 'warning',
        title: 'Por Favor Cambiar el Password',
        showConfirmButton: false,
        timer: 1500,
        //timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          window.location.href = '/Profile';
        },
      });

    }

    TipoOBS();


  }, [])


  return (
    <div>

      <div class="crm mb-25">
        <div class="container-fluid">
          <div class="row ">

            <Welcome />



            <div class="col-lg-12">






              {esObs ? (
                <TitleHomeObs />
              ) : (
                <TitleHome />
              )}


            </div>

            <div class="col-lg-12">

              {esObs ? (
                <Listpamxobs />
              ) : (
                <Listobs />
              )}

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home