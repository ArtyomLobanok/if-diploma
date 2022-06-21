import styled from "styled-components";
import hamburger from "../../assets/img/375/hamburger-menu-icon.svg"
import search from "../../assets/img/375/search-icon.svg"
import basket from "../../assets/img/375/shopping-cart-icon.svg"
import wishlist from "../../assets/img/375/wishlist-icon.svg"

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 375px) {
    position: relative;
  }

  ul {
    color: ${props => props.color || "#FFFFFF"};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 4px;
    font-size: 16px;

    li {
      display: flex;
      align-items: center;
      margin-right: 50px;
      cursor: pointer;
      position: relative;

      span {
        margin-left: 6px;
      }

      &:hover:after {
        opacity: 1;
        transition: 0.5s ease;
      }

      &:after {
        background-color: ${props => props.color || "#FFFFFF"};
        border-color: ${props => props.color || "#FFFFFF"};
        content: "";
        display: block;
        width: 100%;
        bottom: -5px;
        position: absolute;
        border-width: 1px;
        border-style: solid;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.1s ease;
      }

      &:last-child {
        margin-right: 0;
      }

      a {
        color: ${props => props.color || "#FFFFFF"};
        text-decoration: none;
      }
    }
  }
`
export const NavBurgerMenu = styled.div`
  display: block;
`
export const NavBurgerBtn = styled.button`
  background-color: initial;
  background-image: url(${hamburger});
  width: 18px;
  height: 16px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const NavMobButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-right: 12px;
  }

  Link {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const NavButtonSearch = styled.button`
  background-color: initial;
  background-image: url(${search});
  width: 18px;
  height: 18px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const NavButtonBasket = styled(NavButtonSearch)`
  background-image: url(${basket});
  transform: translate3d(0, 5%, 0);
`

export const NavButtonFavorites = styled(NavButtonSearch)`
  background-image: url(${wishlist});
  transform: translate3d(0, 10%, 0);
`


export const LogotypeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '269px'};
  height: ${props => props.height || '36px'};
  @media (max-width: 375px) {
    position: absolute;
    top: 0;
    right: 35%;
    width: 106px;
    height: 22px;
  }
`
export const SearchIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  margin-right: 4px;
`

export const HeaderTitle = styled.h1`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
`
export const HeaderSubTitle = styled.h2`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
`
export const HeaderButton = styled.button`
  color: ${props => props.color || "#FFFFFF"};
  background-color: ${props => props.color || "initial"};
  border-color: ${props => props.color || "#FFFFFF"};
  border-width: 1px;
  border-style: solid;
  padding: 22px 55px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color || "#FFFFFF"};
    color: ${props => props.color || "#333333"};
    outline: none;
    transition: 0.5s ease;
  }
`