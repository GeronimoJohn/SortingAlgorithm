import React, { useState, useEffect } from "react";

export const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(5, 1000));
    }
    setArray(newArray);
  }, []);

  return (
    <>
      {array.map((value, idx) => (
        <div className="array-bar" key={idx}>
          {value}
        </div>
      ))}
    </>
  );
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
