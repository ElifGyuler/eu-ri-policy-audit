# EU R&I Policy Audit
## Strategic autonomy, foreign control, and EU research funding, 2014–2026

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21084273.svg)](https://doi.org/10.5281/zenodo.21084273)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Author:** Elif Gyuler  
**Institution:** Utrecht University  
**Research area:** EU research policy, strategic autonomy, defence funding, computational policy analysis

---

## Overview

This repository contains the reproducible research materials and public-facing outputs for a computational audit of EU research and defence funding to Israel and Ukraine from 2014–2026.

The project asks why third-country research partnerships operating under comparable formal programme rules can produce markedly different funding and governance outcomes. Israel and Ukraine are compared because both entered Horizon Europe association within two months under the same formal participation framework. Russia is used separately as a benchmark for the EU's demonstrated capacity to restrict research cooperation rapidly; it is not treated as a substantive comparator to either country.

The analysis treats **geopolitical alignment, sectoral composition, historical partnership depth, and technological interdependence as competing or complementary explanations**. It does not assume that a common legal framework makes the conflicts themselves equivalent.

### Public outputs

- **Policy brief:** [Why Does the EU Fund Israeli Defence-Linked Research?](POLICY_BRIEF.md)
- **Interactive research brief:** [index.html](index.html)
- **Replication notebook:** [eu_ri_policy_audit.ipynb](eu_ri_policy_audit.ipynb)
- **Data & code archive:** [Zenodo DOI 10.5281/zenodo.21084273](https://doi.org/10.5281/zenodo.21084273)

---

## Key findings

| Area | Finding |
|---|---|
| **Participation volume** | The corrected dataset contains **2,474 Israel-linked projects** and **523 Ukraine-linked projects**, a project-count ratio of about **4.7×** across the study dataset. |
| **Annual continuity** | A comparison of **2019–2021** with **2022–2024** finds no statistically detectable difference in Israeli annual approvals in this specification. Because the second period begins before October 2023, this is a broad period comparison, **not a causal pre/post estimate of the October 2023 events**. |
| **Portfolio text analysis** | Israeli-linked project-title corpora sit further from the same EU policy-language baseline than Ukrainian corpora in the TF-IDF analysis. This is a descriptive portfolio difference and does not by itself establish why funding decisions were made. |
| **Foreign control / EDF** | The audit identifies **18 EDF projects involving EU-registered entities under Israeli ownership**. Intracom Defense is identified as 94.5% owned and 100% voting-controlled by Israel Aerospace Industries. EDF Article 9 contains conditions concerning control by non-associated third countries and permits derogations where approved guarantees are provided; the public project records reviewed here do not disclose the content of such guarantees. |

The strategic-autonomy argument is therefore deliberately conditional: international cooperation may generate capability and technology-transfer benefits, but those gains should be assessed against whether ownership, control, and underlying external dependencies actually shift over time.

---

## Data and methods

The project analyses **58,876 project-level records** drawn from the European Commission's SEDIA / Funding & Tenders infrastructure, covering Horizon 2020, Horizon Europe, Digital Europe and the European Defence Fund. The workflow combines:

- project-level descriptive and comparative analysis;
- participant and country-code validation;
- Welch's t-test, Mann–Whitney U and Cohen's *d* for the annual-period comparison;
- TF-IDF cosine-distance analysis with permutation, split-half placebo and parameter-sensitivity checks;
- legal-institutional analysis of EU research and defence-funding rules; and
- corporate-ownership cross-referencing for EDF participants.

### Important interpretation limits

- The annual 2019–2021 vs 2022–2024 comparison is **not** an event-specific October 2023 treatment estimate.
- Project-title text analysis measures linguistic distance from a policy corpus; it does not establish project outcomes, end-use, legality, or intent.
- Similar association status does not eliminate geopolitical alignment or other political differences between cases.
- Foreign ownership is not presented as proof that every project output or every euro is transferred to a parent company.

---

## Repository structure

```text
.
├── README.md                   # Project overview and interpretation notes
├── POLICY_BRIEF.md             # Text version of the final policy brief
├── eu_ri_policy_audit.ipynb    # Main replication notebook
├── index.html                  # Interactive public-facing research brief
├── style.css                   # Interactive site styles
├── data.js                     # Data used by the interactive visualisations
├── app.js                      # Interactive visualisation logic
└── LICENSE                     # MIT license for repository code
```

The complete replication archive is also preserved on Zenodo at the DOI above.

---

## Reproducibility

Clone the repository and open the notebook in a Python 3.11 environment:

```bash
git clone https://github.com/ElifGyuler/eu-ri-policy-audit.git
cd eu-ri-policy-audit
jupyter notebook eu_ri_policy_audit.ipynb
```

Core Python dependencies used by the analysis include pandas, NumPy, SciPy, scikit-learn and Matplotlib. The Zenodo record should be treated as the stable archive for replication materials and associated data.

---

## Policy relevance

The project focuses on a broader institutional question: **how should the EU evaluate strategic technology partnerships when place of establishment, beneficial ownership, voting control, capability transfer and supply-chain dependence point in different directions?**

The final policy brief proposes four areas for consideration:

1. clarify criteria for Horizon Europe research-security restrictions;
2. increase transparency around EDF Article 9 third-country-control guarantees;
3. establish standing parliamentary review of security-relevant R&I partnerships; and
4. require cross-horizon assessment of both capability gains and dependency risks before strategic technology partnerships are renewed.

---

## Citation

If you use the replication materials, please cite the archived project record:

> Gyuler, Elif (2026). *EU R&I Policy Audit: research and defence funding to Israel and Ukraine, 2014–2026*. Zenodo. https://doi.org/10.5281/zenodo.21084273

For the policy brief, cite the title shown in `POLICY_BRIEF.md`.

---

## License and independence

Repository code is released under the [MIT License](LICENSE). Data and text may be subject to separate source or archive terms; consult the associated Zenodo record and original data sources before redistribution.

This is independent academic research and does not represent the position of Utrecht University or any EU institution.

---

## Contact

**Elif Gyuler**  
GitHub: [@ElifGyuler](https://github.com/ElifGyuler)