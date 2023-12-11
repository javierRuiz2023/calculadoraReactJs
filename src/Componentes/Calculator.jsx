import React from 'react'
import { CalculatorState } from './CalculatorState'
import { CalculatorScreen } from './CalculatorScreen'
import { Button } from './button'
import "../Estilos/style.css"

export const Calculator = () => {
  return (
    <>
     <CalculatorState>
        <div className="calculatorContainer">
            <CalculatorScreen></CalculatorScreen>
            <div className="container">
                <Button type={"action"} value={"AC"}></Button>
                <Button type={"operator"} value={"%"}></Button>
                <Button type={"action"} value={"🡸"}></Button>
                <Button type={"operator"} value={"/"}></Button>
                <Button type={"number"} value={"7"}></Button>
                <Button type={"number"} value={"8"}></Button>
                <Button type={"number"} value={"9"}></Button>
                <Button type={"operator"} value={"*"}></Button>
                <Button type={"number"} value={"4"}></Button>
                <Button type={"number"} value={"5"}></Button>
                <Button type={"number"} value={"6"}></Button>
                <Button type={"operator"} value={"-"}></Button>
                <Button type={"number"} value={"1"}></Button>
                <Button type={"number"} value={"2"}></Button>
                <Button type={"number"} value={"3"}></Button>
                <Button type={"operator"} value={"+"}></Button>
                <Button type={"action"} value={"-+"}></Button>
                <Button type={"number"} value={"0"}></Button>
                <Button type={"action"} value={"."}></Button>
                <Button type={"action"} value={"="}></Button>
            </div>
        </div>
        </CalculatorState>
     
    </>
  )
}
