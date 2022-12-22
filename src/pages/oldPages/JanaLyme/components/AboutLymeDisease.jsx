import React from "react";

export default function AboutLymeDisease(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="mb-3">About Lyme disease:</h3>
          <p className="nj-section-content">
            Most Lyme treatments are not covered by insurance, and so patients
            typically pay over $500 per each treatment, medications, and
            complementary therapies and tests. After years of such expenses,
            coupled with her inability to work, Jana and her mom’s financial
            resources are severely strained. These treatments will help her
            regain her health and livelihood. They will also allow her to go
            back to playing music and start spreading awareness by sharing her
            story so that other people can prevent this illness and avoid this
            long and painful struggle. More on:{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Lyme_disease"
            >
              Lyme Disease Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
