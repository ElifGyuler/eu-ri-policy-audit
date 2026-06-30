# The Self-Defeating Dependency Trap
## A Computational Policy Audit of EU Research and Innovation Funding to Israel and Ukraine (2014–2026)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python 3.11](https://img.shields.io/badge/Python-3.11-blue.svg)](https://python.org)

**Author:** Elif Gyuler  
**Programme:** Master Applied Data Science, Utrecht University  
**Submission Date:** 20 May 2026

---

## Overview

This repository contains the full reproducible analysis pipeline for the thesis *"The Self-Defeating Dependency Trap: How Technological Reliance Constrains EU Normative Power in Research Funding to Israel and Ukraine, 2014–2026."*

**Research Question:** Is the EU a genuine normative power, or does technological dependency make acting on its own values institutionally difficult?

Using 58,876 project-level records from the SEDIA API (EU Funding & Tenders Portal), this study compares EU R&I funding to Israel and Ukraine under a Most Similar Systems Design (MSSD) — two countries with identical third-country association status, both experiencing active armed conflict during the study period.

### Key Findings

| Hypothesis | Finding |
|-----------|---------|
| **H1a** (Volume asymmetry) | Israel receives **4.7×** more projects than Ukraine (2,474 vs 523) across all programme years |
| **H1b** (Temporal elasticity) | Zero statistical response to Gaza War threshold (t=−0.218, p=0.845) vs. 7-day Russian suspension |
| **H2a** (Portfolio quality) | Israeli portfolios diverge from EU normative vocabulary by Δ=0.191 (permutation test p<0.0001) |
| **H2b** (Proxy mechanism) | A single Greek-registered entity (Intracom Defense AE, 94.5% IAI-owned) coordinates 94.4% of Israeli EDF projects, controlling €438.4M in project budgets |

---

## Repository Structure

```
.
├── eu_ri_policy_audit.ipynb     # Main analysis notebook
├── figure_scripts/              # Individual figure scripts
│   ├── figure_5_1c_mixed_status_corrected.py
│   ├── figure_5_3_combined_fixed.py
│   ├── figure_5_3c_ratio_fixed.py
│   ├── figure_5_3c_institutional_response.py
│   ├── figure_5_4a_panela_corrected.py
│   ├── figure_5_4bc_diverging_FINAL.py
│   ├── figure_5_4d_military_terms_v3.py
│   ├── figure_5_5a1_coordinator_donut.py
│   ├── figure_5_5a2_funding_comparison_v2.py
│   ├── figure_5_5a5_timeline_v2.py
│   └── figure_5_5ac_ER_style_corrected.py
├── validation/                  # Statistical validation scripts
│   ├── validation_suite.py      # Full validation (permutation, placebo, sensitivity)
│   └── verify_russia_annual.py  # Russia series verification
├── data/                        # Data files (see Data Availability below)
│   ├── eu_clean_UPDATED.csv     # Processed SEDIA dataset [Zenodo]
│   └── eu_edf2025_parsed.csv    # EDF 2025 supplementary data [Zenodo]             
└── README.md
```

---

## Data Availability

| Dataset | Source | Access |
|---------|--------|--------|
| Raw SEDIA API data | EU Funding & Tenders Portal | Public API |
| Processed dataset (`eu_clean_UPDATED.csv`) | This study | Zenodo DOI: [placeholder] |
| EDF 2025 factsheets (59 PDFs) | DG DEFIS website | [defence-industry-space.ec.europa.eu](https://defence-industry-space.ec.europa.eu) |
| EU normative baseline corpus | EUR-Lex | Appendix A of thesis |

**Note on SEDIA API:** The API requires the `sedia-api-fetchers` package (Swarts, 2025). Data collection used adaptive temporal partitioning to stay within the 10,000-record pagination limit. The processed dataset on Zenodo is recommended for direct replication.

**Note on EDF 2025:** The EDF 2025 call (57 projects, €1.07B, announced 15 April 2026) was not registered in SEDIA at collection time. A supplementary manual extraction from 59 DG DEFIS factsheet PDFs was conducted to check for new Intracom Defense or OIP Sensor Systems participation; no confirmed proxy-entity projects were identified. The original factsheets are publicly available at [defence-industry-space.ec.europa.eu](https://defence-industry-space.ec.europa.eu).

---

## Installation

```bash
# Clone repository
git clone https://github.com/elifgyuler/eu-ri-policy-audit.git
cd eu-ri-policy-audit

# Create environment (micromamba recommended)
micromamba create -n sedia python=3.11
micromamba activate sedia

# Download data from Zenodo
# Place eu_clean_UPDATED.csv in ./data/
```

---

## Usage

```bash
# Run main analysis
jupyter notebook eu_ri_policy_audit.ipynb

# Run individual figure scripts
python figure_scripts/figure_5_1c_mixed_status_corrected.py

# Run full validation suite
python validation/validation_suite.py
```

---

## Requirements

```
pandas>=2.0.0
numpy>=1.26.0
scipy>=1.11.0
scikit-learn>=1.3.0
matplotlib>=3.7.0
sedia-api-fetchers>=1.0.0
tqdm>=4.65.0
```

---

## Key Methodological Notes

### Country-Code Correction (Section 4.2.2)
SEDIA's numeric country codes were initially mis-mapped. Correction derived from participant-level address data:
- `20000915` → Ireland (not Israel)
- `20001031` → Ukraine (not Slovakia)

Corrected counts: **Israel = 2,474 | Ukraine = 523**

### TF-IDF Baseline Corpus (Section 4.5.2 / Appendix A)
EU normative baseline: verbatim text from three official EU documents (1,878 tokens). No manual keyword selection. Full text in thesis Appendix A.

### Proxy Entity Detection (Section 4.3.1)
Two confirmed Israeli proxy entities in EDF (source: FRS/DG DEFIS Report No.19, April 2025):
- **Intracom Defense AE** (Athens, GR) — 94.5% IAI-owned since May 2023
- **Optronic Instruments & Products N.V.** (Ghent, BE) — Elbit Systems subsidiary

---

## Citation

```bibtex
@mastersthesis{gyuler2026,
  author    = {Gyuler, Elif},
  title     = {The Self-Defeating Dependency Trap: How Technological Reliance 
               Constrains EU Normative Power in Research Funding to 
               Israel and Ukraine, 2014--2026},
  school    = {Utrecht University},
  year      = {2026},
  type      = {Master Thesis, Applied Data Science},
  doi       = {10.5281/zenodo.XXXXXXX}
}
```

---

## Related Work

- Swarts, J. (2025). *Green Rhetoric Meets Hard Data: Detecting Strategic Discourse Drift in Horizon Europe Climate Projects.* Master Thesis, Applied Data Science, Utrecht University. [Uses same sedia-api-fetchers pipeline]
- Farrand, B. & Carrapico, H. (2022). Digital sovereignty and taking back control. *European Security*, 31(3), 435–453.
- Manners, I. (2002). Normative Power Europe. *Journal of Common Market Studies*, 40(2), 235–258.

---

## License

Code: [MIT License](LICENSE)  
Data: [Creative Commons CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)  
Thesis text: © Elif Gyuler, Utrecht University, 2026

---

## Contact

Elif Gyuler — Utrecht University, Applied Data Science  
GitHub: [@elifgyuler](https://github.com/elifgyuler)



# eu-ri-policy-audit
Replication code and data for "The Self-Defeating Dependency Trap" (Utrecht University, 2026)
