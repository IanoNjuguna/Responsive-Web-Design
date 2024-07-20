/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(total + updateLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight + 1);
    setTotal(total + updateRight);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>

      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join("")}</p>
      <p>total: {total}</p>
    </div>
  );
};

export default App;
