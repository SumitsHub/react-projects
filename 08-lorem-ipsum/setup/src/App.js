import React, { useState } from "react";
import data from "./data";
function App() {
  let [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setText(data);
    let amount = parseInt(count);
    if(count <=0) {
      amount = 1;
    } else if(count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  }

  return <section className="section-center">
    <h3>tired of boring loream epsum?</h3>
    <form className="loream-form" onSubmit={handleSubmit}>
      <label htmlFor="amount"></label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
      <button type="submit" className="btn">generate</button>
    </form>
    <article className="loream-text">
      {text.map((t, i)=>{return <p key={i}>{t}</p>})}
    </article>
  </section>;
}

export default App;
