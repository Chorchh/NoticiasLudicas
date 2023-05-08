import React, { useState } from 'react'
import { HeaderContainer, Logo, Navbar, NavbarItem, NavbarList, NavbarUser } from './HeaderStyles'
import logo from "../../assets/logo.png";
import {FaSearch, FaHeart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toPage = page => () => {
    setPage(page)
  }

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
                    to="/novedades"
                    onClick={toPage("novedades")}
                    className="NavbarItem"
                    >Novedades</Link>
                    <Link
                    to="/favoritos"
                    onClick={toPage("favoritos")}
                    className="NavbarItem"
                    >Favoritos</Link>
                </NavbarList>
            </Navbar>
            <NavbarUser><FaSearch/><FaHeart to="/favoritos" onClick={toPage("favoritos")}/></NavbarUser>
        </HeaderContainer>
    </>
  )
}

export default Header