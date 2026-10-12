window.auditData = {
  comparableCountries: [
    { country: "Israel", projects: 2474, status: "Associated country", tone: "israel" },
    { country: "Turkey", projects: 1516, status: "EU candidate", tone: "" },
    { country: "Serbia", projects: 838, status: "EU candidate", tone: "" },
    { country: "Ukraine", projects: 523, status: "Associated / candidate", tone: "ukraine" },
    { country: "Moldova", projects: 147, status: "EU candidate", tone: "" },
    { country: "Bosnia and Herzegovina", projects: 137, status: "EU candidate", tone: "" },
    { country: "North Macedonia", projects: 71, status: "EU candidate", tone: "" }
  ],

  annualCounts: [
    { year: 2014, israel: 16, ukraine: 1 },
    { year: 2015, israel: 235, ukraine: 25 },
    { year: 2016, israel: 202, ukraine: 34 },
    { year: 2017, israel: 216, ukraine: 27 },
    { year: 2018, israel: 249, ukraine: 29 },
    { year: 2019, israel: 307, ukraine: 34 },
    { year: 2020, israel: 206, ukraine: 36 },
    { year: 2021, israel: 146, ukraine: 22 },
    { year: 2022, israel: 217, ukraine: 31 },
    { year: 2023, israel: 258, ukraine: 74 },
    { year: 2024, israel: 216, ukraine: 95 },
    { year: 2025, israel: 135, ukraine: 58 }
  ],

  semantic: {
    all: {
      label: "All programmes",
      aName: "Israel",
      bName: "Ukraine",
      a: 0.7783,
      b: 0.5877,
      delta: 0.1907,
      description: "Israel and Ukraine project-title corpora compared with the same official EU policy baseline."
    },
    h2020: {
      label: "Horizon 2020",
      aName: "Israel",
      bName: "Ukraine",
      a: 0.7938,
      b: 0.6733,
      delta: 0.1205,
      description: "Horizon 2020 project-title corpora compared with the same EU baseline."
    },
    horizon: {
      label: "Horizon Europe",
      aName: "Israel",
      bName: "Ukraine",
      a: 0.8356,
      b: 0.6558,
      delta: 0.1798,
      description: "Horizon Europe project-title corpora compared with the same EU baseline."
    },
    edf: {
      label: "European Defence Fund",
      aName: "Israeli-owned entity projects",
      bName: "Other EDF",
      a: 0.9319,
      b: 0.8186,
      delta: 0.1134,
      description: "This panel changes groups: the 18 EDF projects involving EU-registered entities under Israeli ownership are compared with the other 234 EDF projects."
    }
  },

  nodeDetails: {
    edf: "European Defence Fund eligibility is governed by Regulation (EU) 2021/697. Article 9 sets establishment and control conditions for recipients and subcontractors, including conditions concerning control by non-associated third countries.",
    intracom: "The thesis identifies Intracom Defense AE as the Greece-registered entity appearing in 17 Israeli-owned entity-linked EDF projects. It traces a 94.5% ownership stake by Israel Aerospace Industries from May 2023.",
    iai: "The thesis uses Israel Aerospace Industries as the parent-company ownership link in its ownership analysis. Ownership is not presented here as proof that every EDF project output or every euro is transferred to the parent."
  }
};