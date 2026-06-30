---
name: EduStream
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#005338'
  on-tertiary: '#ffffff'
  tertiary-container: '#006e4b'
  on-tertiary-container: '#67f4b7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system focuses on a **Corporate / Modern** aesthetic tailored for a high-performance learning environment. It prioritizes clarity, focus, and a sense of progress. The target audience includes professional developers and students who require an interface that feels both powerful and unobtrusive.

The emotional response should be one of **confidence and momentum**. By utilizing a "Mobile-First" philosophy, the UI leverages generous tap targets, fluid transitions, and a clean hierarchical structure that avoids cognitive overload. The style is characterized by ample whitespace, a sophisticated monochromatic foundation, and high-contrast action points to guide the user through their learning journey.

## Colors
This design system utilizes a **Vibrant Indigo** as the primary brand color to signify intelligence and action. It is paired with a **Soft Slate** palette for structural elements to maintain a professional, calm atmosphere.

- **Primary (#4F46E5):** Used for main CTAs, active progress states, and brand-critical icons.
- **Secondary/Tertiary:** Used sparingly for success states (completion) and specialized track indicators.
- **Neutrals:** A range of slates (from #F8FAFC to #0F172A) provides the necessary contrast for deep hierarchy. Surface colors are kept pure white to contrast against the soft grey background, creating a clear "layered" effect for cards and modules.

## Typography
The system uses **Inter** exclusively to ensure maximum legibility across different pixel densities. The type scale is built on a modular 4px baseline.

- **Headlines:** Bold weights with slight negative letter-spacing ensure titles feel compact and impactful.
- **Body:** Standardized at 16px for primary reading to ensure accessibility for long-form educational content.
- **Labels:** Used for metadata like "Course Duration" or "Lesson Count," utilizing medium/semibold weights to differentiate from body text without needing larger sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** model for mobile devices, transitioning to a **Fixed Max-Width** container (1200px) for desktop browsers to prevent line-lengths from becoming unreadable.

- **Mobile:** Elements should span the full width of the screen minus the 16px side margins. 
- **Vertical Rhythm:** Use the `md` (16px) unit for standard spacing between related components, and `lg` (24px) to separate distinct content sections.
- **Stacking:** Cards and lists should utilize a consistent 12px gap to maintain a tight, professional density.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layering**. 

1.  **Level 0 (Background):** #F8FAFC. No shadow.
2.  **Level 1 (Cards/Surface):** Pure #FFFFFF. Features a soft, diffused shadow: `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`.
3.  **Level 2 (Active/Modals):** Pure #FFFFFF. Larger shadow to indicate interactivity: `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)`.

Avoid using harsh borders; let the subtle contrast between the surface white and background slate define the boundaries of the content.

## Shapes
The shape language is consistently **Rounded**, using a 16px (1rem) base for all primary containers. This creates a friendly, approachable feel while remaining professional.

- **Standard Buttons & Cards:** 16px (rounded-lg).
- **Inputs & Small Chips:** 8px (rounded-md).
- **Progress Trackers:** Fully rounded (pill) to suggest a smooth, continuous flow of motion.

## Components

### Buttons
- **Primary:** Solid Indigo background (#4F46E5) with white text. 16px border radius.
- **Secondary:** Ghost style with an Indigo border (1px) and Indigo text.

### Course Cards
- Elevated surface (#FFFFFF) with 16px border radius. 
- Top half features a 16:9 aspect ratio image with the top corners rounded to 16px.
- Bottom half contains Headline-MD for titles and Label-SM for metadata (time, rating).

### Progress Bars
- **Track:** Soft Slate (#E2E8F0) with a 100px border radius (pill).
- **Indicator:** Solid Indigo (#4F46E5) or Success Green (#10B981) for completed tracks.
- Height should be 8px for standard use and 4px for mini-trackers.

### Video Playback Controls
- Use a semi-transparent dark overlay (`rgba(15, 23, 42, 0.6)`) with a Backdrop Blur (10px).
- Play/Pause icons should be large, centered, and utilize the white primary color.
- Scrubbers should use the pill-shaped progress bar style with a 20px circular handle for touch accessibility.

### Inputs
- Background: White. Border: 1px Slate-200. Focus State: 2px Indigo-500 border with a soft indigo glow.