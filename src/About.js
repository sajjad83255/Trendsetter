import React, { useContext } from 'react'
import styled from 'styled-components'
import HeroSection from './Components/HeroSection';
import {useProductContext} from './Context/productContext';

const  About = () => {
  //const {myName} = useProductContext();

  const data = {
    name: "TreandSetters E-Commerce",
  };
  return <>
      {/* {myName} */}
      <HeroSection myData={data}/>
    </>
};


export default About;
