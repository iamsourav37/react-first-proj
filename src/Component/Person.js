import React from "react";

function clickHandler() {
  console.log("button clicked");
}

const style = {
  color: "blue",
  border: "2px solid red",
  cursor: "pointer",
  padding: "6px 20px",
  borderRadius: "10px",
  fontSize: "20px",
};

// const person = (props) => {
//   return (
//     <>
//       <div class="bio-data">
//         <h1>My name is {props.name}</h1>
//         <h1>My age is {props.age}</h1>
//         <h1>I am a {props.prof}</h1>
//         <button style={style} onClick={clickHandler}>
//           Click me
//         </button>
//       </div>
//     </>
//   );
// };

class Person extends React.Component {
  render() {
    return (
      <>
        <div class="bio-data">
          <h1>My name is {this.props.name}.</h1>
          <h1>My age is {this.props.age}</h1>
          <h1>I am a {this.props.prof}</h1>
          <button style={style} onClick={clickHandler}>
            Click me
          </button>
        </div>
      </>
    );
  }
}
export default Person;
