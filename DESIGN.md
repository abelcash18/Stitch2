---
name: Vaulted Luxe
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d3c4b3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8f7f'
  outline-variant: '#4f4538'
  surface-tint: '#f4bd6c'
  primary: '#f4bd6c'
  on-primary: '#442b00'
  primary-container: '#c9974a'
  on-primary-container: '#4d3100'
  inverse-primary: '#7f560c'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#9ccbfd'
  on-tertiary: '#003355'
  tertiary-container: '#76a4d4'
  on-tertiary-container: '#003960'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb1'
  primary-fixed-dim: '#f4bd6c'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#624000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#cfe4ff'
  tertiary-fixed-dim: '#9ccbfd'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#114a74'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-light: '#F5F5F5'
  text-muted: '#666666'
  gold-leaf: '#E5B169'
  onyx-black: '#0A0A0A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  margin-desktop: 80px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

The brand personality is one of quiet luxury, impenetrable security, and modern exclusivity. It targets high-discerning users who value privacy as much as aesthetic refinement. The UI should evoke a sense of being inside a physical high-end vault—solid, heavy, but meticulously polished.

The design style is a blend of **Minimalism** and **Glassmorphism**, specifically utilizing "Obsidian Glass" effects. This involves deep, dark backgrounds paired with sharp typography and subtle, high-quality metallic accents. The aesthetic is professional yet editorial, bridging the gap between a private bank and a high-fashion digital experience. All brand treatments, including the logo container, must be perfectly circular to represent wholeness and the "O" in Vaulted.

## Colors

The palette is anchored in a high-contrast dark mode. The primary color is a sophisticated Gold (#C9974A), used sparingly for high-priority calls to action and critical status indicators. The background utilizes Onyx Black (#0A0A0A) to provide depth, while the secondary color (#1E1E1E) provides tonal separation for container surfaces.

Text should primarily be rendered in Surface Light (#F5F5F5) for maximum legibility against the dark void. Neutral grays are used to establish a hierarchy of information density without cluttering the visual field. Gold accents should be treated like jewelry—precise and intentional.

## Typography

This design system employs a classic serif/sans-serif pairing to communicate both heritage and modern efficiency. 

**Playfair Display** is reserved for headlines and editorial moments. Its high-contrast strokes reflect a premium, "signed" quality. **DM Sans** provides a functional, low-contrast counterpoint for all body text, data entries, and UI controls. 

For labels and navigational elements, use DM Sans in uppercase with increased letter spacing to create a sense of organized precision. Display headings should use slight negative letter spacing to feel tighter and more impactful on desktop screens.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain an ultra-premium, controlled feel. On large displays, content is centered within a 1280px max-width container.

The rhythm is generous; use significant vertical whitespace (`section-gap`) to allow the high-quality typography to breathe. On mobile, transition to a 4-column fluid grid with 20px side margins. Padding within cards and containers should be expansive, never cramped, reinforcing the feeling of "luxury of space." Use an 8px base unit for all component-level spacing.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Obsidian Glass** effects rather than traditional shadows. 

1.  **Level 0 (Base):** Onyx Black (#0A0A0A).
2.  **Level 1 (Cards/Surface):** Secondary Color (#1E1E1E) with a subtle 1px stroke in #666666 (at 20% opacity).
3.  **Level 2 (Modals/Popovers):** Dark translucent glass (blur: 20px) with a slightly brighter 1px top-border to simulate light hitting a sharp edge.

Shadows, when used, should be ultra-soft, using the primary gold color at a very low opacity (5-10%) to create a "glow" rather than a drop shadow, signifying an active or "unlocked" state.

## Shapes

The shape language is primarily "Rounded" (8px base) to balance the sharpness of the serif typography. However, the brand identity requires a specific exception for high-level branding: **The logo and primary avatars must always be perfect circles.**

Buttons and input fields should use a consistent 8px radius. Larger containers like cards should use a 16px radius (`rounded-lg`) to feel substantial and safe. Avoid pill shapes for buttons; a refined rectangle with rounded corners feels more "architectural" and secure.

## Components

**Buttons:**
Primary buttons are solid Gold (#C9974A) with black DM Sans text, bold. Secondary buttons use a transparent background with a 1px Gold border. Ghost buttons use only Gold text.

**Input Fields:**
Fields are dark (#1E1E1E) with a bottom-only border in #666666 that turns Gold upon focus. Labels should be small-caps DM Sans.

**Cards:**
Use the Level 1 Elevation (Obsidian Glass). Cards should have no visible shadow, relying on the #1E1E1E surface to contrast against the #0A0A0A background.

**Chips/Badges:**
Small, rectangular with 4px corners. Use a dark background with Gold text to denote "Exclusive" or "Secure" status.

**Lists:**
List items are separated by thin, low-opacity lines (#666666 at 10%). Icons within lists should always be monochromatic (F5F5F5) unless they represent a critical action.

**Logo Treatment:**
The logo must be centered within a circular gold-bordered frame. This "Coin" or "Vault Handle" treatment is the signature mark of the system.