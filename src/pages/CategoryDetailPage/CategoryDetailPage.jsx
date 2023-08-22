import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
                const response = await fetch(`${API_URL}exercise/?category=${categoryId}`, {
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
            <div className="category-container">
                {exercises.map((exercise) => (
                    <div
                        key={exercise.id}
                        className="category-card-link"
                        to={`/exercise/${exercise.id}`}
                    >
                        <div className="category-card">
                            <h2>{exercise.name}</h2>
                            <p>{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}