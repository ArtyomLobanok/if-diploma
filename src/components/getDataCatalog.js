import {useParams} from "react-router-dom";
import {useEffect, useState,} from "react";
import {catalogUrl} from "../../src/configs/urlConfig"

const CatalogFetch = () => {
    const {id} = useParams()
    const dataCatalogFetch = `${catalogUrl}${id}`;
    const [dataCatalog, setDataCatalog] = useState({})
    useEffect(() => {
            fetch(dataCatalogFetch)
                .then(res => res.json())
                .then(data => setDataCatalog(data))
        },
        [dataCatalogFetch])
    const handleClickLink = (e) => {
        e.preventDefault();
        return false;
    }
    console.log(dataCatalog)
    return ({
        dataCatalog,
        handleClickLink
    })
}

export default CatalogFetch;