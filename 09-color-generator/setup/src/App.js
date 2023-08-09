import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
    console.log("Hello");
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={error ? "error" : ""}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <div className="info-container">
          <h5>Get tints and shades of a CSS color</h5>
          <p>
            The lightness or darkness of a color is called its value. Tints are
            light values that are made by mixing a color with white, which
            increases lightness. Shades are dark values that are made by mixing
            a color with black, which reduces lightness.
          </p>
        </div>
      <section className="colors">
        {list.map((color, i) => {
          console.log(color);
          return <SingleColor key={i} {...color} index={i} />;
        })}
      </section>
    </>
  );
}

export default App;
