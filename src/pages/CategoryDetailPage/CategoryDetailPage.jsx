import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
                setExercises(data.results);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }
        fetchExercises();
    }, [API_KEY, API_URL, categoryId]);

    return (
        <>
            <h1>Exercises for Category</h1>
            <div className="category-container">
                {exercises.map((exercise) => (
                    <Link
                        key={exercise.id}
                        className="category-card-link"
                        to={`/exercise/${exercise.id}`}
                    >
                        <div className="category-card">
                            <h2>{exercise.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}