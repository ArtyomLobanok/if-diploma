import styled, {keyframes} from "styled-components";
import {StyledLinkCard} from "./General";

const collapseEffect = keyframes`
  from {
    transform: translateX(-150%);
    
  }
  to {
    transform: translateX(0);
  }
`

export const CardWrapper = styled.div`
  width: ${props => props.width || "initial"};
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 0;

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(16),
  &:nth-child(20) {
    margin-right: 0;
  }

  &:hover {
    div {
      opacity: 1;
    }

    img {
      opacity: 0.7;
    }
  }

  @media (max-width: 376px) {
    animation: ${collapseEffect} 0.5s forwards;
    transition: all 0.5s ease-out;
    margin: 0 0 16px 0;
  }
`

export const SaleLinkCard = styled(StyledLinkCard)`
  @media (max-width: 376px) {
    margin-right: 0;
  }
`

export const CardSaleWrapper = styled(CardWrapper)`
  @media (max-width: 376px) {
    margin-bottom: 0;
  }
`
export const CardContentWrapper = styled.div`
  position: relative;
`
export const CardImgWrapper = styled.div`
  background: ${props => props.background || "#000F08"};

  box-shadow: rgba(0, 15, 8, 0.6);
  position: relative;
  margin-bottom: 24px;

  img {
    width: ${props => props.width || "100%"};
    display: block;
    max-width: 395px;
    max-height: 533px;
    height: auto;
    transition: opacity 0.3s linear;
    object-fit: cover;
  }

  @media (max-width: 376px) {
    margin: 0 12px 8px 12px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
export const FullPriceText = styled.p`
  color: ${props => props.color || "#000F08"};
  text-decoration: ${props => props.decoration || "line-through"};
  font-size: 24px;
  margin-right: 16px;
  @media (max-width: 376px) {
    font-size: 18px;
    z-index: 1000;
  }
`
export const SalePriceText = styled.p`
  color: ${props => props.color || "#D7302D"};
  font-size: 26px;
  font-weight: 700;
  @media (max-width: 376px) {
    font-size: 20px;
  }
`
export const CardIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  cursor: pointer;
  z-index: 1;

  button {
    cursor: pointer;
    position: relative;
    border: none;
    outline: none;
    background: initial;

    img {
      width: 42px;
      height: 38px;
    }

    @media (max-width: 376px) {
      img {
        width: 30px;
        height: 28px;
      }
    }
  }
`

export const SaleCardIconWrapper = styled(CardIconWrapper)`
  @media (max-width: 376px) {
    margin: 6px 12px 6px 6px;
    button {
      img {
        width: 24px;
        height: 21px;
      }
    }
  }
`

export const CardBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1000;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translate3d(0, -50%, 0);
  transition: opacity 0.1s linear;
`

export const SalePercentTextWrapper = styled.div`
  color: ${props => props.color || "#FFFFFF"};
  position: absolute;
  bottom: 0;
  display: flex;
  transform: translate3d(0, -72%, 0);
  font-size: 18px;
  z-index: 1;

  span {
    background-color: ${props => props.color || "#D7302D"};
    padding: 6px 10px;
  }

  @media (max-width: 376px) {
    font-size: 14px;
    transform: translate3d(0, -32%, 0);
  }
`

export const CardButton = styled.button`
  background: ${props => props.background || "#FFFFFF"};
  border-color: ${props => props.border || "#FFFFFF"};
  color: ${props => props.color || "#000F08"};
  padding: 10px 32px;
  border-width: 1px;
  border-style: solid;
  display: block;
  border-radius: 48px;
  outline: none;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${props => props.background || "#000F08"};
    border-color: ${props => props.border || "#FFFFFF"};
    color: ${props => props.color || "#FFFFFF"};
    transition: 0.5s ease;
  }

  @media (max-width: 376px) {
    padding: 5px 16px;
    font-size: 16px;
  }
}
`
export const CardsButton = styled(CardButton)`
  padding: 13px 24px;
`

export const SaleCardsButton = styled(CardButton)`
  @media (max-width: 376px) {
    padding: 5px;
    font-size: 12px;
  }
`



