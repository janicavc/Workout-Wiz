import { useState, useEffect } from "react";
import ProgressForm from "../../components/ProgressForm/ProgressForm";
import { createProgress, getProgress } from "../../utilities/progress-api";
import './ProgressPage.css';

export default function ProgressPage() {
  const [progresses, setProgresses] = useState([]);

  useEffect(() => {
    async function fetchProgressData() {
      try {
        const data = await getProgress(); // Fetch progress data using the new API function
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setProgresses(data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    }

    fetchProgressData();
  }, []);

  const addProgress = async (newProgress) => {
    console.log('new Progress Data:', newProgress);

    try {
      const createdProgress = await createProgress(newProgress);
      setProgresses([...progresses, createdProgress]);
    } catch (error) {
      console.error('Error saving progress', error);
    }
  };

  return (
    <>
      <h1>Personal Progress Form</h1>
      <ProgressForm onSubmit={addProgress} />

      <div>
        <h2>Progress</h2>
        {progresses.map((progress, index) => (
          <div className='progress-cards' key={index}>
            <div className='progress-text'>
            <p className="progress-text">Date: {progress.date}</p>
            <p className="progress-text">Exercise: {progress.exercise}</p>
            <p className="progress-text">Weight: {progress.weight}</p>
            <p className="progress-text">Description: {progress.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
