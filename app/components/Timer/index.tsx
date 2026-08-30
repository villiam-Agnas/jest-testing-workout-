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
    <div className="text-center">
      <p className="text-7xl font-bold text-white">{time}</p>

      {time === 0 ? (
        <>
          <p className="mt-4 text-3xl font-bold text-white">You did it</p>
          <button className="mt-4 cursor-pointer rounded-lg border-2 border-black bg-cyan-100 p-2 text-xl" onClick={reset}>Reset</button>
        </>
      ) : (
        <button className="mt-4 cursor-pointer rounded-lg border-2 border-black bg-cyan-100 p-2 text-xl" onClick={() => setStarted(true)}>
          {started ? "Lets go" : "Start"}
        </button>
      )}
    </div>
  )
}

export default Timer