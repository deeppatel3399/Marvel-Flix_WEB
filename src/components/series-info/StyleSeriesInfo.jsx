import {  makeStyles } from '@material-ui/core';


const useStyle = makeStyles ((theme) => ({

    moviesposter:
    {
        backgroundColor: '#000000',
    },
    content:
    {
        maxWidth: '100%',
        height: '100vh',
        paddingTop: '70px',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    image:
    {
        width: '100%',
        height: '100%',
        ObjectFit: 'cover',
    },
    left:
    {
        display: 'block',
        float: 'left',
        maxWidth: '40%',
        position: 'absolute',
        left: '6%',
        top: '20%',

    },
    titlelogo:
    {
         width: '300px',
         height: '100px',
         marginBottom: '50px',
    },
    movietitle:
    {
        color: '#ffffff',
        fontSize: '30px',
        fontWeight: 'bolder',
        marginBottom: '15px',
    },
    movieLengthDate:
    {
        color: '#D0D0D0',
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '15px',
    },
    movietitleGeners:
    {
        color: '#D0D0D0',
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '15px'  
    },
    movietitleOverview:
    {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '400',
    },
    moviesButtons:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '70px',
        marginLeft: '-2%'
    },
    commonButton:
    {
        fontSize: '35px',
        color: '#ffffff',
        fontWeight: 'bolder',
        "&:hover":
        {
            color: '#E50914',
        }
    },
    play:
    {
        fontSize: '22px',
        fontWeight: 'bolder',
        color: '#ffffff',
    },
    more:
    {
        backgroundColor: '#141414',
    }
    
  
  }));


  export {useStyle};