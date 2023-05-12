import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 50px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  background: #000000;

  .MenuIcon {
    display: none;
  }

  @media (max-width: 992px) {
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

  @media (max-width: 992px) {
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

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 40px;
  }

  cursor: pointer;
  font-size: 20px;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NavbarUser = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  gap: 20px;
`;

export const FavoriteContainer = styled.ul`
  display: ${(props) => (props.saveFavorites ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 100px;
  right: 0;
  background-color: #000000;
  height: ${(props) => (props.saveFavorites ? "100vh" : "0")};
  width: ${(props) => (props.saveFavorites ? "50vw" : "0")};
  visibility: ${(props) => (props.saveFavorites ? "visible" : "hidden")};
  opacity: ${(props) => (props.saveFavorites ? "0.8" : "0")};
  gap: 20px;
`;

export const FavoriteNews = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: space-between;
  font-size: 16px;
  padding: 10px;
  gap: 30px;
  background-color: grey;
  cursor: pointer;

  .FavImg {
    height: 100px;
    border-radius: 10px;
    width: 150px;
  }

  .FavTitle {
    color: #000000;
  }
`;
