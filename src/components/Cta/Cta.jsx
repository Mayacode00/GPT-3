import React from "react";
import "./Cta.css";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>request early access</p>
        <h3>register today & start the endless possibilities</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">
          <Link to="/possibilities">get started</Link>
        </button>
      </div>
    </div>
  );
}

export default Cta;
