import React,{useState,useEffect} from 'react';
import Box from '@material-ui/core/Box';
import CardTop5 from './CardTop5';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,EffectCreative,Keyboard,Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';


     const TopFive = () => {

     const useStyle = makeStyles((theme)=>({

      box:
      {
        marginBottom: '50px'
      }

     }));

     const classes = useStyle();

     const [topFive,setTopFive] = useState([]);

     useEffect(()=>{
      async function getData(){
          const res = await axios.get('https://deeppatel3399.github.io/Marvel-Flix-API/db.json');
          setTopFive(res.data.TOPFIVE[0].data);

      }
      getData();
      },[]);
 
  return (
    <>
      
    <Box className={classes.box}>
        
      <Swiper
      modules={[Navigation, Pagination,EffectCreative,Keyboard,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      rewind = {true}
      grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      keyboard = {{enabled: true}}
      autoplay={{
          delay: 2500,
        }}
      navigation={{ clickable: true }}
      pagination={{ clickable: true , dynamicBullets: true, }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {
        topFive.map( data => (

          <SwiperSlide key={data.id}>
              <CardTop5 
                thumbnail = {data.mainposter}
                details = {data.overview}
                TitleLogo = {data.titlelogo}
                title = {data.title}
              />
          </SwiperSlide>
      ))}

      </Swiper>
        
    </Box>

    </>
  )
}

export default TopFive;