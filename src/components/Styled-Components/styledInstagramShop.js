import styled from "styled-components";

export const ShopInstagramWrapper = styled.div`

  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
`
export const ShopInstagramHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 56px 0 34px;

  p {
    color: ${props => props.color || "#000F08"};
    text-decoration: none;
  }

  p:first-child {
    margin-right: 98px;
  }
`
export const ShopInstagramBody = styled.div`
  display: flex;
  margin-bottom: 50px;
`

export const ShopInstagramLeftScreen = styled.div`
  width: 50%;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`
export const ShopInstagramRightScreen = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  img {
    display: block;
    object-fit: cover;
    width: 50%
  }
`
export const ShopInstagramArrow = styled.svg`
  fill: ${props => props.fill || "#000F08"};
  margin-left: 11px;
  width: 7px;
  height: 14px;
  cursor: pointer;
`
export const ShopInstagramFooter = styled.div`
  color: ${props => props.color || "#000F08"};
  display: inline-block;
`