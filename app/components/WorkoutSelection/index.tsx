import { workouts } from "@/data/workouts"
import WorkoutCard from "../WorkoutCard"
import {Workout} from "@/types/workout"

type WorkoutCardProps = {
  handleClick: (workout: Workout) => void
}

const WorkoutSelection = ({handleClick}: WorkoutCardProps) => {
  return(
    <div data-testid="workout-selection">
      <h2>Choose your workout</h2>

      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} handleClick={handleClick} />
      ))}
      
    </div>
  )
}

export default WorkoutSelection