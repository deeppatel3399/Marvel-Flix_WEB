import { Box, IconButton, Typography } from '@material-ui/core';
import {useStyle} from './FooterStyle';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Footer = () => {
  
  const classes = useStyle();   

  return (
    <>
        <Box className={classes.container}>
           
           <Box className={classes.social}>
               <Typography className={classes.hading}>
                   Connect With Us!
               </Typography>
                <Box className={classes.iconsrow}>
                   <IconButton><FacebookIcon className={classes.icon}/></IconButton>
                   <IconButton><InstagramIcon className={classes.icon}/></IconButton>
                   <IconButton><TwitterIcon className={classes.icon}/></IconButton>
                   <IconButton><YouTubeIcon className={classes.icon}/></IconButton>
                </Box>

           </Box>

           <Box className={classes.extrapart}>
             
              <Typography className={classes.text}>About Us</Typography>
              <Typography className={classes.text}>Contact Us</Typography>
              <Typography className={classes.text}>Donate<FavoriteBorderIcon className={classes.donateicon}/></Typography>

           </Box>

        </Box>
    </>
  )
}

export default Footer