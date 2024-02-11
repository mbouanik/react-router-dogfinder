import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ dogs }) => {
  const [navBar, setNavBar] = useState(true);
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setNavBar(false);
    }
  }, [navBar]);
  const handleNavBar = () => {
    setNavBar(false);
  };

  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        {dogs.map((dog) => (
          <Link onClick={handleNavBar} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
