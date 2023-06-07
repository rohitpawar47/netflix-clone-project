import { useState, useEffect } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { Title, Subtitle, BannerContainer, BannerButton, BannerButtonContainer, BottomFader } from "./Components.style";
import axios from '../axiosBaseUrl';
import requests from '../Requests';

export default function Banner() {

    const [bannerDisplay, setBannerDisplay] = useState([]);
    const [bannerImageChange, setBannerImageChange] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setBannerImageChange(prev => !prev);
        }, 30000);
    }, [])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomMovieNumber = Math.floor(Math.random() * request.data.results.length);
            setBannerDisplay(request.data.results[randomMovieNumber]);
            return request;
        }
        fetchData();
    }, [bannerImageChange])

    const readMore = (text) => {
        const limit = 80;
        if (text.length > limit) {
            return text.slice(0, limit - 1) + '...';
        } else {
            return text;
        }
    };


    return (
        <BannerContainer img={bannerDisplay?.backdrop_path}>
            <Title>{bannerDisplay?.name || bannerDisplay?.title || bannerDisplay?.original_name}</Title>
            <Subtitle>{readMore(`${bannerDisplay?.overview}`)}</Subtitle>
            <BannerButtonContainer>
                <BannerButton>
                    <BsFillPlayFill />
                    <p>Play</p>
                </BannerButton>
                <BannerButton>
                    <HiOutlinePlusSm />
                    <p>My List</p>
                </BannerButton>
            </BannerButtonContainer>
            <BottomFader />
        </BannerContainer>
    )
};