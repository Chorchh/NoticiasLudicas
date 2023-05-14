import React from "react"
import { useSelector } from "react-redux"
import { NewsCard, NewsContainer, NewsImage, NewsText, NewsTitle } from "../components/news/NewsStyles"
import Favs from "../components/favs/Favs";

const Favoritas = () => {
const favorites = useSelector(state => state.categories.favs)

const renderFavs = () => {
    if (favorites.length) {
    return favorites.map( (favs) => {
         return(
             <NewsCard key={favs.id}>
                 <NewsImage src={favs.imagen}/>
                 <NewsTitle>{favs.titulo}</NewsTitle>
                 <NewsText>{favs.texto}</NewsText>
             </NewsCard>
         )
        }
    )} else {
        return (<Favs/>)
    }
}
return (<NewsContainer>{renderFavs()}</NewsContainer>)
}


export default Favoritas