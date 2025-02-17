import { useRef, useState } from 'react'
import './App.css'
import Prompt from './Prompt';
import Tela from './Tela';

function App() {
  const [estadoContador, setEstadoContador] = useState(0);
  let variavelContador = 0;
  const refContador = useRef(0);

  return (
    <>
    
    <div>
      <Prompt/>
    </div>

    <div>
      <Tela></Tela>
    </div>

      <div>
        <button onClick={() => {
          setEstadoContador((count) => count + 1);
          console.log("estadoContador", estadoContador);
        }}>
          estadoContado {estadoContador}
        </button>
        <button onClick={() => {
          variavelContador += 1;
          console.log("variavelContador", variavelContador);
        }}>
          variavelContador {variavelContador}(!)
        </button>
        <button onClick={() => {
          refContador.current += 1;
          console.log("refContador", refContador.current);
        }}>
          refContador {refContador.current}(!)
        </button>
      </div>
    </>
  )
}

export default App
