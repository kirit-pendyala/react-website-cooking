import React from 'react'
import '../App.css'
import {Button} from './Button';
import './MenuSection.css';
function MenuSection() {
  return (
    <div className='menu-container'>
      <video src="/videos/video-2.mp4" autoplay loop muted/>
      <h1> The Brown Boy Cooks </h1>
      <div className="hero-btns"> </div>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
      Lets begin
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      >
      Watch Videos <i className='far fa-play-circle'/>
      </Button>
    </div>
  )
}

export default MenuSection;
