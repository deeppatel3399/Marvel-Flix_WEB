import Box  from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React from 'react';
import clsx from 'clsx';
import { IconButton, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';




const useStyle = makeStyles((theme) => ({
    
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


    // for cards
    cards:
    {
        width: '100%',
        height: '100vh',
        position: 'relative'
    },
    // resCards:
    // {
    //     [theme.breakpoints.between('xs','md')]:
    //     {
    //         width: '100%',
    //         height: '90vh',
    //         position: 'relative'
    //     }
    // },
    // for cards



    // for poster
    poster:
    {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
    },
    resPoster:
    {
        [theme.breakpoints.between('xs','md')]:
        {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        },
    },
    // for poster


    info:
    {
        width: '34%',
        position: 'absolute',
        left: '50px',
        bottom: '100px'
    },
    descr:
    {
        color: '#FFFFFF',
        margin: '20px 0px'
    },
    button:
    {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#FFFFFF',
        color: '#141414',
        fontSize: '18px',
        marginRight: '10px',
        fontWeight: '500',
        "&:hover": {
            backgroundColor: '#FFFFFF',
            color: '#141414',
        }
    },
    more:
    {
        color: '#FFFFFF',
        backgroundColor: 'grey',
        "&:hover": {
            color: '#FFFFFF',
            backgroundColor: 'grey',
        }
    },
    titleimage:
    {
        width: '500px',
        height: '200px',
        marginBottom: '150px',
    },
    navlink:
    {
        textDecoration: 'none'
    }

  }));

const CardTop5 = (props) => {

  const classes = useStyle();

  return (
    <>

       <Box className={clsx(classes.cards,classes.resCards)} >
        
                   <img className={clsx(classes.poster,classes.resPoster)} 
                     alt={props.title}
                     src={props.thumbnail}
                   />

            <Box className={classes.info} display='flex' flexDirection='column'>

                <img className={classes.titleimage} src={props.TitleLogo} alt={props.title}/>

                <Typography className={classes.descr}>
                    {props.details}
                </Typography>
                
                <Box className={classes.buttons} display='flex' flexDirection='row'>
                
                    <IconButton className={clsx(classes.button,classes.play)}>
                        <PlayArrowIcon/><Typography>Play</Typography>
                    </IconButton>

                    
                    {/* <NavLink exact to={props.link} className={classes.navlink}> */}
                    <IconButton className={clsx(classes.button,classes.more)}>
                    <InfoOutlinedIcon/><Typography>Info</Typography>
                    </IconButton>
                    {/* </NavLink> */}
                

                </Box>

            </Box>

       </Box>

    </>
  )
}

export default CardTop5;