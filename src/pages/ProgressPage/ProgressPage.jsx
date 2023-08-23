import { useState } from "react";
import ProgressForm from "../../components/ProgressForm/ProgressForm";

export default function ProgressPage() {
  const [progresses, setProgresses] = useState([]);

  const addProgress = (newProgress) => {
    console.log("new Progress Data:", newProgress);
    setProgresses([...progresses, newProgress]);
  };

  return(
    <>
      <h1>Personal Progress Form</h1>
      <ProgressForm onSubmit={addProgress} />

      <div>
        <h2>Progress</h2>
        {progresses.map((progress, index) => (
          <div key={index}>
            <p>Date: {progress.date}</p>
            <p>Exercise: {progress.exercise}</p>
            <p>Weight: {progress.weight}</p>
            <p>Description: {progress.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}