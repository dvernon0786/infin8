# Prism Studio Design System - Typography & Color Scheme

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Weights Available**: 300, 400, 500, 600, 700
- **Usage**: Used throughout the entire site

### Font Sizes & Hierarchy
- **Hero Title**: `text-5xl sm:text-6xl lg:text-7xl` (clamp: 48px - 72px)
  - Font weight: 700 (semibold)
  - Letter spacing: `tracking-tight` (-0.02em)
  - Line height: 1.1

- **Section Headings**: `text-4xl sm:text-5xl` (36px - 48px)
  - Font weight: 700 (semibold)
  - Letter spacing: `tracking-tight`

- **Subheadings**: `text-2xl` (24px)
  - Font weight: 600 (medium)

- **Body Text**: `text-base sm:text-lg` (16px - 18px)
  - Font weight: 400 (regular)
  - Line height: 1.6 (relaxed)

- **Small Text**: `text-sm` (14px)
  - Font weight: 400-600

- **Extra Small**: `text-xs` (12px)
  - Font weight: 500-600
  - Used for badges, labels, uppercase tracking

### Typography Scale
```
text-xs: 12px
text-sm: 14px
text-base: 16px
text-lg: 18px
text-xl: 20px
text-2xl: 24px
text-3xl: 30px
text-4xl: 36px
text-5xl: 48px
text-6xl: 60px
text-7xl: 72px
```

## Color Scheme

### Primary Colors
- **Background**: `#ffffff` (white)
- **Text Primary**: `#1A1A1A` / `text-gray-900` (near black)
- **Text Secondary**: `#666666` / `text-gray-600` (medium gray)
- **Text Tertiary**: `#999999` / `text-gray-500` (light gray)

### Gray Scale (Tailwind)
- `gray-50`: `#F9FAFB` (lightest background)
- `gray-100`: `#F3F4F6` (light background)
- `gray-200`: `#E5E7EB` (borders, dividers)
- `gray-300`: `#D1D5DB`
- `gray-400`: `#9CA3AF`
- `gray-500`: `#6B7280` (secondary text)
- `gray-600`: `#4B5563` (body text)
- `gray-700`: `#374151` (headings, nav links)
- `gray-800`: `#1F2937`
- `gray-900`: `#111827` / `#1A1A1A` (primary text)

### Accent Colors
- **Primary Gradient**: 
  - From: `#667eea` (blue-purple)
  - To: `#764ba2` (purple)
  - Used in: Text gradients, button hovers

- **Neutral Dark**: 
  - `#000000` / `neutral-950` (buttons, dark elements)
  - `neutral-900`: `#171717`
  - `neutral-700`: `#404040`

### Interactive Colors
- **Button Primary**: `bg-gray-900` / `#111827` (dark)
- **Button Hover**: `bg-gray-800` / `#1F2937`
- **Button Secondary**: `bg-white` with `ring-1 ring-black/5` (subtle border)

### Glass/Backdrop Effects
- **Glass Background**: `bg-white/80` or `bg-white/40` (semi-transparent white)
- **Backdrop Blur**: `backdrop-filter: blur(20px)`
- **Border**: `ring-1 ring-black/5` (1px border with 5% black opacity)

### Shadow System
- **Small**: `shadow-sm` - `0 1px 2px rgba(0,0,0,0.05)`
- **Medium**: `shadow-md` - `0 4px 6px rgba(0,0,0,0.1)`
- **Large**: `shadow-lg` - `0 10px 15px rgba(0,0,0,0.1)`
- **XL**: `shadow-xl` - `0 20px 25px rgba(0,0,0,0.1)`
- **2XL**: `shadow-2xl` - `0 25px 50px rgba(0,0,0,0.25)`

### Special Effects
- **Ring Colors**: `ring-black/5`, `ring-black/10` (5-10% opacity borders)
- **Text Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Orb Glow**: Multiple radial gradients with rgba colors for crystal effects

## Color Usage Patterns

### Text Colors
- **Headings**: `text-gray-900` (#1A1A1A)
- **Body**: `text-gray-600` (#4B5563)
- **Secondary**: `text-gray-500` (#6B7280)
- **Muted**: `text-gray-400` (#9CA3AF)

### Background Colors
- **Primary**: `bg-white` (#ffffff)
- **Secondary**: `bg-gray-50` (#F9FAFB)
- **Tertiary**: `bg-gray-100` (#F3F4F6)
- **Dark**: `bg-gray-900` (#111827)

### Border Colors
- **Default**: `ring-1 ring-black/5` (1px, 5% opacity)
- **Strong**: `ring-1 ring-black/10` (1px, 10% opacity)
- **Subtle**: `border-gray-200` (#E5E7EB)

## Typography Patterns

### Headings
```css
h1: font-size: clamp(36px, 8vw, 72px), font-weight: 700, letter-spacing: -0.02em
h2: font-size: clamp(32px, 5vw, 48px), font-weight: 700
h3: font-size: 24px, font-weight: 600
h4: font-size: 20px, font-weight: 600
```

### Body Text
```css
Large: font-size: 18px-20px, line-height: 1.6
Regular: font-size: 16px, line-height: 1.6
Small: font-size: 14px, line-height: 1.5
```

### Special Elements
- **Badges**: `text-xs`, `font-weight: 500-600`, `uppercase`, `tracking-wide`
- **Buttons**: `text-sm` to `text-base`, `font-weight: 600-700`
- **Labels**: `text-sm`, `font-weight: 600`

## Key Design Principles

1. **Minimal Color Palette**: Primarily grayscale with subtle accent gradients
2. **High Contrast**: Dark text (#1A1A1A) on white backgrounds
3. **Subtle Borders**: Low opacity rings (5-10%) for depth without heaviness
4. **Glass Morphism**: Semi-transparent backgrounds with blur effects
5. **Generous Spacing**: Large padding and margins for breathing room
6. **Tight Letter Spacing**: `-0.02em` on large headings for modern look
7. **Responsive Typography**: `clamp()` functions for fluid scaling

