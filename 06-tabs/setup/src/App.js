import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>loading...</h2>
      </section>
    );
  }

  const { title, dates, duties, company } = data[index];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* butn container */}
        <div className="btn-container">
          {data.map((item, i)=>{
            return <button key={item.id} className={`job-btn ${i===index && 'active-btn'}`} onClick={()=>{setIndex(i);}}>{item.company}</button>
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, i) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
