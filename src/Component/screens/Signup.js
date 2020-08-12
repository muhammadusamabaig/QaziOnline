import React, { useContext, useState } from 'react';
// import * as firebase from 'firebase'
// import { Globalcontext } from './contaxt'
// import Form from 'react-bootstrap/Form'
// import Header from './Header';
// const db = firebase.firestore();
import Form from 'react-bootstrap/Form'
function SingUp() {
    const [name, setname] = useState('')
    const [fname, setfname] = useState('')
    const [cnic, setcnic] = useState('')
    const [gmail, setgmail] = useState('')
    const [address, setaddress] = useState('')
    const [cetagory, setcetagory] = useState('')
    const [password, setpassword] = useState('')

    // var auth = firebase.auth()

    // const temparr = []
    const [selectpersone, setselectpersone] = useState('')

    // var a = localStorage.getItem("token")
    // console.log("a" , a)
    //  function singup(){
    // firebase.database().ref('qazi').once('value').then((res)=>{
    // console.log(res.val())
    // })
    // if(selectpersone==='qazi'){
    // firebase.database().ref('qazi').push({
    // name:name,
    // fathername:fname,
    // Cnic: cnic,
    // gmail:gmail,
    // address:address,
    // cetagory:cetagory,
    // password:password,
    // token:a,
    // })
    // alert('okk hogaya kam')
    // }
    //  }
    // var a = localStorage.getItem("token")
    // function singup() {
    //     if (selectpersone === 'qazi') {
    //         firebase.auth().createUserWithEmailAndPassword(gmail, password)
    //             .then(function (res) {
    //                 alert('Registered Successfully!');

    //                 console.log('res =>', res.user.uid);
    //                 var uids = res.user.uid
    //                 db.collection('student').doc(res.user.uid).set({
    //                     name: name,
    //                     fathername: fname,
    //                     Cnic: cnic,
    //                     gmail: gmail,
    //                     address: address,
    //                     cetagory: cetagory,
    //                     password: password,
    //                     // token: a,
    //                 })
    //                     .then(() => {
    //                         console.log('Added in db');




    //                     })
    //                     .catch((e) => {
    //                         console.log('error Adding in db');
    //                     })
    //             })
    //             .catch(function (error) {
    //                 //Handle Errors here.
    //                 var errorCode = error.code;
    //                 var errorMessage = error.message;
    //                 console.log(errorMessage);
    //                 alert(errorMessage)

    //             });


    //     }
    // }
    return (
        <div style={{ height: "120vh", width: "100%", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center" style={{color:"white"}}><h3>SingUp</h3></div>
                    <form className="col-10 ">

                        <div className="form-group">
                            <label style={{color:"white"}}>First name</label>
                            <input type="text" onChange={(e) => { setname(e.target.value) }} className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label style={{color:"white"}}>Father name</label>
                            <input onChange={(e) => { setfname(e.target.value) }} type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label style={{color:"white"}}>Email address</label>
                            <input onChange={(e) => { setgmail(e.target.value) }} type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label style={{color:"white"}}>Cnic no</label>
                            <input onChange={(e) => { setcnic(e.target.value) }} type="number"  className="form-control" placeholder="Enter Cnic" />
                        </div>

                        <div className="form-group">                                                     
                            <label style={{color:"white"}}>Address</label>
                            <input onChange={(e) => { setaddress(e.target.value) }} type="text"  className="form-control" placeholder="Enter Address" />
                        </div>

                        <div className="form-group">
                            {/* <label>Choose Cetagory</label> */}
                            <Form.Label style={{color:"white"}}>Disabled select menu</Form.Label>
                            <Form.Control onChange={(e) => { setselectpersone(e.target.value) }} as="select">
                                <option value="qazi">Qazi</option>
                                <option value="persone">couple persone</option>
                                <option value="admin">Admin</option>

                            </Form.Control>
                        </div>


                        <div className="form-group">
                            <label style={{color:"white"}}>Password</label>
                            <input onChange={(e) => { setpassword(e.target.value) }} type="password"  className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit"className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right" style={{color:"white"}}>
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SingUp;

















































{/*     
// const [Text,setText]=useState('')
// const [amount,setamount]=useState('')
// // create fack id by random number

// function getid(){
//   return(Math.random())
// }

// const id=getid()
//     const context=useContext(Globalcontext)
//     // const delettedatta=useContext(Globalcontext)


//     console.log(context.transections)

// var total=0
// var positivetemp=0
// var nagitivetemp=0

         */}




