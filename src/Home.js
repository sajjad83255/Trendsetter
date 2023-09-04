import React from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import FeatureProduct from './Components/FeatureProduct';

const Home = () => {
  const data ={
    name: "TreandSetters Store",
  };

  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct/>
      <Services />
      <Trusted/>
    </>
  )
};


export default Home;
