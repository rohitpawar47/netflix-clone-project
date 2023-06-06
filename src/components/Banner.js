import { BsFillPlayFill } from 'react-icons/bs';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { Title, Subtitle, BannerContainer, BannerButton, BannerButtonContainer, BottomFader } from "./Components.style";

export default function Banner() {

    const readMore = (text) => {
        const limit = 80;
        if (text.length > limit) {
            return text.slice(0, limit - 1) + '...';
        } else {
            return text;
        }
    };

    return (
        <BannerContainer>
            <Title>Narcos</Title>
            <Subtitle>{readMore(`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`)}</Subtitle>
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