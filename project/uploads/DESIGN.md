---
name: Tytan Industrial
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#404941'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#707970'
  outline-variant: '#c0c9be'
  surface-tint: '#2a6a3f'
  primary: '#003215'
  on-primary: '#ffffff'
  primary-container: '#004b23'
  on-primary-container: '#79bb87'
  inverse-primary: '#93d6a0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#282b2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e4143'
  on-tertiary-container: '#aaadaf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aef2bb'
  primary-fixed-dim: '#93d6a0'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#0b5229'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built upon the pillars of **Agricultural Engineering** and **Technological Reliability**. It evokes the raw power of heavy machinery while maintaining the surgical precision of modern field technology. The brand personality is authoritative and rugged, yet approachable through a "clean-room" digital execution.

The visual style is **Corporate / Modern** with a structural, industrial backbone. It prioritizes clarity and efficiency, utilizing high-quality agricultural imagery framed within a rigid, engineered grid. The emotional response should be one of absolute trust—the UI must feel as durable and high-performing as the sprayers themselves.

## Colors

The palette is rooted in the heritage of the field. **Dark Green (#004B23)** serves as the primary anchor, representing stability and the agricultural environment. **Copper/Orange (#D97706)** is used strategically as a high-visibility accent for calls-to-action and critical data points, mimicking the warning lights and mechanical components of heavy equipment.

The background is predominantly **White** to ensure a "clean" and professional workspace. Neutral tones lean towards cool slates to provide a technical, metallic contrast to the organic primary green. This design system defaults to **light mode** to maintain readability under high-glare field conditions.

## Typography

This design system employs a high-contrast typographic hierarchy to balance power and legibility. **Montserrat** is utilized for all headings; its geometric, bold weights convey industrial strength and modernism. 

**Work Sans** is selected for body text and interface labels. The lighter weights (300) provide a sophisticated, clean aesthetic for long-form content, while the Medium and Semi-Bold weights ensure that technical data and button labels remain legible in high-pressure environments. All labels should utilize a slight letter-spacing increase to mimic the stamped technical plates found on machinery.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to ensure a structured, "blueprint" feel. A standard 12-column grid is used for desktop views, with content restricted to a 1280px container to maintain visual density and control.

A strict **8px spacing rhythm** governs the vertical and horizontal flow. Larger gaps (48px+) are used between major sections to emphasize the "clean" agricultural aesthetic, while tighter spacing (12px-24px) is reserved for data-heavy dashboard modules. Components should favor generous internal padding to reflect a sense of professional-grade robustness.

## Elevation & Depth

To maintain the "Heavy Machinery" inspiration, this design system avoids soft, floating shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

Depth is communicated through "stacking" surfaces. The base layer is white, with secondary containers using a very subtle grey (#F1F5F9). Interactive elements and cards are defined by 1px solid borders in a light slate tone, creating a look reminiscent of paneled metal. High-priority modals may use a minimal, sharp shadow (4px blur, 10% opacity) to signify focus without breaking the industrial aesthetic.

## Shapes

The shape language is disciplined and geometric. **Level 1 (Soft)** roundedness is applied across the system. This 0.25rem (4px) radius provides a subtle "machined" edge—soft enough to feel modern and professional, but sharp enough to maintain a sense of structural integrity.

Buttons and input fields follow this 4px standard. Large imagery containers may occasionally use the 0.5rem (rounded-lg) variant to create a frame that feels like a viewing window on a cabin console.

## Components

### Buttons
Primary buttons use the Copper (#D97706) fill with white Montserrat Bold text, representing "Active/Engaged" states. Secondary buttons utilize the Dark Green (#004B23) outline. All buttons feature a 4px corner radius and hover states that involve a slight darkening of the fill color.

### Input Fields
Inputs are characterized by 1px Slate-300 borders and Work Sans Light placeholder text. Upon focus, the border shifts to the Primary Dark Green with a 2px stroke. Label placement is strictly above the field in uppercase Work Sans Bold.

### Cards
Cards are the primary container for machinery specs and telemetry data. They feature a white background, 1px light grey border, and no shadow. Headers within cards should have a subtle grey bottom border to separate technical parameters from descriptions.

### Chips & Status Indicators
Status indicators utilize "Traffic Light" logic (Success: Green, Warning: Copper, Danger: Red) but are styled as "pills" with 1px outlines. They represent the "Field Tech" aspect of the system, providing quick-glance diagnostics.

### Gauges & Data Visualization
Specialized components for this design system include circular and linear gauges. These should use the Copper accent for current values against a Dark Green track, emphasizing the machine's performance and output.