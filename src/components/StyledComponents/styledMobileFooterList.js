import styled, {keyframes} from "styled-components";
import {ItemIconOpen} from "./styledItemPage";

const collapseEffect = keyframes`
  from {
    transform: translateX(-150%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const FooterCollapsesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #D8D8D8;
  margin-bottom: 36px;
`
export const FooterCollapseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 9px;
  border-bottom: 1px dashed #D8D8D8;
  button {
    background-color: initial;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
export const FooterCollapseChanger = styled.div`
  display: block;
`

export const FooterCollapseList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 16px;
  
  ul {
    overflow: hidden;
    animation: ${collapseEffect} 1s forwards;
    margin: 16px 0 0 0;
    padding-left: 0;
    display: inline-block;
    li {
      list-style-type: none;
      margin-left: 16px;
      padding-bottom: 10px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

`

export const MobileItemIconOpen = styled(ItemIconOpen)`
  margin-right: 9px;
  width: ${props => props.width || '7px'};
`
export const MobileItemIconClose = styled(MobileItemIconOpen)`
  width: ${props => props.width || '7px'};
  position: relative;
  bottom: -2px;
`