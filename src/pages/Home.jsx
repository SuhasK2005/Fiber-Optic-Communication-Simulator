import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1>Fiber Optic Communication Simulator</h1>
      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
          fontSize: "1.1rem",
        }}
      >
        An engineering simulation tool to analyze signal attenuation over
        optical fiber using Light Emitting Diodes (LED) and Laser source
        transmitters.
      </p>
      <Link
        to="/simulator"
        style={{
          display: "inline-block",
          backgroundColor: "var(--accent-color)",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "600",
          transition: "background-color 0.2s ease",
        }}
      >
        Launch Simulator
      </Link>
    </div>
  );
};

export default Home;
