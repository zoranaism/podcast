import React from "react";

export default function Progressbar(props) {
  return (
    <div classNameName="container mb-5">
      <div classNameName="row justify-content-center">
        <div classNameName="col-12 col-md-10">
          <section role="progressbar">
            <div className="row column">
              <ol className="progress-bar-steps" data-progressbar-steps="1">
                {/* add classNamees when done "progress-done current" */}
                <li className="progress-done current">
                  <h6>580€</h6>
                  <span></span>
                  <span></span>
                </li>
                <li className="progress-todo">
                  <h6>1080€</h6>
                  <span></span>
                  <span></span>
                </li>
                <li className="progress-todo">
                  <h6>3080€</h6>
                  <span></span>
                  <span></span>
                </li>
                <li className="progress-todo">
                  <h6>5080€</h6>
                  <span></span>
                  <span></span>
                </li>
              </ol>
            </div>
          </section>
        </div>
        <div>
          <div
            classNameName="mb-5 row"
            style={{ textAlign: "center", color: "#b9b8bb" }}
          >
            <div classNameName="col-12 col-md-3 mb-3">
              <h5 style={{ color: "white" }}>Milestone 1</h5>
              <h6>580 - for hyperthermia</h6>
              <h6>Total = 580€</h6>
            </div>
            <div classNameName="col-12 col-md-3 mb-3">
              <h5 style={{ color: "white" }}>Milestone 2</h5>
              <h6>580 - for hyperthermia</h6>
              <h6>500 - for IV antibiotics</h6>
              <h6>Total = 1080€</h6>
            </div>
            <div classNameName="col-12 col-md-3 mb-3">
              <h5 style={{ color: "white" }}>Milestone 3</h5>
              <h6>580 - for hyperthermia</h6>
              <h6>500 - for IV antibiotics</h6>
              <h6>2000 - SOT therapy</h6>
              <h6>Total = 3080€</h6>
            </div>
            <div classNameName="col-12 col-md-3 mb-3">
              <h5 style={{ color: "white" }}>Milestone 4</h5>
              <h6>580 - for hyperthermia</h6>
              <h6>500 - for IV antibiotics</h6>
              <h6>2 x 2000 - SOT therapy</h6>
              <h6>Total = 5080€</h6>
            </div>
          </div>
          <h6 style={{ textAlign: "center", fontStyle: "italic" }}>
            **Campaign lasts until 01st January, 2023
          </h6>
        </div>
      </div>
    </div>
  );
}
