// src/components/Restaurants.js
import React, { useEffect, useState } from 'react';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error('Error fetching restaurants:', err));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
