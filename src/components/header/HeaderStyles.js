import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  background: #000000;

  .MenuIcon {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 50px 0 30px;

    .MenuIcon {
      display: block;
      width: 30%;
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100px;
    transform: translate(-50%);
    height: ${(props) => (props.isOpenMenu ? "100vh" : "0")};
    left: 50%;
    visibility: ${(props) => (props.isOpenMenu ? "visible" : "hidden")};
    opacity: ${(props) => (props.isOpenMenu ? "1" : "0")};
    transition: all 0.3s ease-in-out;
    background-color: #000000;
    width: 100%;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
  }
`;

export const NavbarItem = styled.li`
  cursor: pointer;
  font-size: 20px;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #ffffff;
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NavbarUser = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  gap: 20px;
`;
