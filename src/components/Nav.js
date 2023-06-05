import { useState, useEffect } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiOutlinePlusSm } from 'react-icons/hi';


import { HeaderContainer, LogoContainer, NetflixLogo, NetflixAvatar, Title, Subtitle, TitleContainer, BannerButton, BannerButtonContainer, HeaderElementsWrapper } from "./Components.style";

export default function Nav() {

    const [scrollAnimation, setScrollAnimation] = useState(false);

    const scrollAnimationHandler = () => {
        if (window.scrollY > 100) {
            setScrollAnimation(true);
        } else {
            setScrollAnimation(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollAnimationHandler);

        return () => {
            window.removeEventListener('scroll', scrollAnimationHandler);
        };
    }, []);

    return (
        <HeaderContainer>
            <HeaderElementsWrapper>
                <LogoContainer scrollAnimation={scrollAnimation}>
                    <NetflixLogo src="./assets/netflix-logo.png" alt="netflix logo"></NetflixLogo>
                    <NetflixAvatar src="./assets/Netflix-avatar.png" alt="netflix-avatar"></NetflixAvatar>
                </LogoContainer>
                <TitleContainer>
                    <Title>Narcos</Title>
                    <Subtitle>cjk;DJ;jdn;D;Ca;cbA;iuhiuhiu</Subtitle>
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
                </TitleContainer>
            </HeaderElementsWrapper>
        </HeaderContainer>
    )
};