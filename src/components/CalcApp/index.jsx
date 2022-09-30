import { useEffect } from 'react';
import { useState } from 'react';

import { Bill, CalcButton, Container, NumPeople, SelectTip } from "./styled";

const CalcApp = (props) => {

    const [ valueBill, setValueBill ] = useState('');
    const [ tipCustom, setTipCustom ] = useState('');
    const [ numPeople, setNumPeople ] = useState('');

    useEffect(() => {
        const result = () => {
            if(valueBill > 0 && numPeople > 0 && tipCustom > 0) {
                // console.log('Resultado', (valueBill*(tipCustom/100))/numPeople)
                const total = valueBill*(tipCustom/100);
                props.setTotal(total);
                props.setTotalPerson(total/numPeople);
            }
        }
        result();
        if(props.reset) {
            setValueBill('');
            setTipCustom('');
            setNumPeople('');
            props.setReset(false);
            props.setTotal(0);
            props.setTotalPerson(0);
        }
    }, [valueBill, tipCustom, numPeople, props.reset]);

    return (
        <Container>
            <Bill>
                <label>Bill</label>
                <input
                    type="number"
                    id="bill"
                    name="bill"
                    placeholder="0"
                    value={valueBill}
                    onChange={(e) => 
                        setValueBill(e.target.value)
                    }
                />
            </Bill>
            <SelectTip>
                <label>Select Tip %</label>
                <CalcButton style={{backgroundColor: tipCustom == 5 && 'hsl(172, 67%, 45%)'}} onClick={(e) => {
                    setTipCustom(5);
                }}>5%</CalcButton>
                <CalcButton style={{backgroundColor: tipCustom == 10 && 'hsl(172, 67%, 45%)'}} onClick={(e) => {
                    setTipCustom(10);
                }}>10%</CalcButton>
                <CalcButton style={{backgroundColor: tipCustom == 15 && 'hsl(172, 67%, 45%)'}} onClick={(e) => {
                    setTipCustom(15);
                }}>15%</CalcButton>
                <CalcButton style={{backgroundColor: tipCustom == 25 && 'hsl(172, 67%, 45%)'}} onClick={(e) => {
                    setTipCustom(25);
                }}>25%</CalcButton>
                <CalcButton style={{backgroundColor: tipCustom == 50 && 'hsl(172, 67%, 45%)'}} onClick={(e) => {
                    setTipCustom(50);
                }}>50%</CalcButton>
                <input
                    type="number"
                    id="custom"
                    name="custom"
                    placeholder="Custom"                    
                    onChange={(e) => {
                        console.log('e', e)
                        setTipCustom(e.target.value)
                        }
                    }
                />
            </SelectTip>
            <NumPeople>
                <label>Number of People</label>
                <input
                    type="number"
                    id="people"
                    name="people"
                    placeholder="0"
                    value={numPeople}
                    onChange={(e) => 
                        setNumPeople(e.target.value)
                    }
                />
            </NumPeople>
        </Container>
    )
};


export default CalcApp;