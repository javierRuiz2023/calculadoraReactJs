import { useAppContext } from "./CalculatorState"

export const CalculatorScreen = () => {
    const calculator = useAppContext()
  return (
    <div className="calculatorScreen">
        <div className="screen">
            <span>Memory: {calculator.memory}</span>
            <span>Operation: {calculator.operation}</span>
            <span>Decimal: {calculator.isDecimal ? "decimal" :"entero"}</span>
            
        </div>
        <div className="calculatorCurrentValue">{calculator.currentValue}{calculator.isDecimal? `.`:``}</div>

    </div>
  )
}


