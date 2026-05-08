---
title: Export & Save – Results from TLC Tool
sidebar_label: Export & Save
author: Thotli, Shilpa Bai
---

#  Export & Save – Results from TLC Tool

Once you’ve annotated your TLC plate and calculated RF values, the tool offers three export options:

- Download CSV (Rf values)
- Download annotated image (PNG)
- Upload both (CSV and annotated image) to the Chemotion (if image was from Chemotion)

---

##  1. Download CSV

Click the  **Save CSV** button to export the results table.

### File Contents:
- Mixture labels (X axis)
- Substance/Spot labels (Y axis)
- RF values (0–1 range)

### Format:

```
mixture_label (X axis),substance_label (Y axis),RF value
Sample A,Spot 1,0.72
Sample A,Spot 2,0.53
```

### Extras:
Includes **inline summary notation** for lab records:

```
TLC (solvents); Rf (UV-Vis in nm, staining) = 0.72 (Spot 1)[h1], 0.53 (Spot 2)[h2]
```


---

![Download CSV Button](/img/ThirdPartyApps/Tlc/tlc-csv-table.png)

---

##  2. Download Annotated Image

Click the  **Save Image** button to download a PNG with:

- All spots and lines drawn
- Labels visible
- Resized to match the original image resolution

📎 Filename includes timestamp for traceability.

---

![Download Annotated Image](/img/ThirdPartyApps/Tlc/tlc-download-image.png)

---

##  3. Upload to Chemotion

If the image was originally loaded from the Chemotion:

- Use the  **Upload to Chemotion** button
- The tool sends both the annotated image and CSV to the original Chemotion URL

:::danger[Requirements]
- **Image Source Restriction**
  Only images loaded from the Chemotion support cloud upload.
  If you upload an image locally (i.e., not from the Chemotion), the annotated image cannot be uploaded back to the Chemotion.

- **CSRF Token**
  A valid CSRF token must be available. This is handled internally by the system.
:::

---
