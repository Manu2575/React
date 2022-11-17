import { useState, useEffect } from 'react';
import './App.css';


const VISOR_INICIAL = 0

function App() {
 
  const [ calcLeft, setCalcLeft ] = useState(VISOR_INICIAL);
  const [ oldcalcLeft, setOldcalcLeft ] = useState(VISOR_INICIAL);
  const [ operator, setOperator ] = useState();
  const [ operatorResult, setOperatorResult ] = useState(false);
  const [ result, setResult ] = useState(false);
  const [ memory, setMemory ] = useState(VISOR_INICIAL);

  console.log(calcLeft)
  console.log(oldcalcLeft)
  console.log(result)
  console.log(operatorResult)

  // funcao que manipula o ponto no visor
  function inputScore(e) {
    let input = e.target.value;

    if (!calcLeft.toString().includes(".")) {
      setCalcLeft(calcLeft + input);
    }
  }

   // funcao que manipula o zero no visor
  function inputZero(e) {
    let input = e.target.value;
    if(calcLeft === 0 && oldcalcLeft === 0){
      setCalcLeft(input.pop());
    } else if(calcLeft !== 0 && oldcalcLeft === 0 && operatorResult === true){
      setCalcLeft(VISOR_INICIAL);
      setOperatorResult(false);
    } else if(calcLeft === 0 && oldcalcLeft === 0 && operatorResult === false){
      setCalcLeft(input.pop());
    }else{
      setCalcLeft(calcLeft+input);
    }
  }

  // Funcao que aplica os numeros no visor
  function inputNum(e) {
    let input = e.target.value;
    if(calcLeft === 0){
      setCalcLeft(input); 
    } else if(calcLeft !== 0 && operatorResult === true){
      setCalcLeft(input);
      setOperatorResult(false);
    }  else if(calcLeft === 0 && operatorResult === true){
      setCalcLeft(input);
      setOperatorResult(false);
    } else if(calcLeft === undefined){
      setCalcLeft(input);  
    } else if(calcLeft === 0 && result === true){
      setCalcLeft(input);  
    } else {
      setCalcLeft(calcLeft + input);
    }
  }

  //M+ serve para você colocar um número na memória
  function memoryPositive(){
    setMemory(parseFloat(memory) + parseFloat(calcLeft));
    setCalcLeft(VISOR_INICIAL);
  }

  //M- serve para você subtrair um número na memória
  function memoryNegative(){
    setMemory(memory - calcLeft);
    setCalcLeft(VISOR_INICIAL);
  }

  //MR serve para você exibir o que está na memória
  function memoryResult(){
    setCalcLeft(memory);
  }

  //MC serve para você apagar o que está na memória
  function memoryDelet(){
    setMemory(VISOR_INICIAL);
    setCalcLeft(VISOR_INICIAL);
    setOperatorResult(false);
  }
  //Funcao que guarda a operacao aritmetica e modifica a posicao no valor 
  function operatorHandler(e){
    let operatorInput=e.target.value;
    if(operator === '/' && result === true){
      setOperator(operatorInput);
      setOldcalcLeft(oldcalcLeft / calcLeft);
      setCalcLeft(VISOR_INICIAL);
    }else if(operator === 'X' && result === true){
      setOperator(operatorInput);
      setOldcalcLeft(oldcalcLeft * calcLeft);
      setCalcLeft(VISOR_INICIAL);
    }else if(operator === '-' && result === true){
      setOperator(operatorInput);
      setOldcalcLeft(oldcalcLeft - calcLeft);
      setCalcLeft(VISOR_INICIAL);
    }else if(operator === '+' && result === true){
      setOperator(operatorInput);
      setOldcalcLeft(parseFloat(oldcalcLeft) + parseFloat(calcLeft));
      setCalcLeft(VISOR_INICIAL);
    }else {
      setOperator(operatorInput);
      setOldcalcLeft(calcLeft);
      setCalcLeft(VISOR_INICIAL);
      setResult(true);
      setOperatorResult(false);
    }
    
  }
  //Funcao que da o resultado
  function calculate(){
    if(operator === '/') {
      setCalcLeft(oldcalcLeft / calcLeft);
      setOldcalcLeft(VISOR_INICIAL);
      setOperatorResult(true);
      setResult(false);
    }if(operator === 'X') {
      setCalcLeft(oldcalcLeft * calcLeft);
      setOldcalcLeft(VISOR_INICIAL);
      setOperatorResult(true);
      setResult(false);
    }if(operator === '-') {
      setCalcLeft(oldcalcLeft - calcLeft);
      setOldcalcLeft(VISOR_INICIAL);
      setOperatorResult(true);
      setResult(false);
    }if(operator === '+') {
      setCalcLeft(parseFloat(oldcalcLeft) + parseFloat(calcLeft));
      setOldcalcLeft(VISOR_INICIAL);
      setOperatorResult(true);
      setResult(false);
    }
  }

  function raizQuadrada(bugCalc = calcLeft){
    setCalcLeft(Math.sqrt(bugCalc));
  };

  function coseno(bugCalc = calcLeft){
    setCalcLeft(Math.cos(bugCalc));
  };

  function porcentual(bugCalc = calcLeft){
    setCalcLeft(bugCalc/100);
  };

  function limpa(){
    setCalcLeft(VISOR_INICIAL);
  };

  function cancelar(){
    setCalcLeft(VISOR_INICIAL);
    setOldcalcLeft(VISOR_INICIAL);
    setOperatorResult(false);
    setResult(false);
  };

  return (
  <div className="App">
    <h1 className="App-h1">Calculadora Inteligente</h1>
    <header className="App-header">
      <span className="App-header-span">
        <input value={calcLeft}/>
      </span>
    </header>
    <main className="App-main">
      <div className='App-main-div'>
        <div>
          <button onClick={() => {memoryDelet()}}>MC</button>
          <button onClick={() => {memoryResult()}}>MR</button>
          <button onClick={() => {memoryNegative()}}>M-</button>
          <button onClick={() => {memoryPositive()}}>M+</button>
          <button onClick={() => {raizQuadrada()}}>√</button>
        </div>
        <div>
          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={() => {cancelar() }}>CE</button>
          <button onClick={() => {limpa() }}>C</button>
        </div>
        <div>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={operatorHandler} value='X'>X</button>
          <button onClick={() => {porcentual() }}>%</button>
        </div>
        <div>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={operatorHandler} value='-'>-</button>  
          <button onClick={operatorHandler} value='/'>/</button>
        </div>
        <div>
          <button onClick={inputZero} value={0}>0</button>
          <button onClick={inputScore} value={'.'}>.</button>
          <button onClick={() => {coseno() }}>Cos</button>
          <button onClick={operatorHandler} value='+'>+</button>
          <button onClick={() => {calculate()}}>=</button>
        </div>
      </div>
    </main>
    <footer className='App-footer'>
      <h2 className='App-footer-h2'>
      "ABRA A MENTE COM A CALCULADORA INTELIGENTE"
      </h2>
    </footer>
  </div>
  );
}

export default App;
