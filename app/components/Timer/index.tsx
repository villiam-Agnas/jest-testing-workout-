"use client"

import { useEffect, useState } from "react"

const Timer = ({ startTime }: { startTime: number }) => {
  const [time, setTime] = useState(startTime)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started || time === 0) return

    const timer = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [started, time])

  const reset = () => {
    setTime(startTime)
    setStarted(false)
  }

  return (
    <div>
      <p>{time}</p>

      {time === 0 ? (
        <>
          <p>You did it</p>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <button onClick={() => setStarted(true)}>
          {started ? "Lets go" : "Start"}
        </button>
      )}
    </div>
  )
}

export default Timer