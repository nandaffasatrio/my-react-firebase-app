// ListProperty.jsx
import React, { useState, useEffect } from "react";
// import LazyLoad from "react-lazyload";

const ListProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://api.kontenbase.com/query/api/v1/8d890f13-2786-4257-9e61-aad22ad6e92c/property");
        if (response.ok) {
          const data = await response.json();
          setProperties(data.properties);
        } else {
          console.error("Failed to fetch properties");
        }
      } catch (error) {
        console.error("Error during property fetch:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>List of Properties</h2>
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.name}</h3>
          <LazyLoad height={200} offset={100}>
            <img src={property.imageUrl} alt={property.name} />
          </LazyLoad>
          <p>{property.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProperty;
