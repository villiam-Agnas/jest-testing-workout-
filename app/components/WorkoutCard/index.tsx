"use client"

import {Workout} from "@/types/workout"

type WorkoutCardProps = {
  workout: Workout
  handleClick: (workout: Workout) => void
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {
  return(
    <div data-testid="workout-card" className="w-[80%] rounded-xl border-2 border-black bg-cyan-800 p-4 text-center md:w-[40%]">
      <h3 className="text-3xl text-white">{workout.name}</h3>

      <p data-testid="workout-time" className="text-xl text-white mt-2 mb-2">
        Work time: {workout.workTime} seconds
      </p>

      <button className="cursor-pointer rounded-lg border-2 border-black bg-cyan-100 text-xl p-2" onClick={() => handleClick(workout)}>
        Start workout
      </button>
    </div>
  )
}

export default WorkoutCard