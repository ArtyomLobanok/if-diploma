import {useParams} from "react-router-dom";
import {useEffect, useState,} from "react";
import {catalogUrl} from "../configs/urlConfig"

const ProductFetch = () => {
    const {id} = useParams()
    const dataFetch = `${catalogUrl}${id}`;
    const [data, setData] = useState(null)
    useEffect(() => {
            window.scrollTo(0, 0)
            fetch(dataFetch)
                .then(res => res.json())
                .then(data => setData(data))
        },
        [dataFetch])
    return ({
        data,
    })
}

export default ProductFetch;