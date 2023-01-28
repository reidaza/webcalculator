import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [resul, setResul] = useState('');
  const resultado=(e)=>{
    setResul(resul + e.target.value);
    if(e.target.value === 'C'){
      setResul('');
    }
  }

  const botones=[
    {valor: 'C'},
    {valor: '+-'},
    {valor: '%'},
    {valor: '+'},
    {valor: 1},
    {valor: 2},
    {valor: 3},
    {valor: '-'},
    {valor: 4},
    {valor: 5},
    {valor: 6},
    {valor: 'X'},
    {valor: 7},
    {valor: 8},
    {valor: 9},
    {valor: '/'},
    {valor: 0},
    {valor: '.'},


  ]
  
  return (
    <section className='fondo'>
      <div className='cajaCalcu'>
        <div className='cajaResul'>
          <input className='historial' value={''}/>
          <input  className='resul' value={resul}/>
        </div>
        <div className='cajaItem'>
          
          {botones.map(elemento=>(
            <button onClick={resultado} value={elemento.valor} className='item'>{elemento.valor}</button>
          ))}
          <button onClick={resultado} className='btnIgual'>=</button>
        </div>
      </div>
    </section>
  )
}

export default App
