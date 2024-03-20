import React from 'react'
import { slides } from '../Modules/slides'
import { SlideContext } from '../Components/SlideContext';
import { useContext} from 'react';

function Slider({slide, imageno, nox, slideUpdate, toggle, myslide, slide_width}) {

  const mypics = useContext(SlideContext)
  // Calculate the total number of slides
   const totalSlides = slides.length;

  // Calculate the index of the currently displayed slide
  const currentIndex = imageno//(imageno % (totalSlides+5));

  const newslide = mypics.map((pic, index) => ({
    ...pic,
    id: index + 1
  }));
  
  console.log(newslide)
    
  return (
    
    <div
      className="slider_container">
      
      
      {newslide.map((slide, index) => (
        <div key={slide.id} id={slide.id} className="slide_item" onTransitionEnd={(e)=>{slideUpdate(e, currentIndex)}} 
        style={((toggle===false) && (index>=currentIndex-5))?{
          transform: `translateX(${(currentIndex) * -100}%)`, // Translate based on currentIndex
          transition: 'transform 1.5s ease',  // Add transition for smoother animation
         }:
        {transform: `translateX(${currentIndex * 100}%)`,// Translate based on currentIndex
        transition: 'transform 1.5s ease', // Add transition for smoother animation
      }}>
          {/* <h2>{slide_width}</h2> */}
          {/* <h1>{newslide.length}</h1> */}
          <img key={index} id={index+1} className="slide_img" 
          src={slide.pic} alt={`Slide ${index + 1}`} />
          <h1>{mypics.length}</h1>
          {console.log(mypics)}
        </div>
        
      ))}

      
    </div>
  )
}

export default Slider