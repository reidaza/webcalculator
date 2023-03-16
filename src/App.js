import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [resul, setResul] = useState('');
  const [tema, setTema] = useState(false);
  const [sol, setSol] = useState('🌙');

  //cambiar color
  const changetheme=()=>{
    setTema(!tema);
    setSol(!sol);
  }

  //logica
  const resultado=(e)=>{
    setResul(resul.concat(e.target.name));
    //console.log(e.target.value); //Me guarda el actual
    //console.log(resul); //Me muestra el que esta en memoria   
  }

  const clear =()=>{
    setResul('');
  }

  const calcular = ()=>{
    try{
      setResul(eval(resul).toString());
    }catch{
      setResul('Err Operacion invalida');
    }
  }
  return (
     <div className='cajaCalcu'>
        <div className={tema ? 'cajaResul': 'cajaresulDark'}>
          <form >
            <input className={tema ? 'resul' : 'resulDark'} type='text' value={resul}/>
          </form>
        </div>

        <div className='cajaItem'>
          <button className={tema ? 'btntema' :'btnclear'} onClick={clear} id='clear'>C</button>
          <button className={tema ? 'btntema': 'temaDark'} onClick={changetheme} id='clear'>{sol ? '☀️': '🌙'}</button>
          <button className={tema ? 'operacion btntema':'temaDark'} name='%' onClick={resultado}>%</button>
          <button className={tema ? 'operacion' : 'operacionDark'} name='+'  onClick={resultado}>+</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='1'  onClick={resultado}>1</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='2'  onClick={resultado}>2</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='3'  onClick={resultado}>3</button>
          <button className={tema ? 'operacion' : 'operacionDark'} name='-'  onClick={resultado}>-</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='4'  onClick={resultado}>4</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='5'  onClick={resultado}>5</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='6'  onClick={resultado}>6</button>
          <button className={tema ? 'operacion' : 'operacionDark'} name='*'  onClick={resultado}>&times;</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='7' onClick={resultado}>7</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='8'  onClick={resultado}>8</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='9'  onClick={resultado}>9</button>
          <button className={tema ? 'operacion' : 'operacionDark'} name='/' onClick={resultado}>/</button>
          <button className={tema ? 'item cero' : 'Darkcero'} name='0'  onClick={resultado}>0</button>
          <button className={tema ? 'item btntema' : 'temaDark'} name='.'  onClick={resultado}>.</button>
          <button className='btnIgual' onClick={calcular}>=</button>
        </div>
    </div>
  )
}

export default App
