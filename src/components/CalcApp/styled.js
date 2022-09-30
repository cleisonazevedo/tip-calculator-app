import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Space Mono', monospace;
`

export const Bill = styled.div`
    input {       
        height: 30px;
        border-radius: 5px;
        text-align: right;
        color: hsl(183, 100%, 15%);
        font-weight: 700;
        font-size: 20px;
        border: none;
        background-color: hsl(189, 41%, 97%);
        background-image: url(./images/icon-dollar.svg);
        background-repeat: no-repeat;
        background-position: left;
        background-position-x: 18px;
        padding: 6px 10px 6px 6px;
        outline: 0;
        ::placeholder {
            color: hsl(186, 14%, 43%);
        }
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        cursor: pointer;
        :focus {
            outline: none;
            box-shadow: 0 0 0 1px hsl(172, 67%, 45%);
        }
    }
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 5px;
        color: hsl(186, 14%, 43%);
        font-size: 16px;
        font-weight: 600;
    }
    margin-bottom: 15px;
`
export const SelectTip = styled.div`
    display: flex;    
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    input {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(189, 41%, 97%);
        color: hsl(183, 100%, 15%);
        font-weight: 700;
        font-size: 20px;
        border-radius: 5px;
        width: 140px;
        height: 40px;           
        outline: none;
        text-align: center;
        border: none;
        ::placeholder {
            color: hsl(186, 14%, 43%);
        }
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        cursor: pointer;
        :focus {
            outline: none;
            box-shadow: 0 0 0 1px hsl(172, 67%, 45%);
        }
    }
    label {
        color: hsl(186, 14%, 43%);
        font-size: 16px;
        font-weight: 600;
        font-size: 15px;
        width: 100%;
        margin-bottom: 5px;
    }

    margin-bottom: 15px;
`
export const CalcButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(183, 100%, 15%);
    color: hsl(0, 0%, 100%);
    font-weight: 500;
    border-radius: 5px;
    width: 140px;
    height: 40px;   
    margin: 10px 0px;
    cursor: pointer;
`
export const NumPeople = styled.div`
    input {
        height: 30px;
        border-radius: 5px;
        text-align: right;
        color: hsl(183, 100%, 15%);
        font-weight: 700;
        font-size: 20px;
        border: none;
        background-color: hsl(189, 41%, 97%);
        padding: 6px 10px 6px 6px;
        outline: 0;
        background-image: url(./images/icon-person.svg);
        background-repeat: no-repeat;
        background-position: left;
        background-position-x: 18px;
        ::placeholder {
            color: hsl(186, 14%, 43%);
        }
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        cursor: pointer;
        :focus {
            outline: none;
            box-shadow: 0 0 0 1px hsl(172, 67%, 45%);
        }
    }
    label {
        margin-bottom: 5px;
        color: hsl(186, 14%, 43%);
        font-size: 16px;
        font-weight: 600;
    }
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`