import {  makeStyles } from '@material-ui/core';


const useStyle = makeStyles ((theme) => ({

    image:
    {
        width: '100%',
        maxHeight: '100vh',
        ObjectFit: 'cover',
        position: 'relative'
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
        marginTop: '100px',
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
    amj:
    {
        padding: '30px 100px 0px 100px',
        backgroundColor: '#1d1d1d'
    },
    title:
    {
        color: '#ffffff',
        fontSize: '25px',
        fontWeight: 'bolder',
    },
    heading:
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '30px'
    },
    getname:
    {
        color: '#cfcfcf',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    cards:
    {
        display: 'flex',
        flexDirection: 'row',
    }
    
  }));


  export {useStyle};