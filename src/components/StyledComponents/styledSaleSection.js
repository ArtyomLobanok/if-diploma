import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin-right: 16px;
  margin-left: 36px;
!important;

  div {

    div {

      &:first-child {
        z-index: 1;
      }

      &:first-child:before {
        content: "";
      }

      &:last-child {
        z-index: 1;

        &:last-child:before {
          content: "";
        }
      }
    }
  }

  &:nth-child(4) {
    margin-right: 0;
  }

  @media (max-width: 376px) {
    margin: 0 -12px 0 0;
  }
`

export const SliderSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const SliderArrow = styled.svg`
  fill: ${props => props.fill || '#000F08'};
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    fill: ${props => props.fill || '#FFFFFF'};
  }
`

export const SliderButton = styled.button`
  position: absolute;
  background: ${props => props.background || "#FFFFFF"};
  display: block;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  outline: none;
  cursor: pointer;
  z-index: 1000;
!important;


  &:hover {
    background: ${props => props.background || "#000F08"};
    transition: 0.5s ease;

    svg {
      fill: ${props => props.fill || '#FFFFFF'};
    }
  }
`

export const SliderButtonNext = styled(SliderButton)`
  transform: translate3d(-75%, -75%, 0);

  @media (max-width: 376px) {
    transform: translate3d(-110%, -75%, 0);
    svg {
      max-width: 12px;
      max-height: 12px;
    }

    width: 28px;
    height: 28px;
  }

`
export const SliderButtonPrev = styled(SliderButton)`
  transform: translate3d(-25%, -70%, 0);

  svg {
    transform: rotate(180deg);
  }

  @media (max-width: 376px) {
    transform: translate3d(45%, -80%, 0);
    svg {
      max-width: 12px;
      max-height: 12px;
    }

    width: 28px;
    height: 28px;
  }
`

