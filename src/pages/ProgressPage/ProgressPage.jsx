import { useState } from "react";
import ProgressForm from "../../components/ProgressForm/ProgressForm";
import { createProgress } from "../../utilities/progress-api";

export default function ProgressPage() {
  const [progresses, setProgresses] = useState([]);


    // async function fetchProgressData() {
    //   try {
    //     const response = await fetch('/api/progress');
    //     const data = await response.json();
    //     setProgresses(data);
    //   } catch (error) {
    //     console.error('Error fetching progress data:', error);
    //   }
    // }

    // useEffect(() => {
    //   fetchProgressData();
    // }, []);

  const addProgress = async (newProgress) => {
    console.log("new Progress Data:", newProgress);
    setProgresses([...progresses, newProgress]);

    try {
      await createProgress(newProgress);
      // fetchProgressData();
    } catch (error) {
      console.error('Error saving progress', error);
    }
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