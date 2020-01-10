---
title: "CSS Web Safe Font Combinations"
date: "2020-01-10"
description: The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems.
category: CSS
---

[CSS Web Safe Font Combinations](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

The **font-family** property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. If the browser does not support the first font, it tries the next font.

Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available:
```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

Below are some commonly used font combinations, organized by generic family.

#### Serif Fonts
**font-family**
- <p style="font-family:georgia;">Georgia, serif</p>   
- <p style="font-family:'Palatino Linotype';">"Palatino Linotype", "Book Antiqua", Palatino, serif</p>  
- <p style="font-family:'Times New Roman';">"Times New Roman", Times, serif</p>  

#### Sans-Serif Fonts
**font-family**
- <p style="font-family:arial;">Arial, Helvetica, sans-serif</p>  
- <p style="font-family:'arial black';">"Arial Black", Gadget, sans-serif</p>  
- <p style="font-family:'comic sans ms';">"Comic Sans MS", cursive, sans-serif</p>  
- <p style="font-family:impact;">Impact, Charcoal, sans-serif</p>  
- <p style="font-family:'lucida sans unicode';">"Lucida Sans Unicode", "Lucida Grande", sans-serif</p>  
- <p style="font-family:tahoma;">Tahoma, Geneva, sans-serif</p>   
- <p style="font-family:'trebuchet ms';">"Trebuchet MS", Helvetica, sans-serif</p>   
- <p style="font-family:verdana;">Verdana, Geneva, sans-serif</p>   

#### Monospace Fonts
**font-family**
- <p style="font-family:'courier new';">"Courier New", Courier, monospace</p>  
- <p style="font-family:'lucida console';">"Lucida Console", Monaco, monospace</p>  

[Google Fonts](https://www.w3schools.com/howto/howto_google_fonts.asp)
