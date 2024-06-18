import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../../axios'
import { API_KEY,baseUrl,imageurl } from '../../constants/constants';
import axios from 'axios';

function Banner() {
  const [movie,setMovie] = useState('')
  useEffect(()=>{
    axios.get(`${baseUrl}trending/all/day?api_key=${API_KEY}`).then((resp)=>{
    console.log("responseszs: " , `${baseUrl}trending/all/day?api_key=${API_KEY}`);
      setMovie(resp.data.results.sort(function (a, b) {return 0.5 - Math.random()})[0])
    })
  }, []);
  return (
    <div className='banner' style={{backgroundImage : `url(${movie ? imageurl+movie.backdrop_path : ""})`}}>
      <h1 className='title'>{ movie ? movie.title ? movie.title : movie.name : "" }</h1>
      <div className='content'>
      <button>Play</button>
      <button>My List</button>
      </div>
      <h4 className='subtitle'>{movie ? movie.overview : ""}</h4>
      <div className='fade-bottom'></div>
      {/* <div className='subtitle'>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className='content'>
      <input className='text-box' type="email" placeholder='Email Address' />
      <button className='start-btn'>Get Started</button>
      </div>
    // <div className='fade-bottom'></div> */}
    </div>
  )
}

export default Banner
