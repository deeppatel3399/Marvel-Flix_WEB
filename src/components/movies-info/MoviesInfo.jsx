import React from 'react';
import { useStyle } from '../movies-info/StyleMoviesInfo';
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
import MoreCard from './MoreCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper';
import 'swiper/css/navigation';
import Footer from '../Footer/Footer';



const MoviesInfo = () => {

 const classes = useStyle();
 
 const {movietitle,movieid} = useParams();

 const id = movieid-1;

 const[moviepath,setMoviePath] = useState([]);

 

 useEffect(()=>{
    async function getmoviedata(){
        const res = await axios.get('https://deeppatel3399.github.io/Marvel-Flix-API/db.json');
        setMoviePath(res.data.MOVIESLIST[0].data[id]);
        }
     getmoviedata();
 },[]);
    

  return (
      <>
           <Navbar/>
           
                <img className={classes.image} src = {moviepath.mainposter} alt={moviepath.title}/>
                 

                 <Box className={classes.left}>
                        <img className={classes.titlelogo} src={moviepath.titlelogo} alt='Movie-Title'/>
                        <Typography className={classes.movietitle}>{moviepath.title}</Typography>
                        <Typography className={classes.movieLengthDate}>{moviepath.length} &#8226; {moviepath.releaseDate} </Typography>
                        <Typography className={classes.movietitleGeners}>{moviepath.generes}</Typography>
                        <Typography className={classes.movietitleGeners}>{moviepath.rating}</Typography>
                        <Typography className={classes.movietitleOverview}>{moviepath.overview}</Typography>

                        <Box className={classes.moviesButtons}>
                            
                               <IconButton><PlayArrowIcon className={classes.commonButton}/><Typography className={classes.play}>Play Now</Typography></IconButton>
                            
                            
                               <Tooltip title='My List'><IconButton><PlaylistAddIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='share'><IconButton><ShareIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='Like'><IconButton><ThumbUpOutlinedIcon className={classes.commonButton}/></IconButton></Tooltip>
                               <Tooltip title='Dislike'><IconButton><ThumbDownAltOutlinedIcon className={classes.commonButton}/></IconButton></Tooltip>
                            
                        </Box>
                      
                   </Box>

                   <Box className={classes.amj}>
                   <Box className={classes.heading}><Typography className={classes.title}>Trailer / Teaser |</Typography><Typography className={classes.getname}>&nbsp;{moviepath.title}</Typography></Box>

                   <Swiper
                       modules={[Navigation]}
                       spaceBetween={1}
                       slidesPerView={2}
                       grabCursor={true}
                       navigation={{ clickable: true }}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       >
                            <SwiperSlide>
                                  <iframe src="https://drive.google.com/file/d/16TW6rHrp35-T18rUxmAuOQEspRwgLLfy/preview" width="620" height="350" allow="autoplay"></iframe>
                            </SwiperSlide>

                            <SwiperSlide>
                                  <iframe src="https://drive.google.com/file/d/16TW6rHrp35-T18rUxmAuOQEspRwgLLfy/preview" width="620" height="350" allow="autoplay"></iframe>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                  <iframe src="https://drive.google.com/file/d/16TW6rHrp35-T18rUxmAuOQEspRwgLLfy/preview" width="620" height="350" allow="autoplay"></iframe>
                            </SwiperSlide>

                            <SwiperSlide>
                                  <iframe src="https://drive.google.com/file/d/16TW6rHrp35-T18rUxmAuOQEspRwgLLfy/preview" width="620" height="350" allow="autoplay"></iframe>
                            </SwiperSlide>

                       </Swiper>

                       <Typography className={classes.title}>More Like This</Typography>


                   </Box>


                   

 

                        {/* <Box className={classes.cards}>

                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />

                        </Box>

                        <Box className={classes.cards}>

                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />

                        </Box>

                        
                        <Box className={classes.cards}>

                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />
                             <MoreCard
                                 src = {moviepath.poster}
                                 alt = {moviepath.title}
                             />

                        </Box>
                        */}
                   

                  

                  <Footer/>
 


      </>
  )
}

export default MoviesInfo;