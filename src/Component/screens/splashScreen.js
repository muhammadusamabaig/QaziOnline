
import React, { useContext, useState } from 'react';
import SingupDrawer from './SingupDrawer'
import {
    
    Link
  } from "react-router-dom";
function SplashScreen() {
       return (
        <div style={{height:"100vh" ,width:"100%",overflow:"hidden"}}>
          <div className="row" style={{height:"70vh"}}>
          <img class="mx-auto my-auto" style={{width:"160px",borderRadius:"100%"}} src="//placehold.it/100"/>  

            </div>


            <div className="row justify-content-center" style={{height:"8vh"}}>
              <Link className="col-10 text-center"  type="submit" style={{height:"40px",borderRadius:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b"}} to="/Login">login</Link>

            </div>

            <SingupDrawer/>


          
        
</div>
    )

}

export default SplashScreen;