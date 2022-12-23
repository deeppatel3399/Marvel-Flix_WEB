import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import AllRows from '../../components/Row/AllRows';
import TopFive from '../../components/TopFive/TopFive';


const useStyle = makeStyles ((theme) => ({

  home:
  {
    backgroundColor: '#141414'
  }

}));


const Home = () => {

  
  
  const classes = useStyle();

  
  return (
    <>
    <Box className={classes.home}>

       <Navbar/>
       <TopFive/>
       <AllRows/>
       <Footer/>

    </Box>
    </>
  )
}

export default Home;