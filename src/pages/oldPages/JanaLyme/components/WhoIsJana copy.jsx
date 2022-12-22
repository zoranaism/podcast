import React from "react";

export default function WhoIsJana(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="mb-3">Who is Jana:</h3>
          <img
            src="img/Jana/Jana.png"
            style={{ maxWidth: "400px" }}
            alt="Jana Mitic"
          />
          <p className="nj-section-content">
            She is a violinist, educator and violin teacher, creative person who
            loves music, tennis, long walks and spending time with friends. More
            on:{" "}
            <a target="_blank" href="https://janamitic.com/">
              Jana's Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
