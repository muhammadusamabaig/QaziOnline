import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import {
   
    Link
  } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Profile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Link to='/Singup' >
          <ListItem button>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText >
             Home
            </ListItemText>
          </ListItem>
          </Link>
          <Divider/>
          <ListItem button>
            <ListItemIcon><SupervisedUserCircleSharpIcon/></ListItemIcon>
            <ListItemText >
                Couple Persone
            </ListItemText>
          </ListItem>
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div style={{width:"100%",height:"100vh",overflow:"hidden"}} >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <div className="row">
            </div>
          <DehazeIcon style={{fontSize:"40px",color:"white",marginLeft:"2%"}}  onClick={toggleDrawer(anchor, true)}/>
          <div className="row" style={{height:"30vh"}}>
          <img class="mx-auto my-auto" style={{width:"160px",borderRadius:"100%"}} src="//placehold.it/100"/>  

            </div>
            <div className="row " style={{height:"10%"}}>
              <span className=" col-6 my-auto" style={{color:"white",fontSize:"15px"}}>Qazi Name : </span> <span style={{color:"white",fontSize:"15px"}} className="col-6 my-auto text-center">Muhammad Usama</span>
              

            </div>
            <div className="row " style={{height:"10%"}}>
              <span className=" col-6 my-auto" style={{color:"white",fontSize:"15px"}}>Father Name : </span> <span style={{color:"white",fontSize:"15px"}} className="col-6 my-auto text-center">Muhammad Irfan</span>
              

            </div>
            <div className="row " style={{height:"10%"}}>
              <span className=" col-6 my-auto" style={{color:"white",fontSize:"15px"}}>CNIC no : </span> <span style={{color:"white",fontSize:"15px"}} className="col-6 my-auto text-center">42401-3032094-1</span>
              

            </div>

            <div className="row " style={{height:"10%"}}>
              <span className=" col-6 my-auto mx-auto" style={{color:"white",fontSize:"15px"}}>Education : </span> <span style={{color:"white",fontSize:"15px"}} className="col-6 my-auto text-center">MSC</span>
              

            </div>
            <div className="row " style={{height:"10%"}}>
              <span className=" col-6 my-auto" style={{color:"white",fontSize:"15px"}}>Phone no : </span> <span style={{color:"white",fontSize:"15px"}} className="col-6 my-auto text-center">03100-202059</span>
              

            </div>
            <div className="row " style={{height:"10%"}}>
              <span className=" col-5 my-auto" style={{color:"white",fontSize:"15px"}}>Gmail Account : </span> <span style={{color:"white",fontSize:"15px",overflow:"hidden"}} className="col-6 my-auto text-center">muhammadusamabaig099@gmail.com</span>
              

            </div>
            
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>    
  );
}