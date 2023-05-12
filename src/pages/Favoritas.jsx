import React from 'react'
import { FavoriteContainer, FavoriteNews } from '../components/header/HeaderStyles'


const Favoritas = () => {
  const [saveFavorites, setSaveFavorites] = useState(false)
  const favorites = useSelector(state => state.categories.favs)
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