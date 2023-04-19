import React from "react"
import "./styling/BottomBar.css"
import { BsBoundingBox } from "react-icons/bs"
import { BsCalendar2CheckFill } from "react-icons/bs"
import { BsSmartwatch } from "react-icons/bs"
import { SiLoop } from "react-icons/si"
import { AiOutlineCheckSquare } from "react-icons/ai"

import { useNavigate } from "react-router-dom"
import Stopwatch from "./Timer"
const BottomBar = () => {
  const navigate = useNavigate()
  const handleClick = (route) => {
    if (route === "tasks") {
      navigate("/")
    } else if (route === "timer") {
      navigate("/timer")
    } else if (route === "calendar") {
      navigate("/calendar")
    } else if (route === "habits") {
      navigate("/habits")
    } else if (route === "matrix") {
      navigate("/matrix")
    } else {
      navigate("/")
    }
  }
  return (
    <div className="bar">
      <div>
        <AiOutlineCheckSquare onClick={() => handleClick("tasks")} />
      </div>
      <div>
        <BsSmartwatch onClick={() => handleClick("timer")} />
      </div>
      <div>
        <BsCalendar2CheckFill onClick={() => handleClick("calendar")} />
      </div>
      <div>
        <SiLoop onClick={() => handleClick("habits")} />
      </div>
      <div>
        <BsBoundingBox onClick={() => handleClick("matrix")} />
      </div>
    </div>
  )
}

export default BottomBar
