import { createContext, memo, useContext, useState } from "react";

const AppContext = createContext({
  // estados
  memory: null,
  operation: null,
  currentValue: 0,
  isDecimal: false,
  //metodos
  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
  executeAction: (action) => {},
});

export const CalculatorState = ({ children }) => {
  const [memory, setmemory] = useState(null);
  const [operation, setoperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false)
  
  //Here we handle the numbers on the calculator
  function handleAddNumber(value) {
    if (isReset) {
        if(value === "."){
            setIsDecimal(true)
        }else{
            const point = isDecimal ? `.` : ``
            const newValue = currentValue.toString() + point + value.toString()
            setCurrentValue(parseFloat(newValue));
            setIsReset(false)
            setIsDecimal(false)
        }
     
    } else {
        if(value === "."){
            setIsDecimal(true)
        }else{
            const point = isDecimal ? `.` : ``
            const newValue = currentValue.toString() + point + value.toString()
            setIsDecimal(false)
            setCurrentValue(parseFloat(newValue));
        }
  
    }
  }
  //Here we manage the operations
  function handleAddOperation(op) {
    if (currentValue) {
      if (operation) {
        handleGetResult();
        setoperation(op);
      } else {
        setoperation(op);
        setmemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
      }
    }
  }
  //Here we manage the result
  function    handleGetResult() {
    let result = 0;
    if (currentValue && operation && memory) {
      switch (operation) {
        case "+":
          result = parseFloat(currentValue) + parseFloat(memory);
          break;
        case "-":
          result = parseFloat(memory) - parseFloat(currentValue);
          break;
        case "*":
          result = parseFloat(currentValue) * parseFloat(memory);
          break;
        case "/":
          result = parseFloat(memory) / parseFloat(currentValue);
          break;
        case "%":
          result = (parseFloat(memory) / 100) * parseFloat(currentValue);
          break;
        default:
      }
      setCurrentValue(result);
      setoperation(null);
      setmemory(result);
      setIsReset(true);
      setIsDecimal(false)
    }
  }

  function clean() {
    setCurrentValue(0);
    setoperation(null);
    setmemory(0);
    setIsReset(true);
    setIsDecimal(false)
  }

  function deleteNumber() {
    const index = currentValue.toString().indexOf(".")
    if(index > 0){ //decimal number
        const numberOfDecimals = currentValue.toString().slice(index + 1).length
        if(numberOfDecimals === 1){
            const min = Math.floor(currentValue)
            setCurrentValue(min)
        }else{
            const newNumber = parseFloat(currentValue).toFixed(numberOfDecimals - 1) 
            setCurrentValue(newNumber)
        }
    }else{
         setCurrentValue(parseInt(currentValue / 10));
    }
   
  }

  function changeSign() {
    setCurrentValue(currentValue * -1);
  }
  function convertToFloat(){
    if(currentValue.toString().indexOf(".")>0){

    }else{
        handleAddNumber(".")
    }
  }

  function handleExecuteAction(action) {
    switch (action) {
      case "=":
        handleGetResult();
        break;
      case "AC":
        clean();
        break;

      case "<==":
        deleteNumber();
        break;

      case "+/-":
        changeSign();
        break;
      case ".":
        convertToFloat();
        break;
      default:
    }
  }
  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        isDecimal,
        addNumber: handleAddNumber,
        addOperation: handleAddOperation,
        getResult: handleGetResult,
        executeAction: handleExecuteAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
