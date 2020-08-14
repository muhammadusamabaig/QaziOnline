import React, { useContext, useState } from 'react';
// import * as firebase from 'firebase'
// import { Globalcontext } from './contaxt'
// import Form from 'react-bootstrap/Form'
// import Header from './Header';
// const db = firebase.firestore();
import {
    
    Link
  } from "react-router-dom";
function Login() {
       return (
        <div className="globalcolor" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
            <div className="container">
                <div style={{marginTop:"50%"}} className="row justify-content-center">
                    <div className="col-12 text-center d-flex justify-content-center" style={{color:"white"}}><h3>Login</h3></div>
                    <form className="col-10 " style={{paddingBottom:"6%"}}>


                        

                        <div>
                            <label style={{color:"white"}}>Email</label>
                            <input  type="password" className="form-control" placeholder="Enter Email" />
                        </div>

                        <div>
                            <label style={{color:"white"}}>Password</label>
                            <input type="password"  className="form-control" placeholder="Enter password" />
                        </div>

                      <Link to="/Profile" className=" btn-block text-center" style={{height:"40px",marginTop:'5%',borderRadius:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b"}}> Login
                      </Link>
                        <p className="forgot-password text-right" style={{color:"white"}}>
                            Already registered <Link to="/Singup" style={{color:"white",textDecoration:"underline"}}>sign in?</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Login;
















































