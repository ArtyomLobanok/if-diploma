import {BtnCategory, StyledSvgCategory} from "./Styled-Components/styledCategorySection";

const btnCard = props => {
    const {url, title} = props.card;
    return (
        <BtnCategory value={title}>
            <StyledSvgCategory>
                <use href={url}></use>
            </StyledSvgCategory>
            {title}
        </BtnCategory>
    )
}
export default btnCard;