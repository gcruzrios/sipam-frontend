import React, { useEffect, useState } from 'react'
import Welcome from "./Welcome";
import Listobs from './Listobs';
import ListPam from './Listpam';
import TitleHome from './TitleHome';
import ListPamxObs from './ListPamxObs';
import TitleHomeObs from './TitleHomeObs';




//const esObs = true;


const Home = () => {

    const [esObs, setEsObs] = useState(true);
  
    const TipoOBS = ()=>{

    //const idOrganizacion = localStorage.getItem('id_organizacion');
    //const nombreOrganizacion = localStorage.getItem('organizacion');
    const rolUsuario = localStorage.getItem('rolUsuario');

    console.log (rolUsuario);
    if (rolUsuario ==='Coordinador'){
        setEsObs(true)
    }else{
        setEsObs(false)
    }

    console.log(esObs);

  }

  useEffect(() => {
    TipoOBS();


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
                      <ListPamxObs/>
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