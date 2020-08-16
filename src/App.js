import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core' 
import Login from './Component/screens/Login'
import SplashScreen from './Component/screens/splashScreen'
import SingupQazi from './Component/screens/SignupQazi'
import {Drawer,Divider,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import Profile from './Component/screens/profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import classes from '*.module.css';

const usestyle= makeStyles((theme)=>({
  drawerPaper:{width:"inherit"}
}))
function App() {
  // const [drawerstate,setdrawerstate]=useState(false)

  // const classes=usestyle()
  return (

<Router>
<div className="globalcolor">
<Switch>
          <Route exact path="/">
            <SplashScreen />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Singup">
            <SingupQazi />
          </Route>
          

          <Route exact path="/Profile">
            <Profile />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>




  );
}

export default App;




















































































//     <div  >
// <h1>oioijfij</h1>
// <Router>
  {/* <Drawer style={{width:"240px"}} variant="persistent" anchor="left" open={drawerstate} classes={{paper:classes.drawerPaper}}>
  <Divider/>

  <ListItem button>
  <ListItemIcon style={{marginLeft:"90%"}}>
   <HomeIcon/>
  </ListItemIcon>

</ListItem>
<ListItem button>
  <ListItemIcon >
    <HomeIcon/>
  </ListItemIcon>
  <ListItemText primary="Home"/>
</ListItem>
<Divider/>



  </Drawer> */}

// {/* <Singup/> */}










