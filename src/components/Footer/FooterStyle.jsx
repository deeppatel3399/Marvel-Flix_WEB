import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme)=>({

container:
{
    backgroundColor: '#1d1d1d',
    padding: '70px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
},
hading:
{
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px'
},
iconsrow:
{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '50%'
},
icon:
{
    color: '#ffffff',
    fontSize: "20px",
    fontWeight: 'bolder',
    "&:hover":
    {
        color: 'grey'
    }
},
extrapart:
{
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '50%',
},
text:
{
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bolder',
    "&:hover":
    {
        color: 'grey'
    }
},
donateicon:
{
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bolder',
    "&:hover":
    {
        color: "#E50914"
    }
}
    

}));


export {useStyle};