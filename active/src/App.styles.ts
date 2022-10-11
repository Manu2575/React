import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 2px;
`;

export const Header = styled.div`
    a {
        width: 100%;
        margin: 1px 0 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a img {
        width: 70px;
        heitht: 70px;
        margin-left: 15px; 
    }

    a picture {
        display: flex;
        align-items: center; 
    }
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px
    }
`;

export const Screen = styled.div`
    text-align: left;
    font-size: 11px;

    .emoji {
        font-size: 25px;
        margin-bottom: 20px
    }
`;

export const PhotoList = styled.div`
    display: grid;
    gap: 10px;
    font-size:1px;
    color: #27282F;
    text-align: center;

    button {
        background-color: red;
        border: 0;
        color: #FFF;
        text-align: left;
        padding: 4px 8px;
        font-size: 13px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    }
`;

export const Nav = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    font-size:5px;
    color: #27282F;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;

    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;