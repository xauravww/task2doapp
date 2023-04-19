import React, { useState, useEffect } from "react"
import "./styling/Timer.css"

const Timer = () => {
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes")) || 0
  )
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || 0
  )
  const [milliseconds, setMilliseconds] = useState(
    parseInt(localStorage.getItem("milliseconds")) || 0
  )
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    let intervalId
    if (!isPaused) {
      intervalId = setInterval(() => {
        setMilliseconds((prev) => prev + 10)
      }, 10)
    }

    return () => clearInterval(intervalId)
  }, [isPaused])

  useEffect(() => {
    if (milliseconds >= 1000) {
      setSeconds((prev) => prev + 1)
      setMilliseconds(0)
    }
  }, [milliseconds])

  useEffect(() => {
    if (seconds >= 60) {
      setMinutes((prev) => prev + 1)
      setSeconds(0)
    }
  }, [seconds])

  useEffect(() => {
    localStorage.setItem("minutes", minutes)
    localStorage.setItem("seconds", seconds)
    localStorage.setItem("milliseconds", milliseconds)
  }, [minutes, seconds, milliseconds])

  const formatTime = (value) => {
    return value.toString().padStart(2, "0")
  }

  const formattedTime = `${formatTime(minutes)}:${formatTime(
    seconds
  )}:${formatTime(Math.floor(milliseconds / 10))}`

  const handlePauseClick = () => {
    setIsPaused(!isPaused)
  }

  return (
    <>
      <div className="timer">{formattedTime}</div>

      {!isPaused && (
        <button className="pauseButton" onClick={handlePauseClick}>
          Pause
        </button>
      )}
      {isPaused && (
        <>
          <button className="continueButton" onClick={handlePauseClick}>
            Continue
          </button>
          <button className="exitButton" onClick={() => window.close()}>
            Exit
          </button>
        </>
      )}
    </>
  )
}

export default Timer
