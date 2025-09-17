---
title: TLC Image Annotation Tool
sidebar_position: 2
---

# TLC Image Annotation Tool

# Overview

The **TLC Image Annotation Tool** is a lightweight, web-based application designed for annotating Thin Layer Chromatography (TLC) plates, calculating Rf values, and exporting annotated results. It can be used as a standalone tool or integrated into the Chemotion.

This tool supports the digitization of TLC documentation, automates Rf value calculations, and promotes consistent and well-structured ELN records.

---

![TLC Tool Overview](/img/ThirdPartyApps/Tlc/tlc-overview.png)

---

##  Purpose

The tool bridges manual TLC processing with structured digital workflows.

- Improve accuracy in RF calculations
- Add clear, editable annotations to TLC images
- Save and export results for reproducibility and sharing

---

##  Features

* Flexible Image Input
  - Upload your own (local) images
  - Load TLC images directly from the Chemotion
* Mark reference lines, sample spots, and separation lanes
* Automatically calculate Rf values
* Versatile Output Options
  - Export to CSV or annotated PNG
  - Push results back to the Chemotion seamlessly

---

##  Supported Input

| Feature         | Details                         |
|----------------|----------------------------------|
| Image Types     | JPG, PNG                         |
| Max File Size   | 10 MB                            |
| Image Sources   | Chemotion, Local Upload      |
| Output Formats  | CSV, Annotated PNG, Chemotion Upload   |

---

##  Example Workflow

1. **Load an Image** (from Chemotion or local)
2. **Draw Reference Lines** (Min/Max)
3. **Mark Spots** for your compounds
4. **Add Optional Labels** (lane separators)
5. **Click ‘Calculate RF’** to compute values
6. **Export or Save back to Chemotion**

---

![Image Upload Example](/img/ThirdPartyApps/Tlc/tlc-localupload.png)
![Image Upload Example](/img/ThirdPartyApps/Tlc/tlc-upload.png)

---

##  Ideal For

- Chemistry researchers
- University teaching labs
- Collaborative or open science
- Archiving chromatographic results

---

## Author & Repository

- **Name:** Shilpa Thotli
- **Email:** [shilpa.thotli@kit.edu](mailto:shilpa.thotli@kit.edu)

The **TLC Image Annotation Tool** is an open-source project. The source code and further documentation can be found on: <br />
[TLC Image Annotation Tool](https://gitlab.kit.edu/kit/ioc/digitalization-ioc/tlc_application_rf_calculator)
