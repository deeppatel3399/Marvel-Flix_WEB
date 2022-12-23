import React from 'react';
import { useStyle } from '../series-info/StyleSeriesInfo';
import {useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';



const SeriesInfo = () => {

 const classes = useStyle();
 
 const {seriesid} = useParams();

 const id = seriesid-1;

 const[seriespath,setSeriesPath] = useState([]);

 useEffect(()=>{
    async function getseriesdata(){
        const res = await axios.get('https://deeppatel3399.github.io/Marvel-Flix-API/db.json');
        setSeriesPath(res.data.SERIESLIST[0].data[id]);
    }
     getseriesdata();
 });
    

  return (
      <>
           <Navbar/>
           <Box className={classes.moviesposter}>
               <Box className={classes.content}>

                 <img className={classes.image} src = {seriespath.mainposter} alt={seriespath.title}/>
                 

                 <Box className={classes.left}>
                        <img className={classes.titlelogo} src={seriespath.titlelogo} alt='Movie-Title'/>
                        <Typography className={classes.movietitle}>{seriespath.title}</Typography>
                        <Typography className={classes.movieLengthDate}>{seriespath.releaseDate} </Typography>
                        <Typography className={classes.movietitleGeners}>{seriespath.generes}</Typography>
                        <Typography className={classes.movietitleGeners}>{seriespath.rating}</Typography>
                        <Typography className={classes.movietitleOverview}>{seriespath.overview}</Typography>

                        <Box className={classes.moviesButtons}>
                            
                               <IconButton><PlayArrowIcon className={classes.commonButton}/><Typography className={classes.play}>Play Now</Typography></IconButton>
                            
                            
                               <Tooltip title='My List'><IconButton><PlaylistAddIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='share'><IconButton><ShareIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='Like'><IconButton><ThumbUpOutlinedIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='Dislike'><IconButton><ThumbDownAltOutlinedIcon className={classes.commonButton}/></IconButton></Tooltip>
                            
                        </Box>
                      
                   </Box>
 
               </Box>

           </Box>

           <Box className={classes.more}>
                  
           </Box>
      </>
  )
}

export default SeriesInfo;