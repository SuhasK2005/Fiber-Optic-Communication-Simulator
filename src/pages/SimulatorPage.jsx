import React from "react";
import Simulator from "../components/Simulator";

const SimulatorPage = () => {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1>Signal Attenuation Simulator</h1>
        <p>
          Adjust the parameters below to observe real-time signal degradation
          over distance.
        </p>
      </div>
      <Simulator />
    </div>
  );
};

export default SimulatorPage;
