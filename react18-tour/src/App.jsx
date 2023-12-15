import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import BaseLayout from './layout/BaseLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BaseLayout />
    </div>
  )
}

export default App
