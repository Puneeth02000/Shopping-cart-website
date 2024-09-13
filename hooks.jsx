import { useState } from "react";

const  Counter = ()=>{
 let [count, SetCount] =useState(0);
const increment =()=>{
  SetCount(count+ 1);
 
}
const decrement =()=>{
  SetCount(count-1);

}
 
return (
  <div>
    <button onClick={decrement}>-</button>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
  </div>
);
};
export default Counter;