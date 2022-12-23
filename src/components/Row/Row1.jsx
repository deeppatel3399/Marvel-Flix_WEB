import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {useEffect,useState } from 'react';
import { Box, IconButton, Typography} from '@material-ui/core';
import Skeleton from '@mui/material/Skeleton';
import { useStyle } from './RowStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,FreeMode} from 'swiper';
import 'swiper/css/navigation';
import Tooltip from '@mui/material/Tooltip';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';



const Row1 = () => {

  const classes = useStyle();

  const [path1,setPath1] = useState([]);

  const [loading,setLoading] = useState(false);



  useEffect(() =>{
    async function getdata(){
        const res = await axios.get('https://deeppatel3399.github.io/Marvel-Flix-API/db.json');
        setPath1(res.data.MARVELSTUDIOSORIGINALSMOVIES[0].data);
        setLoading(true);
    }
     getdata();
   });

  return (
    <>

      <Box className={classes.row}>

        <Typography className={classes.title}>MARVEL STUDIOS ORIGINALS MOVIES</Typography>

         <Box className={classes.rowposters}>
             
               <Swiper
                 modules={[Navigation,FreeMode]}
                 spaceBetween={20}
                 slidesPerView={5.5}
                 grabCursor={true}
                 freeMode = {true}
                 breakpoints={{
                     375: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                          },
                     425: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                          },
                     768: {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                          },
                     1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 20,
                          },
                     1440: {
                            slidesPerView: 5.5,
                            spaceBetween: 20,
                          },
                     2560: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                           },
                 }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                >
                 {
                    path1.map(data=>(
                      
                      <SwiperSlide>
                          {loading ? (
                           <Box className={classes.container}>

                           
                           <img className={classes.thumbnails} key={data.id} src={data.poster} alt={data.title}/>

                           <Box className={classes.name}><Typography className={classes.postername}>{data.title}</Typography></Box>

                           <Box className={classes.buttons}>

                               <Box className={classes.btnrow}>
                                  <Tooltip title="Play"><IconButton><PlayArrowIcon className={classes.btn}/></IconButton></Tooltip>
                                  <Tooltip title="My List"><IconButton><PlaylistAddIcon className={classes.btn}/></IconButton></Tooltip>
                                  <NavLink exact to={`home/movies-info/${data.title}/${data.id}`}><Tooltip title="Info"><IconButton><InfoOutlinedIcon className={classes.btn}/></IconButton></Tooltip></NavLink>
                               </Box>

                           </Box>

                           </Box>
                           ) : <Skeleton variant="rectangular" animation="wave" width="100%" height="100%"/>}
                      </SwiperSlide>
                 ))
                 }
               </Swiper>

             </Box>
          </Box>
    </>
  )
}

export default Row1;