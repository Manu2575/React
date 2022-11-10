import { useState, useEffect } from 'react';
import './App.css';
import { format } from 'date-fns'

let inicio
const VINTE_CINCO_MINUTOS = 60 * 25
const CINCO_MINUTOS = 60 * 5
const CINQUENTA_NOVE_MINUTOS = 3540

function App() {
  const [periodTime, setPeriodTime] = useState(VINTE_CINCO_MINUTOS);
  const [shortPause, setShortPause] = useState(CINCO_MINUTOS);
  const [ baseTime, setBaseTime ] = useState(periodTime);
  const [timer, setTimer] = useState(baseTime);
  const [ timeLeft, setTimeLeft ] = useState(format(baseTime * 1000, 'mm:ss'));
  const [ isActive, setIsActive ] = useState(false);
  const [ storeTimeOut, setStoreTimeOut ] = useState(null);

  function minhaFuncao(){
    inicio = setInterval(pomodoro,50)
  }
  function pomodoro(){
    setTimer((valorAtualizadoDeTimer) => {
      setTimeLeft(format((valorAtualizadoDeTimer -1) * 1000, 'mm:ss')) 
      return valorAtualizadoDeTimer -1
    })
  }
  function pararFuncao(){
    clearInterval(inicio)
  }
useEffect(() =>{
  if(timer !== 0){
    return 
  }

  if(baseTime === shortPause){
    setBaseTime(periodTime)
    clearInterval(inicio)
  } else if(baseTime === periodTime){
    setBaseTime(shortPause)
    clearInterval(inicio)
  }
},[timer])

useEffect(() =>{
  padraoFabrica()
},[])


useEffect(() =>{
  resetTime()
}, [baseTime])

function padraoFabrica(){
  setPeriodTime(VINTE_CINCO_MINUTOS)
  setShortPause(CINCO_MINUTOS)
  resetTime(VINTE_CINCO_MINUTOS)
}

function resetTime (bugTimer = baseTime) {
  clearInterval(inicio)
  setTimer(bugTimer)
  setTimeLeft(format(bugTimer * 1000, 'mm:ss'))
}

useEffect(() => {
  if(timer == 0){
  (function notifyMe() {
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification("O tempo acabou!");
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("O tempo acabou!");
        }
      });
    }
  })()}
},[timer])
  return (
    <div className="App">
      <h1 className="App-h1">Pomodoro Timer</h1>
      <header className="App-header">
        <h2 className="App-header-h2">Session
        <button onClick={() => {padraoFabrica()}}>🌐Config de Fábrica</button>
        </h2>
        <span className="App-header-span">
          {timeLeft}
        </span>
        <a className="App-header-a">
          <button onClick={() => {minhaFuncao()}}>▶️Start</button>
          <button onClick={() => {resetTime()}}>🔁Reset</button>
          <button onClick={() => {pararFuncao()}}>⏸️Pause</button>
        </a>
      </header>
      <main className="App-main">
        <table>
            <button onClick={() => { setBaseTime(periodTime) }}>Session Length</button>
            <button onClick={() => { setBaseTime(shortPause) }}>Break Length</button>
        </table>
      </main>
      <footer className='App-footer'>
        <div className='App-footer-div'>
        <span 
          onClick={() => {
            if(periodTime !== CINQUENTA_NOVE_MINUTOS){
              setPeriodTime(periodTime + 60)
            }
          }}
        >
          ⬆️
        </span>
        {format(periodTime*1000, "mm:ss")} min
        <span onClick={() => setPeriodTime((periodTime - 60) || 60 )}>
          ⬇️
        </span>
        <span 
          onClick={() => {
            if(shortPause !== CINQUENTA_NOVE_MINUTOS){
              setShortPause(shortPause + 60 )
            } 
          }}
        >
          ⬆️
        </span>
        {format(shortPause*1000, "mm:ss")} min
        <span onClick={() => setShortPause((shortPause - 60) || 60 )}>
          ⬇️
        </span>
        </div>
        </footer>
    </div>
  );
}

export default App;
