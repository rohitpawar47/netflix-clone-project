import styled from "styled-components";


// Header Styling *************

export const LogoContainer = styled.header`
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


// Banner Styling *************

export const BannerContainer = styled.div`
    background-image: url('https://rare-gallery.com/mocahbig/1310303-Narcos-HD-Wallpaper.jpg');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: grid;
    grid-template-rows: repeat(8,1fr);
    position: relative;
    padding: 0 2em;
`;


export const Title = styled.h1`
    font-size: 3rem;
    letter-spacing: 1px;
    color: #fff;
    grid-row: 4/5;
`;

export const Subtitle = styled.p`
    font-size: 1.28rem;
    font-weight: 500;
    letter-spacing: .7px;
    color: #fff;
    grid-row: 5/6;
    margin: 0 1.7em;
    position: absolute;
    width: 550px;
`;

export const BannerButtonContainer = styled.div`
    grid-row: 6/7;
    display: flex;
    align-items: center;
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
        }
`;

export const BottomFader = styled.div`
        grid-row: 8/9;
        heigth: 75rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37,37,37,.6),
            #111
        );
`;