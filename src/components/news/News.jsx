import React, { useEffect, useState } from 'react'
import { CategorieBtn, CategorieBtnContainer, NewsCard, NewsContainer, NewsImage, NewsSection, NewsText, NewsTitle } from './NewsStyles'
import { getNews } from '../../redux/categories/CategoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Corazon from "../../../src/assets/red-heart_2764-fe0f.png"

const News = () => {
    const [isSelected, setIsSelected] = useState(false)
    const dispatch = useDispatch();
    const selectedNews = useSelector(state => state.categories.news)
    useEffect(() => {
        dispatch(getNews())
    },[])

    const handleBtn = (e) => {
        localStorage.setItem("categorie", e.target.dataset.categorie)
        const category = localStorage.getItem("categorie")
        dispatch(getNews(e.target.dataset.categorie))
        setIsSelected(true)

        category === e.target.dataset.categorie ? setIsSelected(true) : setIsSelected(false)
        console.log(category)
        console.log(e.target.dataset.categorie)
    }

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

  return (
    <>
    <NewsSection>
        <CategorieBtnContainer>
            <CategorieBtn 
            data-categorie="juegos de mesa"
            onClick={(e) => 
            handleBtn(e)}
            isSelected={isSelected}
            >Juegos de mesa</CategorieBtn>
            <CategorieBtn
            data-categorie="juegos de rol"
            onClick={(e) => 
            handleBtn(e)}
            isSelected={isSelected}
            >Juegos de rol</CategorieBtn>
            <CategorieBtn
            data-categorie="noticias nacionales"
            onClick={(e) => 
            handleBtn(e)}
            isSelected={isSelected}
            >Noticias nacionales</CategorieBtn>
            <CategorieBtn
            data-categorie="noticias internacionales"
            onClick={(e) => 
            handleBtn(e)}
            isSelected={isSelected}
            >Noticias internacionales</CategorieBtn>
        </CategorieBtnContainer>
        <NewsContainer>
            {renderNews()}
        </NewsContainer>
    </NewsSection>
    </>
  )
}

export default News