import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(185, 41%, 84%);
    background-image: url(./images/logo.svg);
    background-repeat: no-repeat;
    background-position: top;
    background-position-y: 40px;

    @media (min-width: 1440px) {
        background-position-y: 100px;
        background-size: 100px;
    }
`
export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 295px;
    border-radius: 15px;
    background-color: hsl(0, 0%, 100%);
    padding: 40px;

    @media (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 600px;
    }
`