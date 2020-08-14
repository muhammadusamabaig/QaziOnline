
import React, { useContext, useState } from 'react';
import SingupDrawer from './SingupDrawer'
// import * as firebase from 'firebase'
// import { Globalcontext } from './contaxt'
// import Form from 'react-bootstrap/Form'
// import Header from './Header';
// const db = firebase.firestore();
import {
    
    Link
  } from "react-router-dom";
function SplashScreen() {
       return (
           
        // <div className=" justify-content-center" style={{backgroundColor:"lightGray", width: "100%", overflow: "hidden" }}>
        //             {/* <img   src={process.env.PUBLIC_URL + 'nikah.jpg'} /> */}
                    


                        


        //            {/*  */}

        //                 {/*  */}
                        // {/* <SingupDrawer /> */}

            
            
        // </div>
        // </div>
        <div style={{height:"100vh" ,width:"100%",overflow:"hidden"}}>
          <div className="container">
            <div className="row" style={{marginTop:"30%"}}>
              <div className="col-12 d-flex justify-content-center">
              <img    src={process.env.PUBLIC_URL + 'nikah.jpg'} />             
               </div>
            </div>


            <div className="row justify-content-center" style={{marginTop:"90%"}}>
              <Link className="col-10 text-center"  type="submit" style={{height:"40px",borderRadius:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b"}} to="/Login">login</Link>
               
            </div>

                <SingupDrawer/>
            

          
        </div>
</div>
    )

}

export default SplashScreen;
















































