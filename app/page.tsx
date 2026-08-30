"use client";

import { useState } from "react";
import Header from "./components/Header";
import WorkoutSelection from "./components/WorkoutSelection";
import { Workout } from "@/types/workout";
import ActiveWorkout from "./components/ActiveWorkout";

export default function Home() {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const handleClick = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {selectedWorkout ? (
        <ActiveWorkout
          workout={selectedWorkout}
          goBack={() => setSelectedWorkout(null)}
        />
      ) : (
        <WorkoutSelection handleClick={handleClick} />
      )}
    </div>
  );
}
