import { Box } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme)=>({

    cardcontainer:
    {
        width: '400px',
        height: '200px',
        margin: '30px 10px 0px 0px'
    },
    posterimage:
    {
        width: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
    },
}));

const MoreCard = (props) => {

  const classes = useStyle();  

  return (
     <>
        <Box className={classes.cardcontainer}>

            <img className={classes.posterimage} src={props.src} alt={props.alt}/>

        </Box>
     </>
  )
}

export default MoreCard;