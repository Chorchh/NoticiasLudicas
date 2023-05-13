import React, { useState } from 'react'
import { FavoriteContainer, FavoriteNews, HeaderContainer, Logo, Navbar, NavbarList, NavbarUser } from './HeaderStyles'
import logo from "../../assets/logo.png";
import {FaHeart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {GrTrash} from "react-icons/gr"
import { deleteFav } from '../../redux/categories/CategoriesSlice';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [saveFavorites, setSaveFavorites] = useState(false)
  const favorites = useSelector(state => state.categories.favs)
  const toPage = page => () => {
    setPage(page)
  }

  const handleBtnFav = () => {
    setSaveFavorites(!saveFavorites)
  }

  const dispatch = useDispatch();

  return (
    <>
        <HeaderContainer>
            <Logo src={logo}/>
            <GiHamburgerMenu 
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="MenuIcon"
            />
            <Navbar isOpenMenu= {isOpenMenu}>
                <NavbarList>
                    <Link
                    to="/"
                    onClick={toPage("home")}
                    className="NavbarItem"                 
                    >Inicio</Link>
                    <Link 
                    to="/noticias"
                    onClick={toPage("noticias")}
                    className="NavbarItem"
                    >Noticias</Link>
                    <Link
                    to="/favoritos"
                    onClick={toPage("favoritos")}
                    className="NavbarItem"
                    >Favoritos</Link>
                </NavbarList>
            </Navbar>
            <NavbarUser>
              <FaHeart
            onClick={() => handleBtnFav()} 
              className="BtnFav"/>

              </NavbarUser>
              <FavoriteContainer saveFavorites={saveFavorites}>
              {favorites.map((fav) => {
                    return(
                      <FavoriteNews key={fav.id}>
                        <img src={fav.imagen} alt={fav.titulo} className="FavImg"/>
                        <p className="FavTitle">{fav.titulo}</p>
                        <GrTrash data-id={fav.id} className="FavTrash" onClick={(e) => dispatch(deleteFav(e.target.dataset.id))}/>
                      </FavoriteNews>
                    )
                  })}
              </FavoriteContainer>
        </HeaderContainer>
    </>
  )
}

export default Header