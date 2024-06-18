import React, { useEffect, useState } from 'react';
import './Slider.css';
import axios from 'axios';
import { API_KEY, baseUrl,imageurl } from '../../constants/constants';
import YouTube from 'react-youtube';

function Slider(props) {
  const [slider,setSlider] = useState([])
  const [vedioid,setVedioid] =useState([])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log("res2", response.data.results);
      setSlider(response.data.results);
    })
  },[])
  const movieVedio = (obj)=>{  
    axios.get(`${baseUrl}movie/${obj}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results[0].key){setVedioid(res.data.results[0].key)}
      else{console.log("ArrayEmpty")}
    })
  }
  return (
    <div className='rows'>
        <h4 className='titles'>{props.title}</h4>
        <div className='row-images'>
          {slider.map((obj,index)=>
            <img  key={index} onClick={()=>{movieVedio(obj.id)}} className= {props.isSmall ? 'smallposter' : 'poster'}  src={imageurl+obj.backdrop_path}/>
          )}         
    </div>
    <div className='youtube'>{vedioid && <YouTube videoId={vedioid} opts={opts} />}</div>
</div>
  )
  
}

export default Slider;