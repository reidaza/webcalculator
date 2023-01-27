import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [resul, setResul] = useState('');
  const resultado=(e)=>{
    setResul(resul + e.target.value);
  }

  const borrar=()=>{
    setResul('');
  }


  
  return (
    <section className='fondo'>
      <div className='cajaCalcu'>
        <div className='cajaResul'>
          <input className='historial' value={''}/>
          <input  className='resul' value={resul}/>
        </div>
        <div className='cajaItem'>
          <button onClick={borrar} className='item'>C</button>
          <button onClick={resultado} className='item'>+-</button>
          <button onClick={resultado} className='item'>%</button>
          <button onClick={resultado} className='item'>+</button>
          <button onClick={resultado} className='item' value={1}>1</button>
          <button onClick={resultado} className='item' value={2}>2</button>
          <button onClick={resultado} className='item' value={3}>3</button>
          <button onClick={resultado} className='item'>-</button>
          <button onClick={resultado} className='item' value={4}>4</button>
          <button onClick={resultado} className='item' value={5}>5</button>
          <button onClick={resultado} className='item' value={6}>6</button>
          <button onClick={resultado} className='item'>X</button>
          <button onClick={resultado} className='item' value={7}>7</button>
          <button onClick={resultado} className='item' value={8}>8</button>
          <button onClick={resultado} className='item' value={9}>9</button>
          <button onClick={resultado} className='item'>/</button>
          <button onClick={resultado} className='item' value={0}>0</button>
          <button onClick={resultado} className='item'>.</button>
          <button onClick={resultado} className='item'>=</button>
          <button onClick={resultado} className='item'>🌙</button>
        </div>
      </div>
    </section>
  )
}

export default App
