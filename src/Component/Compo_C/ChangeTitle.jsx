import React, { useEffect, useState } from "react";

const ChangeTitle = () => {
  console.log("Change Title component called");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use effects called");
    document.title = `You click ${count} times`;
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>
    </div>
  );
};

export default ChangeTitle;
