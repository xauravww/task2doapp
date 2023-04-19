import React from "react"
import "./styling/Tasks.css"
import { useState } from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState(new Set())

  const [showTaskList, setShowTaskList] = useState(false)
  const [showCompletedList, setShowCompletedList] = useState(false)

  const addTask = () => {
    const input = document.querySelector(".inputClass")
    console.log(input.value)
    if (input.value === "") {
      return null
    }
    setTasks([...tasks, input.value])
    input.value = ""
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index))
    setCompletedTasks((prev) => {
      prev.delete(index)
      return new Set(prev)
    })
  }

  const toggleCompleted = (index) => {
    setCompletedTasks((prev) => {
      const set = new Set(prev)
      if (set.has(index)) {
        set.delete(index)
      } else {
        set.add(index)
      }
      return set
    })
  }

  const completedTasksArray = [...completedTasks]
  const completedTasksList = tasks.filter((task, index) =>
    completedTasksArray.includes(index)
  )

  return (
    <div className="container">
      <input className="inputClass" type="text" />
      <button onClick={addTask}> Add</button>
      <div onClick={() => setShowTaskList((prev) => !prev)}>
        Task List
        {showTaskList ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </div>
      {showTaskList && (
        <div className="tasks">
          <ul>
            {tasks.map(
              (task, index) =>
                !completedTasks.has(index) && (
                  <li className="list" key={index}>
                    <input
                      type="checkbox"
                      checked={completedTasks.has(index)}
                      onChange={() => toggleCompleted(index)}
                    />
                    <div>{task}</div>
                    <div className="cross" onClick={() => deleteTask(index)}>
                      <RxCross2 />
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
      <div onClick={() => setShowCompletedList((prev) => !prev)}>
        Completed Tasks
        {showCompletedList ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </div>
      {showCompletedList && (
        <div className="tasks">
          <ul>
            {completedTasksList.map((task, index) => (
              <li className="completed list" key={task}>
                <div>{task}</div>
                <div className="cross" onClick={() => deleteTask(index)}>
                  <RxCross2 />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Tasks
