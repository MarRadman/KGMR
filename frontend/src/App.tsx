import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/test")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Tom array = kör bara en gång vid montering

  return (
    <div>
      <h1>Testing backend</h1>
      <p>{data ? JSON.stringify(data) : "Loading..."}</p>
    </div>
  );
};

export default App;
