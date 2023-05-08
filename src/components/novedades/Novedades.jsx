import React from 'react'
import { GameCard, GameData, GameImage, GameTitle, GamesContainer, NovedadesContainer, NovedadesSection, NovedadesTitle } from './NovedadesStles'

const Novedades = () => {
  return (
    <NovedadesSection>
        <NovedadesContainer>
            <NovedadesTitle></NovedadesTitle>
            <GamesContainer>
            <GameCard>
                <GameTitle></GameTitle>
                <GameImage/>
                <GameData></GameData>
            </GameCard>
            </GamesContainer>
        </NovedadesContainer>
    </NovedadesSection>
  )
}

export default Novedades