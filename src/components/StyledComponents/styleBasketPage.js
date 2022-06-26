import styled, {keyframes} from "styled-components";
import {ItemButton} from "./styledItemPage";

const collapseEffect = keyframes`
  from {
    transform: translateX(-150%);

  }
  to {
    transform: translateX(0);
  }
`

export const BasketSendSuccess = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 20px;
  font-size: 26px;
  @media (max-width: 376px) {
    padding: 60px 0 20px;
    font-size: 20px;
    text-align: center;
    animation: ${collapseEffect} 1s forwards;
  }
`

export const BasketStoreBodyContainer = styled.div`
  margin: 0 auto;
  max-width: 704px;
  width: 100%;
`

export const BasketStoreBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D8D8D8;
  padding: 36px 0 14px;

  p:first-child {
    color: ${props => props.color || "#000F08"};
    font-size: 26px;
    margin-right: 30px;
  }

  p:nth-child(2) {
    color: ${props => props.color || "#8C8C8C"};
    font-weight: 300;
    font-size: 16px;
  }
  @media (max-width: 376px) {
    padding: 34px 0 8px;
    align-items: end;
    p:first-child {
      font-size: 20px;
      margin-right: 10px;
    }
    p:nth-child(2) {
      font-size: 14px;
    }
  }
`

export const BasketStoreBodyHeaderValueItems = styled.span`
  margin-right: 6px;
`

export const BasketStoreBodyMain = styled.div`
  display: block;

  h4 {
    margin: 20px auto;
  }
`
export const BasketStoreBodyFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 20px;

  p {
    color: ${props => props.color || "#000F08"};
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 34px;
  }

  @media (max-width: 376px) {
    padding: 36px 0 18px;
    p {
      font-size: 20px;
      margin-bottom: 41px;
    }
  }
`

export const BasketTotalPriceValue = styled.span`
  color: ${props => props.color || "#000F08"};
  @media (max-width: 376px) {
    font-size: 20px;
  }
`

export const BasketStoreBodyBtn = styled(ItemButton)`
  padding: 19px 34px;
  margin-bottom: 28px;
  @media (max-width: 376px) {
    margin-bottom: 24px;
    font-size: 20px;
  }
`

export const BasketStoreBodyPayCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BasketStoreBodyPayCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius: 5px;

  &:first-child {
    padding: 8px 14px;
    margin-right: 6px;

    img {
      width: 26px;
      height: 16px;
    }
  }

  &:nth-child(2) {
    padding: 10px 8px;

    img {
      width: 37px;
      height: 12px;
    }
  }
`

export const BasketItem = styled.div`
  padding-top: 40px;
  padding-bottom: 36px;
  border-bottom: 1px solid #D8D8D8;
  @media (max-width: 376px) {
    padding-top: 24px;
    padding-bottom: 25px;
  }
`
export const BasketItemWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 376px) {
    margin-bottom: 36px;
  }
`

export const BasketItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  max-width: 212px;
  max-height: 306px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 376px) {
    width: 50%;
    margin-right: 8px;
  }
`
export const BasketItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const BasketItemNameInformation = styled.p`
  color: ${props => props.color || "#000F08"};
  margin: 14px 0 28px;
  font-size: 22px;
  font-weight: 400;
  @media (max-width: 376px) {
    font-size: 16px;
    margin: 12px 0 18px;
  }
`

export const BasketItemPriceInformation = styled.p`
  color: ${props => props.color || "#000F08"};
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 376px) {
    margin-bottom: 24px;
  }
`

export const BasketItemTheRestInformation = styled(BasketItemPriceInformation)`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`

export const BasketItemTheRestInformationValue = styled.span`
  margin-left: 6px;
`


export const BasketItemTheRestInformationDropdown = styled.svg`
  margin-left: 9px;
  width: 16px;
  height: 9px;
  @media (max-width: 376px) {
    width: 14px;
    height: 7px;
  }
`

export const BasketItemRemoveBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BasketItemRemoveBtn = styled.button`
  color: ${props => props.color || "#000F08"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  outline: none;
  background-color: initial;
  cursor: pointer;

  &:first-child {
    margin-right: 20px;
  }

  svg {
    fill: ${props => props.color || "#1D1D1B"};
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${props => props.background || "#D8D8D8"};
    border: 1px solid #FFFFFF;
    transition: 0.4s ease;
  }

  @media (max-width: 376px) {
    font-size: 14px;
    &:first-child {
      margin-right: 0;
    }

    svg {
      margin-right: 8px;
      width: 24px;
      height: 24px;
    }
  }
`