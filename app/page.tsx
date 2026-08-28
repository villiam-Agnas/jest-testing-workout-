"use client"

import { useState } from "react";
import Header from "./components/Header";
import WorkoutSelection from "./components/WorkoutSelection";
import { Workout } from "@/types/workout";

export default function Home() {

  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null)

  const handleClick = (workout: Workout) => {
    setSelectedWorkout(workout)
  }

  return (
    <div className="">
      <Header />
      <WorkoutSelection handleClick={handleClick} />
    </div>
  );
}
