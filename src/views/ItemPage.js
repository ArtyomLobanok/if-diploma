import React from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "./Footer";
import {Container, Flex, LikeIcon} from "../components/Styled-Components/General";
import styled from "styled-components";
import {ItemPageTextColor, ItemPageTextOrder, saleBtnCardTextAdd} from "../configs/stringsData";
import img1 from "../assets/img/temp/itemPageImg1.png"
import img2 from "../assets/img/temp/itemPageImg2.png"

export const ItemHeaderWrapper = styled.div`
  background-color: ${props => props.color || "#FFFFFF"};
  padding: 20px 0;

  div {
    svg {
      fill: ${props => props.fill || "#000F08"};
    }

    ul {
      li {
        &:after {
          background-color: ${props => props.color || "#000F08"};
          border-color: ${props => props.color || "#000F08"};
        }

        color: ${props => props.color || "#000F08"};
      }
    }
`
export const ItemImgWrapper = styled.div`
  display: flex;
  margin-right: 80px;

  img {
    display: block;
    object-fit: contain;
    max-width: 690px;
    max-height: 1070px;
    width: auto;
    height: 100vh;
  }
`
export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
`
export const ItemTitle = styled.h3`
  color: ${props => props.color || "#000F08"};
  font-size: 20px;
  font-weight: 400;
  margin: 50px 0 30px;
`
export const ItemPrice = styled.div`
  color: ${props => props.color || "#000F08"};
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  span {
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.color || "#D8D8D8"};
  }
`
export const ItemColor = styled.div`
  margin-bottom: 64px;

  p {
    color: ${props => props.color || "#8C8C8C"};
    margin-bottom: 20px;
  }

  button {
    background-color: ${props => props.color || "#DFDED9"};
    width: 40px;
    height: 40px;
    padding: 3px;
    border: solid 1px #000F08;
    cursor: pointer;

    :hover {
      box-shadow: -moz-mac-accentdarkestshadow;
    }
  }
`
export const ItemSize = styled.div`
  margin-bottom: 54px;

  p {
    color: ${props => props.color || "#8C8C8C"};
    margin-bottom: 24px;
  }

  div {
    span {
      padding: 6px;
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #000F08;
      }
    }
  }
`

export const ItemButton = styled.button`
  background-color: ${props => props.color || "#000F08"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 53px;

  span {
    color: ${props => props.color || "#FFFFFF"};
    padding: 22px 62px;
    font-size: 20px;
    font-weight: 400;
    border-right: 1px solid #FFFFFF;
  }
`
export const ItemIconCollapse = styled.svg`
  display: block;
  fill: ${props => props.fill || "#000F08"};
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '9px'};
  margin-right: 22px;
`

export const ItemFooterWrapper = styled.div`
  margin-bottom: 22px;
  font-weight: 300;
  p{
    color: ${props => props.color || "#8C8C8C"};
    font-weight: 400;
    margin-bottom: 6px;
  }
`

const ItemPage = () => {
    return (
        <>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            <Container>
                <Flex>
                    <ItemImgWrapper>
                        <img src={img1} alt='Pic'/>
                        <img src={img2} alt='Pic'/>
                    </ItemImgWrapper>
                    <ItemInfoWrapper>
                        <ItemTitle>CHALK SAINTS BOYFRIEND</ItemTitle>
                        <ItemPrice>
                            <span>USD $300.00</span>
                            <p>{ItemPageTextOrder}</p>
                        </ItemPrice>
                        <ItemColor>
                            <p>{ItemPageTextColor}</p>
                            <button onClick={e => e.preventDefault()}/>
                        </ItemColor>
                        <ItemSize>
                            <p>SIZE</p>
                            <div>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                        </ItemSize>
                        <ItemButton>
                            <span>
                            {saleBtnCardTextAdd}
                            </span>
                            <LikeIcon width='24px' height='24px' margin='21px'>
                                <use href="#likeIcon"></use>
                            </LikeIcon>
                        </ItemButton>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' align="center" margin="0 0 22px 0">
                                <ItemIconCollapse>
                                    <use href="#collapse"></use>
                                </ItemIconCollapse>
                                <span>PRODUCT DESCRIPTION</span>
                            </Flex>
                            <p>
                                Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the
                                hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for
                                slouch feel.
                            </p>
                        </ItemFooterWrapper>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' align="center" margin="0 0 22px 0">
                                <ItemIconCollapse>
                                    <use href="#Union"></use>
                                </ItemIconCollapse>
                                <span>SHIPPING & RETURNS</span>
                            </Flex>
                        </ItemFooterWrapper>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' align="center" margin="0 0 22px 0">
                                <ItemIconCollapse>
                                    <use href="#Union"></use>
                                </ItemIconCollapse>
                                <span>FABRIC COMPOSITION</span>
                            </Flex>
                        </ItemFooterWrapper>
                    </ItemInfoWrapper>
                </Flex>
            </Container>
            <Footer/>
        </>
    )
}

export default ItemPage;