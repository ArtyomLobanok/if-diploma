import {useRef} from "react";

const HeaderScrollToSearchResults = () => {
    const ref = useRef();
    const executeScroll = () => {
        ref.current.scrollIntoView({behavior: "smooth"})
        console.log("doIt")
    }
    return {
        executeScroll,
        ref,
    }
};
export default HeaderScrollToSearchResults;