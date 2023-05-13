import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NewsCard, NewsContainer, NewsImage, NewsText, NewsTitle } from "../components/news/NewsStyles"
import { handleFav } from "../redux/categories/CategoriesSlice";

const Favoritas = () => {
const favorites = useSelector(state => state.categories.favs)

const renderFavs = () => {
    return favorites.map( (favs) => {
      console.log(handleFav)
         return(
             <NewsCard key={favs.id}>
                 <NewsImage src={favs.imagen}/>
                 <NewsTitle>{favs.titulo}</NewsTitle>
                 <NewsText>{favs.texto}</NewsText>
             </NewsCard>
         )
        }
    )}
return (<NewsContainer>{renderFavs()}</NewsContainer>)
}


export default Favoritas