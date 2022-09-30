import { useState } from "react";
import CalcApp from "../../components/CalcApp";
import RespApp from "../../components/RespApp";
import { Container, ContainerApp } from "./styled";

const TipLayout = () => {

    const [ total, setTotal ] = useState(0);
    const [ totalPerson, setTotalPerson ] = useState(0);
    const [ reset, setReset ] = useState(false);

    return (
        <Container>
            <ContainerApp>
                <CalcApp setTotal={setTotal} setTotalPerson={setTotalPerson} reset={reset} setReset={setReset}/>
                <RespApp total={total} totalPerson={totalPerson} setReset={setReset} />
            </ContainerApp>
        </Container>
    )
};


export default TipLayout;