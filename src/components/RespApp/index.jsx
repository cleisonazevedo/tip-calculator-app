import { Container, ResetButton, TipAmount, Tipvalue } from "./styled";

const RespApp = (props) => {
    return (
        <Container>
            <TipAmount>
                <div>
                    <h1>Tip Amount</h1>
                    <p>/ person</p>
                </div>               
                <Tipvalue>
                    ${props.totalPerson.toFixed(2)}
                </Tipvalue>
            </TipAmount>
            <TipAmount>
                <div>
                    <h1>Total</h1>
                    <p>/ person</p>
                </div>               
                <Tipvalue>
                    ${props.total.toFixed(2)}
                </Tipvalue>
            </TipAmount>
            <ResetButton onClick={()=> props.setReset(true)}>RESET</ResetButton>
        </Container>
    );
};


export default RespApp;