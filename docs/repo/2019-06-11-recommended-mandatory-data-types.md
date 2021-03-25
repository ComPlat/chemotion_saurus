---
title: Data Types
slug: data_types
author: Nicole Jung
---

The following definitions are applicable to the analysis types that you wish to provide. It is not mandatory to provide all of the following types of analysis to the repository, the selection of the analysis is up to you. But if you provide data, then please provide it in the following manner. 
The list contains the file formats that should be available. In many cases, the  repository supports with automated processing of files. An example is the processing of jcamp files to images. If you provide files that can be processed (in that case jcamp), additional files (e.g. image) are not necessary. <!--truncate-->

**File types to be provided/recommended**  
**[M] = mandatory; [R] = recommended; [O] = if available**

**1. NMR**

Please provide for 1D data:
·      original data (fid or ZIP-file) [ **M** ]    
·      a jcamp file (*.jcamp or *.dx) [ **M** ]   (if not processed automatically)  
·      one image file (jpeg or png) [ **M** ] (if not processed automatically)  
·      other data formats [ **O** ]  
Please take care that your files are given with an analysis including the listing of the observed signals. The  information is supposed to be given as analyzed signals. Peak lists in form of non-analyzed signals (without coupling constants) are not suitable.   
Please provide for 2D data:
·      original data (fid or ZIP-file) [ **M** ]  
·      one image format (jpeg or png) [ **M** ]  
·      other data formats [ **R** ]  

**2. mass spec**

·      original data (MzMl, RAW, cdf, jcamp or mestre data; for other formats, please send an info to the chemotion team) [**M**]  
·      one image format (jpeg or png) [**M**] (if not processed automatically)

**3. IR data**

·      a jcamp file (*.jcamp or *.dx)  [ **M** ]  
·      original data  [ **O** ]

**4. Elemental Analysis**

·      one image format (preferred: jpeg or png) [**M**]

**5. Crystal structures**

·      one image format (jpeg or png) [**M**]  
·      reduced cif (reduced information in comparison to original CIF), to be completed with the complete cif after publication in the CSD (CCDC).[**M**] 
