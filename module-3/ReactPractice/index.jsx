import React from "react";
import ReactDom from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Zach Munson</h1>
      <p>Is this passing to the Browser</p>
      <ul>
        <li>test item 1</li>
        <li>test item 2</li>
        <li>test item 3</li>
      </ul>
    </div>
  );
}

ReactDom.render(<MyInfo />, document.getElementById("root"));
