# Button Component Documentation

A comprehensive, reusable button component with four variants designed to match the Figma specifications exactly.

## 🎨 Design Variants

### 1. Brand Variant

- **Background**: `#128948` (Green)
- **Text**: White
- **Typography**: Satoshi Medium, 20px, -0.40px tracking
- **Use Case**: Primary brand actions, hero section CTAs
- **Icon Support**: Phone, folder, or none

### 2. Primary Variant

- **Background**: `#101010` (Dark gray)
- **Text**: White
- **Typography**: Satoshi Bold, 16px, -0.32px tracking
- **Use Case**: Navigation CTAs, high-priority actions
- **Icon Support**: Phone, folder, or none

### 3. Secondary Variant

- **Background**: `#E6E6E6` (Light gray)
- **Text**: `#101010` (Dark gray)
- **Typography**: Satoshi Medium, 20px, -0.40px tracking
- **Use Case**: Secondary actions, alternative CTAs
- **Icon Support**: Phone, folder, or none

### 4. Tertiary Variant

- **Background**: Transparent
- **Text**: `#128948` (Green)
- **Typography**: Satoshi Medium, 24px, -0.48px tracking
- **Use Case**: Text-only actions, subtle CTAs
- **Icon Support**: None (text-only)

## 📋 Props Interface

```typescript
interface ButtonProps {
  variant?: "brand" | "primary" | "secondary" | "tertiary";
  children: ReactNode;
  icon?: "phone" | "folder" | "none";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
```

## 🚀 Usage Examples

### Basic Usage

```tsx
import Button from "@/components/Button";

// Brand variant with phone icon
<Button variant="brand" icon="phone">
  Free 15min call
</Button>

// Secondary variant with folder icon
<Button variant="secondary" icon="folder">
  File My Taxes Now
</Button>

// Tertiary variant (text-only)
<Button variant="tertiary">
  Streamline My GST
</Button>
```

### With Event Handlers

```tsx
<Button
  variant="primary"
  icon="phone"
  onClick={() => console.log("Button clicked!")}
>
  Call Now
</Button>
```

### Disabled State

```tsx
<Button variant="brand" icon="phone" disabled>
  Free 15min call
</Button>
```

### Custom Styling

```tsx
<Button variant="secondary" icon="folder" className="w-full md:w-auto">
  File My Taxes Now
</Button>
```

## 🎯 Implementation in Hero Section

The Hero component now uses the Button component:

```tsx
// Hero section buttons
<div className="flex items-center gap-5">
  <Button variant="secondary" icon="folder">
    File My Taxes Now
  </Button>
  <Button variant="brand" icon="phone">
    Free 15min call
  </Button>
</div>

// Navigation button
<Button variant="primary" icon="phone">
  Free 15min call
</Button>
```

## 🎨 Design Specifications

### Spacing & Layout

- **Padding**: 12px vertical, 32px horizontal
- **Border Radius**: 16px (rounded-2xl)
- **Icon Gap**: 8px between icon and text
- **Icon Size**: 24x24px (w-6 h-6)

### Typography

- **Font Family**: Satoshi
- **Font Weights**: Medium (500) for brand/secondary/tertiary, Bold (700) for primary
- **Line Heights**: Optimized for each variant

### Colors

- **Brand Green**: `#128948` (primary), `#0e6d37` (hover)
- **Primary Dark**: `#101010` (background), `#2a2a2a` (hover)
- **Secondary Gray**: `#E6E6E6` (background), `#d9d9d9` (hover)
- **Text Colors**: White for dark backgrounds, dark gray for light backgrounds

### States

- **Default**: Full opacity, normal cursor
- **Hover**: Color transitions, cursor pointer
- **Disabled**: 50% opacity, not-allowed cursor

## 🔧 Technical Features

- **TypeScript**: Fully typed with proper interfaces
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Responsive**: Works across all screen sizes
- **Customizable**: Accepts additional className for custom styling
- **Icon Support**: Built-in support for phone and folder icons
- **Event Handling**: Supports onClick and other button events

## 📱 Responsive Behavior

The Button component is fully responsive and works well in:

- Mobile layouts (stacked or inline)
- Desktop layouts (side-by-side)
- Navigation bars
- Hero sections
- Form submissions

## 🎨 Figma Integration

This component was designed to match the exact specifications from your Figma design:

- Pixel-perfect typography
- Exact color values
- Proper spacing and layout
- Icon positioning and sizing
- Hover states and transitions

## 📝 Best Practices

1. **Use Brand variant** for primary brand actions
2. **Use Primary variant** for navigation CTAs
3. **Use Secondary variant** for alternative actions
4. **Use Tertiary variant** for subtle, text-only actions
5. **Always provide meaningful text** for accessibility
6. **Use appropriate icons** to enhance user understanding
7. **Test disabled states** for form validation scenarios
