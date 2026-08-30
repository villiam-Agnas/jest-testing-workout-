"use client"

import { Workout } from "@/types/workout"
import Timer from "../Timer"

type ActiveWorkoutProps = {
  workout: Workout
  goBack: () => void
}

const ActiveWorkout = ({workout, goBack}: ActiveWorkoutProps) => {
  return(
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-4">
      <div className="w-[90%] rounded-xl border-2 border-black bg-cyan-800 p-6 text-center md:w-[50%]">
        <h2 className="text-4xl font-bold text-white">{workout.name}</h2>

        <Timer startTime={workout.workTime} />

        <button className="mt-6 cursor-pointer rounded-lg border-2 border-black bg-cyan-100 p-2 text-xl" onClick={goBack}>Go Back</button>

      </div>
    </div>
  )
}

export default ActiveWorkout