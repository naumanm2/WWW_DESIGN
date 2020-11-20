import React, {useEffect, useState, useRef} from 'react'

import { AboutContainer, AboutSection, TopLine, InfoText } from './AboutUs.styles'

import logo1 from './a1.png'
import logo2 from './a2.png'
import logo3 from './a3.png'

const AboutUs = (props) => {

  //custom hook for the interval
  function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


  const images = [
    <img src={logo1} alt="aalto-logo" width="450"></img>,
    <img src={logo2} alt="aalto-logo" width="450"></img>,
    <img src={logo3} alt="aalto-logo" width="450"></img>
  ]

  const [image, setImage] = useState(images[0])
  const [slide, setSlide] = useState(0)

  //change image every set interval
  useInterval(() => {
    setSlide((slide+1)%3)
    setImage(images[slide])
  }, 3000)



  return (
    <div>
    <AboutContainer>
      <AboutSection>
        <TopLine>
          About us
          </TopLine>
          <InfoText>
            Everyone should be able to quickly skim through refreshing cultural options of their city.
            Independent galleries are a gem of their own but can also sometimes be hard to find. Explore this map
            the way you want and be the lucky founder of these gems.
          </InfoText>
          <InfoText>
            Taidegalleriat is a service that allows you to explore
            museums and their offerings without hassle. Filter options, play around the map, or just
            enjoy the vibe of the application.
          </InfoText>
          <InfoText>
            This service was created by two students from Aalto University in Finland.
          </InfoText>
          {image}



      </AboutSection>

    </AboutContainer>
  </div>
  )
}

export default AboutUs
