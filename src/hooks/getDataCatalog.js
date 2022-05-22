import {useEffect, useState,} from "react";
import {catalogUrl} from "../configs/urlConfig"

const useCatalogFetch = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [catalogArray, setCatalogArray] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(catalogUrl);
                const result = await response.json();

                setCatalogArray(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        getData();
    }, [])

    return {
        error,
        loading,
        catalogArray,
    };
};

export default useCatalogFetch;