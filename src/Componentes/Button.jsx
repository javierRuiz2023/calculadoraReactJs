import { useAppContext } from "./CalculatorState"

export const Button = ({type, value}) => {
    const calculator = useAppContext()
    
    function handleClick(){
     switch (type) {
        case "number":
                calculator.addNumber(parseInt(value))
            break;
        case "operator":
            calculator.addOperation(value)
            break
        case "action":
            calculator.executeAction(value)
            break
        default:
            break;
     }
    }
  return (
    <button
    className="calulatorButton" 
    onClick={handleClick}
    >{value}</button>
  )
}


