import React, { useState } from 'react';
import logo from '../../assets/images/logo/marvel-flix.png';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyle = makeStyles((theme)=>({

  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 2560,
    },
  },

  root:
  {
    height: '70px',
    width: '100vw',
    padding: '0px 50px 0px 50px',
    position: 'fixed',
    top: '0',
    zIndex: '999'
  },
  rootcolor:
  {
    backgroundColor: '#000000',
    height: '70px',
    width: '100vw',
    padding: '0px 50px 0px 50px',
    position: 'fixed',
    top: '0',
    zIndex: '999'
  },
  logo:
  {
    height: '40px'
  },

  text:
  {
    fontSize: '14px',
    color: 'white',
    [theme.breakpoints.between('xs','md')]:
    {
      display: 'none'
    },
    [theme.breakpoints.only('md')]:
    {
      display: 'block'
    }
  },

  searchbox: 
  {
    width: '250px',
    height: '30px',
    paddingLeft: '10px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#141414',
    textWidth: '3px',
    color: '#ffffff',
  },

  Searchicon:
  {
    fontSize: '20px',
    fontStyle: 'bold',
    color: 'white',
    [theme.breakpoints.between('xs','md')]:
    {
      display: 'none'
    },
    [theme.breakpoints.only('md')]:
    {
      display: 'block'
    },
  },

  menuicon:
  {
    fontSize: "20px",
    fontStyle: "bold",
    color: "white",
    [theme.breakpoints.up('md')]:
    {
      display: 'none'
    }
  }
}));



const Navbar = () => {

  const classes = useStyle();

  const [isScrolled , setIsScrolled] = useState(false);

  window.onscroll = () =>{
     setIsScrolled(window.pageYOffset ===  0 ? false : true);
     return () => (window.onscroll == null);
  }

  return (
    <>
       
       <Box className={clsx({[classes.rootcolor]: isScrolled, [classes.root]: !isScrolled})} alignItems="center" display="flex" flexDirection="row" justifyContent='space-between'>
         
              <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                 <img src={logo} alt="logo" className={classes.logo}/>
                 <NavLink className={classes.text}>Home</NavLink>
                 <NavLink className={classes.text}>Movies</NavLink>
                 <NavLink className={classes.text}>Series</NavLink>
                 <NavLink className={classes.text}>Phase-Wise</NavLink>
                 <NavLink className={classes.text}>My List</NavLink>
              </Box>

              <Box display="flex" flexDirection="row" alignItems='center'>
                <Box><input className={classes.searchbox} type="text" placeholder="Let see how was your choice!"/><SearchIcon className={classes.Searchicon}/></Box>
                <NavLink className={classes.text}><FavoriteIcon/></NavLink>
                <NavLink className={classes.text}>User</NavLink>
              </Box>

              <MenuIcon className={classes.menuicon}/>

       </Box>
       
    </>
  )
}

export default Navbar;