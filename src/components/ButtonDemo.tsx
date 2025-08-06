"use client";

import Button from "./Button";

export default function ButtonDemo() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Button Component Variants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand Variant */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Brand Variant</h3>
          <div className="space-y-4">
            <Button variant="brand" icon="phone">
              Free 15min call
            </Button>
            <Button variant="brand" icon="phone" disabled>
              Free 15min call (Disabled)
            </Button>
          </div>
        </div>

        {/* Primary Variant */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Primary Variant</h3>
          <div className="space-y-4">
            <Button variant="primary" icon="phone">
              Free 15min call
            </Button>
            <Button variant="primary" icon="phone" disabled>
              Free 15min call (Disabled)
            </Button>
          </div>
        </div>

        {/* Secondary Variant */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Secondary Variant</h3>
          <div className="space-y-4">
            <Button variant="secondary" icon="folder">
              File My Taxes Now
            </Button>
            <Button variant="secondary" icon="folder" disabled>
              File My Taxes Now (Disabled)
            </Button>
          </div>
        </div>

        {/* Tertiary Variant */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Tertiary Variant</h3>
          <div className="space-y-4">
            <Button variant="tertiary">Streamline My GST</Button>
            <Button variant="tertiary" disabled>
              Streamline My GST (Disabled)
            </Button>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-bold">Usage Examples</h3>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Hero Section Buttons</h4>
          <div className="flex items-center gap-4">
            <Button variant="secondary" icon="folder">
              File My Taxes Now
            </Button>
            <Button variant="brand" icon="phone">
              Free 15min call
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Navigation Call-to-Action</h4>
          <div className="flex items-center gap-4">
            <Button variant="primary" icon="phone">
              Free 15min call
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Text-only Actions</h4>
          <div className="flex items-center gap-4">
            <Button variant="tertiary">Streamline My GST</Button>
            <Button variant="tertiary">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
