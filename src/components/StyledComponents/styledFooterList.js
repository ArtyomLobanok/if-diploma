import styled from "styled-components";

export const FooterList = styled.ul`
  color: ${props => props.color || "#000F08"};
  width: 25%;
  white-space: pre-line;

  &:nth-child(4) {
    li {
      margin-bottom: 12px;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      margin-bottom: 36px;
      font-size: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
  
`
export const FooterIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#000000"};
  width: ${props => props.width || '16px'};
  height: ${props => props.height || '17px'};
  margin-right: 13px;
`