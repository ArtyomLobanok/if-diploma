import styled, {keyframes} from "styled-components";

const collapseEffect = keyframes`
  from {
    transform: translateY(-150%);
    
  }
  to {
    transform: translateY(0);
  }
`

const fadeEffect = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 376px) {
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
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    width: 23px;
    height: 17px;
    fill: #FFFFFF;
  }
`

export const NavMobButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavButtonSearch = styled.button`
  background-color: initial;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 12px;
  padding: 0;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19px;
    height: 19px;
    fill: #FFFFFF;
  }
`

export const NavButtonBasket = styled(NavButtonSearch)`
  transform: translate3d(0, 5%, 0);
`

export const NavButtonFavorites = styled(NavButtonSearch)`
  transform: translate3d(0, 10%, 0);
  margin-right: 0;
`

export const LogotypeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '269px'};
  height: ${props => props.height || '36px'};
  @media (max-width: 376px) {
    position: absolute;
    top: 0;
    right: 35%;
    width: 106px;
    height: 22px;
  }
`

export const LogotypeIconHamburger = styled(LogotypeIcon)`
  position: initial;
  width: 140px;
`

export const SearchIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  margin-right: 4px;
  cursor: pointer;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  left: 8.75rem;
  bottom: 122px;
  @media (max-width: 376px) {
    position: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const HeaderTitle = styled.h1`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
  @media (max-width: 376px) {
    white-space: pre-line;
    text-align: center;
    font-size: 28px;
    color: #000F08;
  }
`
export const HeaderSubTitle = styled.h2`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  white-space: pre-line;
  @media (max-width: 376px) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 27px;
    color: #000F08;
  }
`

export const HeaderMobileIntroWrapper = styled.section`
  display: block;
  padding-top: 40px;
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

  @media (max-width: 376px) {
    color: ${props => props.color || "#000F08"};
    border-color: ${props => props.color || "#000F08"};
    font-size: 12px;
    padding: 11px 38px;
    &:hover {
      background-color: ${props => props.color || "#000F08"};
      color: ${props => props.color || "#FFFFFF"};
    }
  }
`

export const NavigationHamburgerShadowBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(49, 49, 49, 0.55);
  transition: 0.5s ease-out;
  animation: ${fadeEffect} 1s linear;
`

export const NavigationHamburgerListWrapper = styled.div`
  padding-top: 14px;
  background: #FFFFFF;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${collapseEffect} 1s forwards;
`
export const NavigationHamburgerList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  font-size: 28px;
  li {
    cursor: pointer;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: #000F08;
      text-decoration: none;
      
    }
  }
`

export const NavigationHamburgerListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 54px;
`
export const NavigationHamburgerClose = styled.svg`
  cursor: pointer;
  width: 24px;
  height: 24px;
`
