import {useEffect, useState,} from "react";
import {catalogUrl} from "../configs/urlConfig"

const useCatalogFetch = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [catalogArray, setCatalogArray] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoaded(true);
                const response = await fetch(catalogUrl);
                const result = await response.json();
                setCatalogArray(result);
                setIsLoaded(true);
            } catch (error) {
                setError(error.message);
                setIsLoaded(false);
            }
        };
        getData();
    }, [])

    return {
        error,
        isLoaded,
        catalogArray,
    };
};

export default useCatalogFetch;