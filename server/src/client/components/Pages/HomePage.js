import React from "react";
const Home = () => {
  return (
    <div>
      <button onClick={() => console.log("Clicked")}>Click Me!</button> I am the
      home component{" "}
    </div>
  );
};
export default { component: Home };
