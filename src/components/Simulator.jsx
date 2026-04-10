import React, { useState, useEffect } from "react";
import Graph from "./Graph";

const Simulator = () => {
  const [distance, setDistance] = useState(10);
  const [inputPower, setInputPower] = useState(100);
  const [noiseLevel, setNoiseLevel] = useState(5);

  const [simulationData, setSimulationData] = useState({
    ledOutput: 0,
    laserOutput: 0,
    graphData: { labels: [], ledData: [], laserData: [] },
  });

  const ALPHA_LED = 0.5;
  const ALPHA_LASER = 0.2;

  useEffect(() => {
    // Generate data points for the graph
    const labels = [];
    const ledData = [];
    const laserData = [];

    // Simulate continuously over the distance
    for (
      let d = 0;
      d <= distance;
      d += Math.max(1, Math.floor(distance / 20))
    ) {
      labels.push(d);

      let ledVal = inputPower * Math.exp(-ALPHA_LED * d) - noiseLevel;
      let laserVal = inputPower * Math.exp(-ALPHA_LASER * d) - noiseLevel;

      // Values cannot drop below 0 realistically in this basic model's display intent
      ledData.push(Math.max(0, ledVal));
      laserData.push(Math.max(0, laserVal));
    }

    // Ensure the final point matches exactly
    if (labels[labels.length - 1] !== distance) {
      labels.push(Number(distance));
      ledData.push(
        Math.max(0, inputPower * Math.exp(-ALPHA_LED * distance) - noiseLevel),
      );
      laserData.push(
        Math.max(
          0,
          inputPower * Math.exp(-ALPHA_LASER * distance) - noiseLevel,
        ),
      );
    }

    // Final outputs at full distance
    const finalLedOutput =
      inputPower * Math.exp(-ALPHA_LED * distance) - noiseLevel;
    const finalLaserOutput =
      inputPower * Math.exp(-ALPHA_LASER * distance) - noiseLevel;

    setSimulationData({
      ledOutput: Math.max(0, finalLedOutput).toFixed(2),
      laserOutput: Math.max(0, finalLaserOutput).toFixed(2),
      graphData: { labels, ledData, laserData },
    });
  }, [distance, inputPower, noiseLevel]);

  return (
    <div className="simulator-grid">
      <div className="card">
        <h2 className="card-title">Sim Parameters</h2>

        <div className="form-group">
          <label className="form-label">Distance (km): {distance}</label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Input Power (mW): {inputPower}</label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={inputPower}
            onChange={(e) => setInputPower(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Noise Level (mW): {noiseLevel}</label>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-label">LED Output</div>
            <div className="stat-value led-value">
              {simulationData.ledOutput}{" "}
              <span style={{ fontSize: "0.8rem" }}>mW</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Laser Output</div>
            <div className="stat-value laser-value">
              {simulationData.laserOutput}{" "}
              <span style={{ fontSize: "0.8rem" }}>mW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Attenuation Analysis</h2>
        <div className="graph-container">
          <Graph data={simulationData.graphData} />
        </div>
      </div>
    </div>
  );
};

export default Simulator;
