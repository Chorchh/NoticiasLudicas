import React from 'react'
import HeroImg from "../../assets/hero-img.jpg"
import { HeroSection, HeroTitle, HeroContainer, HeroImage, HeroSubtitle } from './HeroStyles'

const Hero = () => {
  return (
    <>
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Noticias Lúdicas</HeroTitle>
        <HeroSubtitle>Enterate de las últimas noticias, novedades y lanzamientos del mundo boardgamero</HeroSubtitle>
      </HeroContainer>
      <HeroImage src={HeroImg}/>
      </HeroSection>
    </>
  )
}

export default Hero