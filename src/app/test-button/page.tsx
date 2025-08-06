import Button from "@/components/Button";

export default function TestButtonPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Button Component Test</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Brand Variant</h2>
        <Button variant="brand" icon="phone">
          Free 15min call
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Secondary Variant</h2>
        <Button variant="secondary" icon="folder">
          File My Taxes Now
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Primary Variant</h2>
        <Button variant="primary" icon="phone">
          Free 15min call
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Tertiary Variant</h2>
        <Button variant="tertiary">
          Streamline My GST
        </Button>
      </div>
    </div>
  );
} 