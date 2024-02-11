import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogDetails from "./DogDetails";
import NavBar from "./NavBar";

const DogList = ({ dogs }) => {
  return (
    <>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <Routes>
          {dogs.map((dog) => (
            <Route
              path={`/dogs/${dog.name}`}
              element={<DogDetails dog={dog} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default DogList;
