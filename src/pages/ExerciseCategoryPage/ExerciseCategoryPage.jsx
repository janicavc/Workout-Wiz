import React, { useEffect, useState } from 'react';

export default function ExerciseCategoryPage() {
    const [categories, setCategories] = useState([]);
    
    // API KEY and URL
    const API_KEY = process.env.REACT_APP_API_KEY;
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
    }, [API_KEY]);

  return (
    <>
        <h1>Exercise Categories</h1>
        <div className='category-container'>
            {categories.map((category) => (
                <div
                    key={category.id}
                    className='category-card'
                >
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    </>
  );
}
