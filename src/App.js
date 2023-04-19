import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Tasks from "./components/Tasks"
import BottomBar from "./components/BottomBar"
import Timer from "./components/Timer"
import Matrix from "./components/Matrix.jsx"
import Habits from "./components/Habits.jsx"
import Calendar from "./components/Calendar.jsx"

function App() {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Tasks />} />

        <Route path="/timer" element={<Timer />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>

      <BottomBar />
    </div>
  )
}

export default App
