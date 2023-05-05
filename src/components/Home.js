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
    const estadoUsuario = localStorage.getItem('estadoUsuario');
    const [esObs, setEsObs] = useState(true);
    const [changePassword, setChangePassword] = useState(false);
    console.log(changePassword);
    
    

    //console.log (rolUsuario);

    const ChangePassword = ()=>{
    
  
      if (estadoUsuario ==='A'){
          setChangePassword(true)
        }else{
          setChangePassword(false)
        }

        console.log(changePassword);

    }



  
    
    
    const TipoOBS = ()=>{
    
  
      if (rolUsuario ==='Coordinador'){
            setEsObs(true)
        }else{
            setEsObs(false)
        }

        //console.log(esObs);

    }

    

    useEffect(() => {
    
      TipoOBS();
      ChangePassword();

      if (changePassword){

        Swal.fire({
               
          icon: 'error',
          title: 'Por Favor Cambiar el Password',
          showConfirmButton: false,
          timer: 1500
      })
        // <ModalChangePassword/>

      }
      

  }, [])




  return (
    <div>

        <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">

                 <Welcome/>

                 

                  <div class="col-lg-12">

                  
                   



                  {esObs ? (
                      <TitleHomeObs/>
                    ) : (
                      <TitleHome/>
                    )}
                   

                  </div>
                  
                  <div class="col-lg-12">

                    {esObs ? (
                      <Listpamxobs/>
                    ) : (
                      <Listobs/>
                    )}
                   
                  </div>
                 
               </div>
              
            </div>
         </div>

    </div>
  )
}

export default Home