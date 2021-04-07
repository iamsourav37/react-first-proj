import React from "react";

const style = {
  color: "blue",
  border: "2px solid green",
  cursor: "pointer",
  padding: "6px 20px",
  borderRadius: "10px",
  fontSize: "20px",
};

const Person = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="bio-data">
        <h1>My name is {props.name}</h1>
        <h1>My age is {props.age}</h1>
        <h1>I am a {props.prof}</h1>
        <h1>You clicked {count} times</h1>
        <button style={style} onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <br />
        <br />
        <button style={style} onClick={() => alert("hello React Js")}>
          Counter
        </button>
      </div>
    </>
  );
};
// class Person extends React.Component {
//   render() {
//     return (
//       <>
//         <div class="bio-data">
//           <h1>My name is {this.props.name}.</h1>
//           <h1>My age is {this.props.age}</h1>
//           <h1>I am a {this.props.prof}</h1>
//           <button style={style} onClick={clickHandler}>
//             Click me
//           </button>
//         </div>
//       </>
//     );
//   }
// }
export default Person;
