import React from "react";

export default function AboutSOTTherapy(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="mb-3">About SOT Therapy</h3>
          <p>
            SOT is a treatment for Lyme, co-infections, and viruses like EBV,
            HSV, CMV, Varicella and others. This breakthrough therapy utilizes
            short DNA or RNA segments to block the expression of critical
            segments of genes needed for Lyme, co-infections, or viruses to
            survive and replicate.
          </p>
          <p>
            Essentially SOT creates a shutoff “key” that precisely fits a chosen
            “lock” portion of a pathogen. The “lock” is a specific section of
            RNA that normally controls an important function of the pathogen.
            The “key” binds to the “lock” and blocks the function thus
            eliminating the pathogen. Afterwards, the SOT compound is released
            and travels to the next target, thus fighting the infection 24/7 for
            3 to 6 months.
          </p>
          <p>
            To make a diagnosis of infection and/or to most accurately gauge
            response between SOT treatments, we recommend Vibrant Labs. However,
            any confirmed infection through a recognized US lab within 6 months
            prior to ordering an SOT is sufficient to start therapy.
          </p>
          <p>
            The main side-effects of SOT treatment are detox or "Herx"
            reactions, such as fatigue, body aches, and headache. Patients who
            have gone through treatment will often say “your symptoms get worse
            before they get better.” The SOT may be repeated up to 3x per year
            if needed. With each round of SOT it is recommended to retest for
            the presence of pathogens. At some point the infection may be
            completely eradicated or remain stable in a quiet remission. More
            about{" "}
            <a
              target="_blank"
              href="https://integrative.ca/treatments/general/supportive-oligonucleotide-technique-sot"
            >
              SOT Therapy
            </a>
          </p>
          <p>
            Medical Center where Jana receives her medications and therapies:{" "}
            <a target="_blank" href="https://swietylukasz.pl/en/home/">
              St. Luke's Clinic
            </a>
          </p>
          <div style={{ textAlign: "center" }} className="mb-3 mt-3">
            <img
              src="img/Jana/JanaHospital.png"
              style={{ maxWidth: "300px" }}
              alt="Jana Mitic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
