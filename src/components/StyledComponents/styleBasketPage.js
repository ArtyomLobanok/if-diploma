import styled from "styled-components";
import {ItemButton} from "./styledItemPage";

export const BasketSendSuccess = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 20px;
  font-size: 26px;
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
`

export const BasketStoreBodyHeaderValueItems = styled.span`
  margin-right: 6px;
`

export const BasketStoreBodyMain = styled.div`
  display: block;
  h4{
    margin: 20px auto;
  }
`
export const BasketStoreBodyFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 20px;

  p {
    color: ${props => props.color || "#000F08"};
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 34px;
  }
`

export const BasketTotalPriceValue = styled.span`
  color: ${props => props.color || "#000F08"};
`

export const BasketStoreBodyBtn = styled(ItemButton)`
  padding: 19px 34px;
  margin-bottom: 28px;
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
  margin-top: 40px;
  padding-bottom: 36px;
  border-bottom: 1px solid #D8D8D8;
`
export const BasketItemWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`

export const BasketItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  max-width: 212px;
  max-height: 306px;
  img {
    with: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const BasketItemInformation = styled.div`
  display: flex;
  flex-direction: column;
`
export const BasketItemNameInformation = styled.p`
  color: ${props => props.color || "#000F08"};
  margin: 14px 0 28px;
  font-size: 22px;
  font-weight: 400;
`

export const BasketItemPriceInformation = styled.p`
  color: ${props => props.color || "#000F08"};
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 400;
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
`

export const BasketItemTheRestInformationLiftUp = styled(BasketItemTheRestInformationDropdown)`
  transform: rotate(180deg)
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
`