import React from "react";
import styles from "./button.css";

const ButtonContainer = () => {
  const ButtonNames = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    "+",
    "-",
    "*",
  ];

return (<div  className={styles.buttonsContainer}>
    <h1>Calculator</h1>
    {ButtonNames.map((ButtonNames)=>
    <button key={ButtonNames} className={styles.button}>{ButtonNames}</button>)}

</div>);
};
 export default ButtonContainer;