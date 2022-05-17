import styled from "styled-components";

export const SliderCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  &:nth-child(3) {
    margin-right: 0;
  }
`

export const SliderImg = styled.img`
  display: block;
  object-fit: cover;
  max-width: 395px;
  width: 100%;
  height: 533px;
`

export const FullPriceText = styled.p`
  color: ${props => props.color || "#000F08"};
  font-size: 24px;
  margin-right: 16px;
  text-decoration: line-through;
`
export const SalePriceText = styled.p`
  color: ${props => props.color || "#D7302D"};
  font-size: 26px;
  font-weight: 700;
`
export const LikeIconWrapper = styled.div`
  position: absolute;
  right: 0;
  margin: 16px;
`

export const SalePercentTextWrapper = styled.div`
  color: ${props => props.color || "#FFFFFF"};
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 18px;
  span {
    padding: 6px 10px;
    background-color: ${props => props.color || "#D7302D"};
  }
`