import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './CategoryDetailPage.css';
import Dropdown from "../../components/Dropdown/Dropdown";

function stripHtmlTags(html) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || '';
}

export default function CategoryDetailPage() {
    const { categoryId } = useParams();
    const [exercises, setExercises] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = 'https://wger.de/api/v2/';

    useEffect(() => {
        async function fetchExercises() {
            try {
                const response = await fetch(`${API_URL}exercise/?category=${categoryId}&language=2`, {
                    headers: {
                        Authorization: `Token ${API_KEY}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                // take out implemented html tags from api
                const cleanDescription = data.results.map((exercise) => ({
                    ...exercise,
                    description: stripHtmlTags(exercise.description),
                }));
                setExercises(cleanDescription);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }
        fetchExercises();
    }, [API_KEY, API_URL, categoryId]);

    return (
        <>
            <h1>Exercises</h1>
            <div className="exercise-container">
                {exercises.map((exercise) => (
                    <div
                        key={exercise.id}
                        className="exercise-card"
                        to={`/exercise/${exercise.id}`}
                    >
                        <div className="exercise-card-info">
                            <h2 className="exercise-name">{exercise.name}</h2>
                            <Dropdown description={exercise.description} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}