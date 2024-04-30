import { useEffect, useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  /* this use effect now only work for when something rendering happens only with  number variable in this jsx component */
  useEffect(
    (number) => {
      alert("Number Incremented");
    },
    [number]
  );

  /* this use effect work for every changes in the whole component */
  useEffect(() => {
    alert("Number Incremented second effect");
  });

  /* this use effect work only for one time on componet rendered on browser */
  useEffect(() => {
    alert("Number Incremented third effect");
  }, []);

  const handleClick = () => {
    setNumber(number + 1);
  };

  const handleClick2 = () => {
    setNumber2(number2 + 1);
  };

  return (
    <>
      <p>{number}</p>
      <button onClick={handleClick}>CLICK</button>

      <p>{number2}</p>
      <button onClick={handleClick2}>CLICK2</button>
    </>
  );
};

export default UseEffect;
