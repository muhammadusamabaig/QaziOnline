import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form'
import SingupCouple from './SingupCouple'

import {

    Link

  } from "react-router-dom";
function SingupQazi() {
    const [name, setname] = useState('')
    const [fname, setfname] = useState('')
    const [cnic, setcnic] = useState('')
    const [gmail, setgmail] = useState('')
    const [address, setaddress] = useState('')
    const [cetagory, setcetagory] = useState('')
    const [password, setpassword] = useState('')
    const [selectpersone, setselectpersone] = useState('')
    return (
        <div className="globalcolor" style={{ height: "110vh", width: "100%", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center" style={{color:"white"}}><h3>SingUp Qazi</h3></div>
                    <div className="col-10 ">
                        
                    <div >
                            <label style={{color:"white"}}>First name</label>
                            <input type="text" onChange={(e) => { setname(e.target.value) }} className="form-control" placeholder="First name" />
                        </div>

                        <div>
                            <label style={{color:"white"}}>Father name</label>
                            <input onChange={(e) => { setfname(e.target.value) }} type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div>
                            <label style={{color:"white"}}>Email address</label>
                            <input onChange={(e) => { setgmail(e.target.value) }} type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div >
                            <label style={{color:"white"}}>Cnic no</label>
                            <input onChange={(e) => { setcnic(e.target.value) }} type="number"  className="form-control" placeholder="Enter Cnic" />
                        </div>

                        <div >                                                     
                            <label style={{color:"white"}}>Address</label>
                            <input onChange={(e) => { setaddress(e.target.value) }} type="text" className="form-control"  placeholder="Enter Address" />
                        </div>

                        <div >
                            <Form.Label style={{color:"white"}}>Disabled select menu</Form.Label>
                            <Form.Control onChange={(e) => { setselectpersone(e.target.value) }} as="select">
                                <option value="qazi">Qazi</option>
                                <option value="persone">couple persone</option>
                                <option value="admin">Admin</option>

                            </Form.Control>
                        </div>


                        <div >
                            <label style={{color:"white"}}>Password</label>
                            <input onChange={(e) => { setpassword(e.target.value) }} type="password"  className="form-control" placeholder="Enter password" />
                        </div>

<input  type="file" style={{backgroundColor:"transparent",marginTop:"2%",borderColor:" 2px solid white",color:"white"}} className="form-control" placeholder="Enter password" />

                       

                        <Link to="/Login" className=" btn-block text-center" style={{height:"40px",borderRadius:"5%",textDecoration:"none",marginTop:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b",color:"white"}}>
                            SingUp
                        </Link>
                        <p className="forgot-password text-right" style={{color:"white"}}>
                            Already registered <Link to="/Login" style={{color:"white",textDecoration:"underline"}}>Please Login</Link>
                        </p>

                    </div>
                </div>
            </div>
            {/* <SingupCouple/> */}
        </div>
    )

}
export default SingupQazi;