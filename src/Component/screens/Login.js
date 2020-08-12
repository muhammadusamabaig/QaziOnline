import React, { useContext, useState } from 'react';
// import * as firebase from 'firebase'
// import { Globalcontext } from './contaxt'
// import Form from 'react-bootstrap/Form'
// import Header from './Header';
// const db = firebase.firestore();

function Login() {
       return (
        <div>
            <div className="container">
                <div style={{marginTop:"10vh"}} className="row justify-content-center">
                    <div className="col-12 text-center d-flex justify-content-center" style={{color:"white"}}><h3>SingUp</h3></div>
                    <form className="col-10 " style={{paddingBottom:"6%"}}>


                        

                        <div className="form-group">
                            <label style={{color:"white"}}>Password</label>
                            <input  type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label style={{color:"white"}}>Password</label>
                            <input type="password"  className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit"  className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right" style={{color:"white"}}>
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                                        <span style={{backgroundColor:"white",height:"40px",paddingTop:"1%"}} className="col-10 d-flex justify-content-center">gmail</span>

                </div>
            </div>
        </div>
    )

}

export default Login;
















































