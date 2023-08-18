import { useState } from 'react'

import './index.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-center p-4">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
