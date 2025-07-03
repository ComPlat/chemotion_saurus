---
title: FAQ & Troubleshooting – TLC Image Annotation Tool
sidebar_label: FAQ
author: Thotli, Shilpa Bai
---

# FAQ & Troubleshooting

This page addresses common user questions, issues, and best practices.

---

##  Common Issues

###  1. I can’t see the annotated image after clicking “Calculate RF”

- Ensure both **Min Line** and **Max Line** are drawn
- At least one spot must be marked
- Click **Calculate RF** again and wait for image preview

---

###  2. RF values are missing or show zero

- Spot might be too close to the **Min Line** (baseline)
- Lines may be placed in reverse order (Max below Min)
- Click **Reset** and try again with better spacing

---

###  3. Upload to ELN does not work

- Upload works **only if** the image was loaded from Chemotion ELN
- Ensure you are logged in to the ELN and CSRF token is available
- Local uploads can’t be sent to ELN – only download is allowed

---

### 4. I see the message "No annotated image found"...

- You need to run RF calculation first

---

### 5. I see the message "Upload failed"...

- It means the CSRF token might got lost, try to refresh the page

##  Resetting

Click the **Reset** button to:
- Clear all annotations
- Reset RF table and image
- Start fresh with the same or new image

---

##  Pro Tips

-  **Always** draw **Min Line** and **Max Line** before placing spots
-  Click the **center of the spot** on the TLC plate
-  Use a high-resolution image in bright light
-  Use the Reset button to correct mistakes

---

##  Valid RF Range Reference

| Spot Position        | Expected RF Value | Notes                            |
|----------------------|-------------------|----------------------------------|
| Near baseline        | ~0.00–0.10        | Slow or large molecules          |
| Middle of plate      | ~0.40–0.60        | Good zone of separation          |
| Near solvent front   | ~0.80–0.99        | Highly mobile compounds          |
| Below Min Line       | ❌ Invalid         | Spot marked incorrectly          |

---

![RF Value Warnings](/img/ThirdPartyApps/Tlc/tlc-rf-errors.png)
