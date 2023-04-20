import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id)=>{
    const newTours = data.filter((tour)=>tour.id !== id);
    setData(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.warn(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />
  }

  if (data.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return <main>
  <Tours tours={data} removeTour={removeTour} />
</main>;
}

export default App;
