import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Tasks from "./components/Tasks"
import BottomBar from "./components/BottomBar"
import Timer from "./components/Timer"
function App() {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Tasks />} />

        <Route path="/timer" element={<Timer />} />
      </Routes>

      <BottomBar />
    </div>
  )
}

export default App
