import styled from "styled-components";


export const CardWrapper = styled.div`
  width: ${props => props.width || "initial"};
  display: flex;
  flex-direction: column;
  margin-right: 20px;

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
`
export const CardContentWrapper = styled.div`
  position: relative;
`
export const CardImgWrapper = styled.div`
  background: ${props => props.background || "#000F08"};

  box-shadow: rgba(0, 15, 8, 0.6);
  position: relative;
  margin-bottom: 1.5rem;

  img {
    width: ${props => props.width || "100%"};
    display: block;
    max-width: 395px;
    max-height: 533px;
    height: auto;
    transition: opacity 0.3s linear;
    object-fit: cover;
  }
`
export const FullPriceText = styled.p`
  color: ${props => props.color || "#000F08"};
  text-decoration: ${props => props.decoration || "line-through"};
  font-size: 24px;
  margin-right: 16px;
`
export const SalePriceText = styled.p`
  color: ${props => props.color || "#D7302D"};
  font-size: 26px;
  font-weight: 700;
`
export const CardIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  cursor: pointer;
  z-index: 1;
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
}
`