import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
  
    breakpoints: 
    {
        values: {
          xs: 0,
          sm: 425,
          md: 768,
          lg: 1024,
          xl: 1440,
          xxl: 2560,
    }},

    row:
    {
        padding: '0px 50px'

    }, 
    rowposters:
    {
        padding: '20px',
    },
    thumbnails: () => (
    {
        opacity: '1',
        display: 'block',
        backfaceVisibility: 'hidden',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '100%',
        marginRight: '20px',
        transition: 'transform 350ms',
    }),
    title:
    {
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: 'bolder'
    },
    container:
    {
        width: '100%',
        position: 'relative',
        "&:hover": 
        {
          "& $thumbnails": 
          {
            opacity: '0.3',
            transform: 'scale(1.1)',
          },
          "& $buttons": 
          {
            opacity: '1',
            top: '90%',
          },
          "& $name":
          {
              opacity: '1',
          }
        },
    },

    buttons: () => (
    {
        transition: '250ms ease-in-out',
        opacity: '0',
        position: 'absolute',
        top: '120%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }),
    btn:
    {
        color: '#ffffff',
        fontSize: '40px',
        fontWeight: 'bolder',
        "&:hover":
        {
            color: '#E50914'
        }
        // margin: '0px 10px 0px 10px',
        // [theme.breakpoints.between('md','lg')]:
        // {
        //     fontSize: '30px',
        // },
        // [theme.breakpoints.between('xs','sm')]:
        // {
        //     fontSize: '20px',
        //     margin: '0px',
        // }
    },
    btnrow:
    {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: "100%",
    },
    name:()=>(
    {
        transition: '0.5s ease-in-out',
        opacity: '0',
        position: 'absolute',
        top: '15%',
        left: '50%',
        width: '100%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }),
    postername:
    {
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '500',
    }
}));



export {useStyle};




  

  

  

  
