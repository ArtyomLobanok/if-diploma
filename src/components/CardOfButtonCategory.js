import {BtnCategory, StyledSvgCategory} from "./Styled-Components/styledCategorySection";

const btnCard = ({card, handleChange}) => {
    const {url, title} = card;
    return (
        <BtnCategory onClick={(e) => handleChange({e,title})} >
            <StyledSvgCategory>
                <use href={url}></use>
            </StyledSvgCategory>
            {title}
        </BtnCategory>
    )
}

export default btnCard;