---
id: details_analytics
title: Details for analytics
slug: details_analytics
author: Nicole Jung
---

## Purity of the measured samples and quality of datasets

## Purity and impurities

Please check carefully the purity of your compounds before you provide your data. If the data includes by-products or solvents in the spectra that are not mentioned in the content/description the data will be sent back for revision or will be rejected. <!--truncate--> 
If your spectra contain impurities that can't be removed (isomerization during measurement or similar issues) please indicate the impurities, the percentage of impurities and their origin (if known) clearly in all types of analysis. Examples are: <br />
- 1H NMR (500 MHz, DMSO-d6, ppm) δ = [...] 8.05 (m, 2H, CH), 7.49 (m, 2H, CH). Impurities: 10% impurities due to the formation of the cis-isomer during the measurement of the sample.
- 1H NMR (500 MHz, DMSO-d6, ppm) δ = [...] 8.05 (m, 2H, CH), 7.49 (m, 2H, CH). Impurities: 1% ethyl acetate, unknown impurities at 1.11-2.22 ppm and 3.33 ppm.
- 1H NMR (500 MHz, DMSO-d6, ppm) δ = [...] 8.05 (m, 2H, CH), 7.49 (m, 2H, CH). Impurities: This spectrum contains around 5% impurities at 7.66 ppm and 2.44 ppm due to an unknown by-product.

## Missing signals

Proton and carbon spectra will be automatically validated by the number of protons and carbons given in the analysis in comparison with the number of atoms given by the sum formula. Therefore: if there are missing signals e.g. (due to proton exchange of acidic protons or carbon signals that are too broad to be detected) please add this information to the analysis in the form "Missing Signal (1H, OH) due to....", "1H is missing (1H, OH)" or "1C is missing (1C, Cq)" and so on.
Example: 1H NMR (500 MHz, MeOD-d4, ppm) δ = 13.23 (bs, 2H, CO2H), 8.24 (d, 1H, J = 1.5 Hz, CH), 8.17 (dd, 1H, J = 8.0 Hz, 1.5 Hz, CH), 8.05 (m, 2H, CH), 7.81 (d, 1H, J = 8.0 Hz, CH), 7.63 (m, 2H, CH), 7.49 (m, 2H, CH). Missing Signal (1H, OH) due to H/D exchange in MeOD-d4.
Important with respect to the format: please add the information on the number and type of missing signals in brackets and use a comma to separate from other information within the bracket (1H, xx).

## Order of analyses

Please order the analysis part of your molecules/samples according to

1. 1H NMR
2. 13C NMR and other NMR data
3. mass data
4. IR data
5. others (EA, crystal structures)
   Please use the "order mode" button in the analysis tab.

## Formatting of NMR data

## Coupling constants

1. Please give the full description for each coupling constant (see example given below),
2. Please use italic style for "<i>J</i>",
3. Please add a space before and after "=", e.g. <i>J</i> = 2.2 Hz,
4. Please give the coupling constant with an accuracy of 0.1 Hz.
   Example for issues 1-4:

- wrong: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 1.11 (dd, J=11.11 Hz, 2.22 Hz, 2H), (...).
- right: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 1.11 (dd, <i>J</i> = 11.1 Hz, <i>J</i> = 2.2 Hz, 2H), (...).

5. Don't forget to give coupling constants for 13C NMR data if applicable (e.g. C-F coupling, C-P coupling)

## Amount of protons and carbons

(1) Please give the amount of protons and carbons in brackets without additional spaces,

- wrong: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 1.11 (dd, <i>J</i> = 11.1 Hz, <i>J</i> = 2.2 Hz, 2 H), (...); 13C NMR (100 MHz, CDCl3, ppm) δ = (...), 111.1 (2 C), (...).
- right: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 1.11 (dd, <i>J</i> = 11.1 Hz, <i>J</i> = 2.2 Hz, 2H); 13C NMR (100 MHz, CDCl3, ppm) δ = (...), 111.1 (2C), (...).

(2) Please give the amount of carbons if there is more than one carbon to be assigned to one signal.

- 13C NMR (100 MHz, CDCl3, ppm) δ = (...), 129.5, 126.7 (2C), (...).

(3) For compounds that are obtained as mixtures of isomers and cannot be separated:

- <b>1H NMR</b>: please give the number of protons per signal to achieve 1H/proton as combination of all isomers:<br />
  Example: 1H NMR (500 MHz, MeOD-d4, ppm) δ = 13.23 (bs, 0.4H, CO2H-isomer1), 12.98 (bs, 0.6H, CO2H-isomer2), 8.24 (d, 0.6H, <i>J</i> = 1.5 Hz, CH-isomer2), 8.21 (d, 0.4H, <i>J</i> = 1.5 Hz, CH-isomer1), 3.30 (s, 3H, CH3-isomer1+-isomer2) etc.

- <b>13C NMR</b>: If you can assign all signals: please give separate lists of 13C assignments for isomer 1 and isomer 2 and separate both analytical desciptions with the text-fragment: "Other isomer:"

- <b>1H and 13C NMR</b>: If the assignment is not possible, please list all signals, assign as many as you can and submit the measurement by changing the "process": As in all other cases, the NMR requires the process-assignment "13C NMR" or "1H NMR", Isomers which can't be assigned need to be reset to the unspecified term "process".  
  Please add the info "<b>_due to an inseparable mixture of isomers, the total amount of protons/carbons could not be confirmed by a clear assignment_</b>" to the end of your analysis.

## 3.3.3 Others

Please omit spaces while giving ranges e.g. for multiplets:

- wrong: <b>1H NMR</b> (300 MHz, CDCl3, ppm) δ = (...), 2.27 – 2.22 (m, 2H, C<i>H</i>2), (...).
- right: <b>1H NMR</b> (300 MHz, CDCl3, ppm) δ = (...), 2.27–2.22 (m, 2H, C<i>H</i>2), (...).

Please use the long "minus" symbol for giving the ranges:

- wrong: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 7.71-7.87 (m, 3H), (...).
- right: 1H NMR (400 MHz, CDCl3, ppm) δ = (...), 7.71–7.87 (m, 3H), (...).  
  Hint: use the symbol "magic wand" for an automated formatting

## Mass spectrometry data

1. Please give mass spectra in the following form:

- EI (m/z, 70 eV, 70 °C): 278 (72) [M]+, 221 (100), 147 (31), 115 (15), 103 (23); HRMS–EI (m/z): [M]+ calcd for C15H18OS2, 278.0794; found, 278.0795.

2. Please ensure that the peak with the highest detected molecular mass belongs to your molecule (either as fragment if the molecule peak is not found, or as part of a formed complex/dimer or similar). If there are signals with a higher mass than your product, please explain these masses and give this explanation in brackets after the signal in the signal list.
3. Please start with the highest detected mass and finish with the lowest.
4. Please give isotope patterns for Cl- and Br-containing compounds

- EI (m/z, 70 eV, 70 °C): 278/280 (72/72) [M]+, 221/223 (100/100), 103 (23).

## IR spectroscopy data

Please give the IR spectra analysis in the following form:

- IR (ATR, ṽ): 2895, 1703, 1598, 1488, 1438, 1417, 1359, 1279, 1240, 1157, 1113, 1072, 1023, 998, 962, 910, 818, 786, 759, 699, 653, 616 cm–1.

## 19F NMR spectroscopy data

If the compound contains Fluorine atoms, the analysis set should contain 19F NMR data.

## 31P NMR spectroscopy data

If the compound contains Phosphorus, the analysis set should contain 31P NMR data.
