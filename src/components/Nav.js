import { useState, useEffect } from 'react';



import { HeaderContainer, LogoContainer, NetflixLogo, NetflixAvatar, Title, Subtitle, TitleContainer, BannerButton, BannerButtonContainer, HeaderElementsWrapper, BottomFader } from "./Components.style";

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
        <LogoContainer scrollAnimation={scrollAnimation}>
            <NetflixLogo src="./assets/netflix-logo.png" alt="netflix logo"></NetflixLogo>
            <NetflixAvatar src="./assets/Netflix-avatar.png" alt="netflix-avatar"></NetflixAvatar>
        </LogoContainer>
    )
};