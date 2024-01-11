import { Container , Content } from "./styles.js"
import Input from './components/Input';
import { Button , ButtonEqual} from "./components/Button/styles.js"
import { useState } from "react"


function App() {
  const [currentNumber , setCurrentNumber] = useState('0');
  const [firstNumber , setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }

  const handlePowerNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('^');
    } else {
      const power = Number(firstNumber) ** Number(currentNumber);
      setCurrentNumber(String(power));
      setOperation('');
    }
  }

  const handleMedNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const percentage = (Number(firstNumber) + Number(currentNumber)) / 2;
      setCurrentNumber(String(percentage));
      setOperation('');
    }
  }

  function closeWin() {
    window.close();
  }
  
  
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          case '^':
            handlePowerNumbers();
            break;
          case '%':
            handleMedNumbers();
            break;
          default: 
            break;
        }
    }

  }


  return (
    <Container> 
      <Content>
        <Input value={currentNumber}></Input>
        <Button onClick={handleOnClear}> C </Button>
        <ButtonEqual onClick={handleMedNumbers}> MÉD </ButtonEqual>
        <Button onClick={handleDivideNumbers}> / </Button>
        <br></br>
        <Button onClick={() => handleAddNumber('7')}> 7 </Button>
        <Button onClick={() => handleAddNumber('8')}> 8 </Button>
        <Button onClick={() => handleAddNumber('9')}> 9 </Button>
        <Button onClick={handleMultiplyNumbers}> x </Button>
        <br></br>
        <Button onClick={() => handleAddNumber('4')}> 4 </Button>
        <Button onClick={() => handleAddNumber('5')}> 5 </Button>
        <Button onClick={() => handleAddNumber('6')}> 6 </Button>
        <Button onClick={handleMinusNumbers}> - </Button>
        <br></br>
        <Button onClick={() => handleAddNumber('1')}> 1 </Button>
        <Button onClick={() => handleAddNumber('2')}> 2 </Button>
        <Button onClick={() => handleAddNumber('3')}> 3 </Button>
        <Button onClick={handleSumNumbers}> + </Button>
        <br></br>
        <Button onClick={closeWin}> EXIT </Button>
        <Button onClick={handlePowerNumbers}> y^z </Button>
        <ButtonEqual onClick={handleEquals}> = </ButtonEqual>
      </Content>
    </Container>
  );
}

export default App;

