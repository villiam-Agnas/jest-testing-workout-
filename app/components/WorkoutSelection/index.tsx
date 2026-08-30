"use client"

import { workouts } from "@/data/workouts"
import WorkoutCard from "../WorkoutCard"
import {Workout} from "@/types/workout"

type WorkoutCardProps = {
  handleClick: (workout: Workout) => void
}

const WorkoutSelection = ({handleClick}: WorkoutCardProps) => {
  return(
    <div>
      <h2 className="text-3xl m-6 text-center">Choose your workout</h2>
      <div data-testid="workout-selection" className="flex flex-wrap justify-center gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} handleClick={handleClick} />
        ))}
        
      </div>
    </div>
  )
}

export default WorkoutSelection