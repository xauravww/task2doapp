import logo from "./logo.svg"
import "./App.css"

import Tasks from "./components/Tasks"
import BottomBar from "./components/BottomBar"
function App() {
  return (
    <div className="main">
      <Tasks />
      <BottomBar />
    </div>
  )
}

export default App
