
// import React,{useState} from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import MenuIcon from '@material-ui/icons/Menu';
// import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
// import {
   
//     Link
//   } from "react-router-dom";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function Profile() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };
// const [opensate,setopenstate]=useState(false)
// const [closestate,setclosestate]=useState(false)

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//           <Link to='/Singup' >
//           <ListItem button>
//             <ListItemIcon><HomeIcon/></ListItemIcon>
//             <ListItemText >
//              Qazi
//             </ListItemText>
//           </ListItem>
//           </Link>
//           <Divider/>
//           <ListItem button>
//             <ListItemIcon><SupervisedUserCircleSharpIcon/></ListItemIcon>
//             <ListItemText >
//                 Couple Persone
//             </ListItemText>
//           </ListItem>
//       </List>
//       <Divider />
//       {/* <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   return (
// <div className="container">
//     <div className="row">
// <MenuIcon onClick={()=>{setopenstate(true)}} style={{color:"white"}}/>
//     </div>
// <div className="row justify-content-center" style={{height:"30vh",width:"100%",overflow:"hidden"}}>
//       {['bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
            
//           {/* <Button className="col-10 text-center" style={{height:"40px",borderRadius:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b"}} onClick={toggleDrawer(anchor, true)}>Singup</Button> */}
          




//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, closestate)}
//             onOpen={toggleDrawer(anchor, opensate)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
// <img style={{width:"150px",marginLeft:"4%",height:"150px",borderRadius:"100%",marginTop:"5%"}} className="img-fluid"  src={process.env.PUBLIC_URL + 'qrisahab.jpg'} />             
// </div>

// </div>
//   );
// }















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
    <div  >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            
          <HomeIcon style={{fontSize:"40px"}}  onClick={toggleDrawer(anchor, true)}/>
          
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

// <div className="container">
//     <div className="row">
// <MenuIcon onClick={()=>{setopenstate(true)}} style={{color:"white"}}/>
//     </div>
// <div className="row justify-content-center" style={{height:"30vh",width:"100%",overflow:"hidden"}}>
//       {['bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
            
//           {/* <Button className="col-10 text-center" style={{height:"40px",borderRadius:"5%",backgroundColor:"#9a201b",color:"white",fontSize:"120%",borderLeft:"2px solid #9a201b",borderRight:"2px solid #9a201b",borderBottom:"2px solid #9a201b",borderTop:"2px solid #9a201b"}} onClick={toggleDrawer(anchor, true)}>Singup</Button> */}
          




//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, opensate)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
// <img style={{width:"150px",marginLeft:"4%",height:"150px",borderRadius:"100%",marginTop:"5%"}} className="img-fluid"  src={process.env.PUBLIC_URL + 'qrisahab.jpg'} />             
// </div>

// </div>


    
  );
}