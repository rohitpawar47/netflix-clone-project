import styled from "styled-components";


// Header & Banner Styles

export const HeaderContainer = styled.header`
    // background-image: url('../../assets/main-banner.jpeg');
    background-image: url('https://rare-gallery.com/mocahbig/1310303-Narcos-HD-Wallpaper.jpg');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const HeaderElementsWrapper = styled.div`
    width: 95%;
    max-width: 2000px;
    margin-inline: auto;
    display: grid;
    grid-template-rows: repeat(4,1fr);
    position: relative;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    grid-row: 1/2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: all 0.5s ease-in;
    background: ${(props) => props.scrollAnimation ? 'black' : ''};


`;

export const NetflixLogo = styled.img`
    width: 100px;
    cursor: pointer;
`;

export const NetflixAvatar = styled.img`
    width: 25px;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
    grid-row: 3/4;
    // width: 95%;
    // max-width: 2000px;
    // margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 3rem;
    letter-spacing: 1px;
    color: #fff;
`;

export const Subtitle = styled.p`
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: #fff;
`;

export const BannerButtonContainer = styled.div`
    display: flex;
`;

export const BannerButton = styled.button`
    border: none;
    padding: .3em 2em;
    border-radius: .2em;
    margin-right: 1em;
    background-color: #fff;
    cursor: pointer;
    font-weight: 800;
    letter-spacing: .5px;
    display: flex;
    align-items: center;
    gap: .2em;
    transition: background-color 250ms;

        &>:first-child{
            font-size: 1.6em;
        }

        &:is(:hover, :focus){
            background-color: lightgray;
            // color: white;
        }
`;
