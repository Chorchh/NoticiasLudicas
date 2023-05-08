import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Corazon from '../assets/red-heart_2764-fe0f.png'
import { getNews } from '../redux/categories/CategoriesSlice'
import { NewsCard, NewsImage, NewsText, NewsTitle } from '../components/news/NewsStyles'
import { NewsContainer } from '../components/news/NewsStyles'

const Noticias = () => {
    const selectedNews = useSelector(state => state.categories.news)
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getNews())} ,[])
    const renderNews = () => {
        return selectedNews.map( (news) => {
             return(
                 <NewsCard key={news.id}>
                     <img src={Corazon} className="IconFav"/>
                     <NewsImage src={news.imagen}/>
                     <NewsTitle>{news.titulo}</NewsTitle>
                     <NewsText>{news.texto}</NewsText>
                 </NewsCard>
             )
         }
        )}
  return (<NewsContainer>{renderNews()}</NewsContainer>)
}

export default Noticias