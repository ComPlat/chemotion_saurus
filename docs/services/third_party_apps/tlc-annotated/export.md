---
title: Export & Save – Results from TLC Tool
sidebar_label: Export & Save
author: Thotli, Shilpa Bai
---

#  Export & Save – Results from TLC Tool

Once you’ve annotated your TLC plate and calculated RF values, the tool offers three export options:

- Download CSV (Rf values)
- Download annotated image (PNG)
- Upload both (CSV and annotated image) to the ELN (if image was from ELN)

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

##  3. Upload to ELN (Chemotion)

If the image was originally loaded from the ELN:

- Use the  **Upload to ELN** button
- The tool sends both the annotated image and CSV to the original ELN URL

:::danger[Requirements]
-  Image must come from ELN, only ELN-loaded images support cloud upload; if your image is loaded from you local (not from ELN), the annotated image won’t be uploaded to ELN.
-  CSRF token must be available (handled internally)
:::

---
