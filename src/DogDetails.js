import React from "react";

const DogDetails = ({ dog }) => {
  return (
    <>
      <h1> {dog.name}</h1>
      <p> age: {dog.age} </p>

      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      {dog.facts.map((fact) => (
        <p>{fact} </p>
      ))}
    </>
  );
};

export default DogDetails;
