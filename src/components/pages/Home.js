import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";

import HeroSection from "../heroSection/HeroSection";
import DotLoader from "react-spinners/DotLoader";
import Navbar from "../navbar/Navbar";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <DotLoader color="#9B9B9B" loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
        </>
      )}
    </>
  );
}
export default Home;
