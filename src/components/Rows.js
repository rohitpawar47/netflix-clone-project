import { useState, useEffect } from "react";

import axios from "../axiosBaseUrl";
import { RowImage, RowTitle, RowContainer, RowImageContainer } from "./Components.style";


export default function Rows({ title, fetchUrl, isLargeRow = false }) {

    const [rowsDisplay, setRowDisplay] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setRowDisplay(request.data.results);
            return request;
        }
        fetchData();
    }, [])

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    const rowsElements = rowsDisplay.map((item) =>
        <RowImage src={`${baseUrl}${isLargeRow ? item.poster_path :
            item.backdrop_path
            }`} alt={item.name} />
    );

    return (
        <RowContainer>
            <RowTitle>{title}</RowTitle>
            <RowImageContainer>
                {rowsElements}
            </RowImageContainer>
        </RowContainer>
    )
};