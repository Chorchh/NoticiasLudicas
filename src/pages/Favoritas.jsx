import React from 'react'
import { FavoriteNews } from '../components/header/HeaderStyles'

const Favoritas = () => {
  return (
    <FavoriteContainer saveFavorites={saveFavorites}>
    {favorites.map((fav) => {
          return(
            <FavoriteNews key={fav.id}>
              <p>{fav.titulo}</p>
            </FavoriteNews>
          )
        })}
    </FavoriteContainer>
  )
}

export default Favoritas