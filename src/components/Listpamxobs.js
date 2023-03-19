import React from 'react'

import Listpam from './Listpam';
import TitleHome from './TitleHome';

const Home = () => {
  return (
    <div>

        <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">
                 

                  <div class="col-lg-12">

                    <TitleHome/>

                  </div>
                  
                  <div class="col-lg-12">
                     <Listpam/>
                  </div>
                 
               </div>
              
            </div>
         </div>

    </div>
  )
}

export default Home