// CONDITIONS ET EVENTS

import "./styles.css";

import { useState } from "react";

export default function App() {
  const [bool, setBool] = useState(false);

  const handleClick = () => {
    setBool((prevState) => !prevState);
  };

  const handleChange = (syntheticEvent, itemId) => {};
  return (
    <>
      <button onClick={handleClick}>Click</button>

      {bool ? (
        <div>Condition respectée</div>
      ) : (
        <div>Condition non respectée</div>
      )}
      {bool && <div>Condition respectée BIS</div>}
    </>
  );
}

/**
 * AUTRE EXEMPLE 
 */

 import "./styles.css";

 import { useState } from "react";
 
 export default function App() {
   const [bool, setBool] = useState(false);
 
   const handleClick = () => {
     setBool((prevState) => !prevState);
   };
 
   const handleChange = (syntheticEvent, itemId) => {};
   return (
     <>
       <button onClick={handleClick}>Click</button>
 
       <Bidule bool={bool} />
     </>
   );
 }
 
 const Bidule = ({ bool }) => {
   return <div>Condition {!bool && "NON"} respectée</div>;
 };
 