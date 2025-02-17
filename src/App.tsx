import { useState } from 'react'
import './App.css'

function App() {
  const [estadoContador, setEstadoContador] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setEstadoContador((count) => count + 1)}>
          estadoContado {estadoContador}
        </button>
      </div>
    </>
  )
}

export default App
