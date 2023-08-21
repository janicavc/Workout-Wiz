import React, { useEffect, useState } from 'react';

export default function ExerciseCategoryPage() {
    const [categories, setCategories] = useState([]);
    
    // API KEY and URL
    const API_KEY = 'b65524316dbda6a6adc20fbaaa42d2ebc5fc4e64';
    const API_URL = 'https://wger.de/api/v2/';

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(`${API_URL}exercisecategory/`, {
                    headers: {
                        Authorization: `Token ${API_KEY}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data.results);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

  return (
    <>
        <h1>Exercise Categories</h1>
        <ul>
            {categories.map((category) => (
                <li key={category.id}>{category.name}</li>
            ))}
        </ul>
    </>
  );
}
