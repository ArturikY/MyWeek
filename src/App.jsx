import Day from "./components/Day"

import '../src/assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <h1>My Week</h1>
      <div className="days-container">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}

export default App
