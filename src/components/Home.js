import React from 'react'
import Welcome from "./Welcome";
import Listobs from './Listobs';
import TitleHome from './TitleHome';

const Home = () => {
  return (
    <div>

        <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">

                 <Welcome/>

                 

                  <div class="col-lg-12">

                    <TitleHome/>

                  </div>
                  
                  <div class="col-lg-12">
                     <Listobs/>
                  </div>
                 
               </div>
              
            </div>
         </div>

    </div>
  )
}

export default Home