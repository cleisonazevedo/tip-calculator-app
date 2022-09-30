import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: hsl(183, 100%, 15%);
    color: hsl(0, 0%, 100%);
    border-radius: 15px;
    padding: 24px;
    font-family: 'Space Mono', monospace;

    @media (min-width: 1440px) {
        margin-left: 10px;
    }
    
`
export const TipAmount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 600;
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        color: hsl(186, 14%, 43%);
        margin: 3px 0px;
    }
    h1 {        
        margin: 3px 0px;
    }

    @media (min-width: 1440px) {
        margin-top: 10px;
    }
`
export const Tipvalue = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    color: hsl(172, 67%, 45%);
    font-weight: 600;

    @media (min-width: 1440px) {
        font-size: 32px;
    }
`
export const ResetButton = styled.button`
    /* display: flex;
    flex-direction: column; */
    background-color: hsl(172, 67%, 45%);
    height: 40px;
    border-radius: 5px;
    border: none;
    width: 240px;
    font-size: 18px;
    font-weight: 600;
    color: hsl(183, 100%, 15%);
    cursor: pointer;

    @media (min-width: 1440px) {
        margin-top: 100px;
    }
`

