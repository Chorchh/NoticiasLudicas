import React, { useState } from 'react'
import { HeaderContainer, Logo, Navbar, NavbarItem, NavbarList, NavbarUser } from './HeaderStyles'
import logo from "../../assets/logo.png";
import {FaSearch, FaHeart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

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
                    <NavbarItem>Inicio</NavbarItem>
                    <NavbarItem>Noticias</NavbarItem>
                    <NavbarItem>Novedades</NavbarItem>
                    <NavbarItem>Favoritos</NavbarItem>
                </NavbarList>
            </Navbar>
            <NavbarUser><FaSearch/><FaHeart/></NavbarUser>
        </HeaderContainer>
    </>
  )
}

export default Header