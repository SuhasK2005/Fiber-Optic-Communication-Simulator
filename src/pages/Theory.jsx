import React from "react";

const Theory = () => {
  return (
    <div className="card">
      <h1>Optical Communication Theory</h1>

      <div style={{ marginTop: "2rem" }}>
        <h2 className="card-title">LED vs Laser Transmitters</h2>
        <p>
          Optical transmitters convert electrical signals into light. The two
          primary types are Light Emitting Diodes (LEDs) and Laser Diodes.
        </p>
        <ul>
          <li>
            <strong>LED:</strong> Broader spectral width, lower coupling
            efficiency, slower switching speed, but more robust and
            cost-effective. Typically used for multimode local area networks.
            Attenuation is higher due to chromatic dispersion (modeled here with
            α = 0.5).
          </li>
          <li>
            <strong>Laser:</strong> Narrow spectral width, highly directional,
            faster switching speed, enabling high bandwidths. Typically used in
            single-mode long-haul links. Exhibits lower attenuation (modeled
            here with α = 0.2).
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 className="card-title">Signal Attenuation</h2>
        <p>
          Signal power decreases exponentially over distance as light travels
          through the fiber. This loss is described by the attenuation
          coefficient (α).
        </p>
        <p>
          <strong>Formula:</strong> P_out = P_in × exp(-α × distance)
        </p>
        <p>
          Factors contributing to attenuation include Rayleigh scattering,
          absorption by impurities (like water ions), and
          macroscopic/microscopic bending of the fiber.
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 className="card-title">Photodiodes (PIN and APD)</h2>
        <p>
          At the receiver end, optical signals are converted back to electrical
          current.
        </p>
        <ul>
          <li>
            <strong>PIN Photodiode:</strong> Consists of a P-type, Intrinsic,
            and N-type region. It is standard for most optical links with
            moderate sensitivity requirements.
          </li>
          <li>
            <strong>Avalanche Photodiode (APD):</strong> Operates under high
            reverse bias, causing impact ionization (an avalanche effect) that
            multiplies the photocurrent. It offers higher sensitivity for
            long-distance reception but introduces more noise.
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 className="card-title">Noise in Photodetectors</h2>
        <p>
          Noise degrades the received signal-to-noise ratio, strictly limiting
          the maximum link length. Our simulator subtracts a constant noise
          floor from the received signal to model the impact of:
        </p>
        <ul>
          <li>
            <strong>Thermal (Johnson) Noise:</strong> Present in front-end
            amplifier resistors.
          </li>
          <li>
            <strong>Shot Noise:</strong> Associated with the discrete nature of
            photon arrival and electron emission.
          </li>
          <li>
            <strong>Dark Current Noise:</strong> Current that flows even in the
            absence of light.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
