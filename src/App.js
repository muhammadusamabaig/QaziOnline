import React from 'react';
import {makeStyles} from '@material-ui/core' 
import Login from './Component/screens/Login'
import Singup from './Component/screens/Signup'
import {Drawer,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
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
  const classes=usestyle()
  return (
    <div className="globalcolor" >
<Router>
  <Drawer style={{width:"240px"}} variant="persistent" anchor="left" open={true} classes={{paper:classes.drawerPaper}}>
<ListItem>
  <ListItemIcon>
    <HomeIcon/>
  </ListItemIcon>
  <ListItemText primary="Home"/>
</ListItem>




  </Drawer>
</Router>
{/* <Singup/> */}
   </div>
  );
}

export default App;
