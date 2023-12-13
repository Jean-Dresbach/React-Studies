import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Modal } from "./Modal"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          value={name}
          id="name"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label htmlFor="name">Seu nome é {name}</label>
        <p>Sua idade é {age}</p>
        <button onClick={() => setAge(age + 1)}>Incrementar idade</button>
        <Modal />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
