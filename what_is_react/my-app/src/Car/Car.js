import React from "react";

// function car() {
//   return (
//     <div>This is car component</div>
//   )
// }

// const car = () => {
//   return (
//     <div>This is car component</div>
//   )
// }

const car = props => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    {props.children}
  </div>
)

export default car;


// export default () => (
//   <div>
//     <p>This is car component</p>
//     <p><strong>{1 + 1}</strong></p>
//   </div>
// );