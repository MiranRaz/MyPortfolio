import "./App.scss";
import React, { useEffect, useState } from "react";
import Main from "./components/main/Main";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loadingData">
          <h1>Miran Ražnatović</h1>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
