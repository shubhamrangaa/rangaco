"use client";

import { FolderPlus, Phone } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "brand" | "primary" | "secondary" | "tertiary";
  icon?: "folder" | "phone";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export default function Button({
  children,
  variant,
  icon,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    brand:
      "bg-brand text-white hover:bg-brand-dark border-none outline-none focus:ring-brand",
    primary:
      "bg-ink-strong text-white hover:bg-[#2a2a2a] border-none outline-none focus:ring-ink-strong",
    secondary:
      "bg-[#E6E6E6] text-ink-strong hover:bg-[#d4d4d4] border-none outline-none focus:ring-ink-strong",
    tertiary:
      "bg-transparent text-brand hover:bg-brand/10 border-none outline-none focus:ring-brand",
  };

  const iconComponent = {
    folder: <FolderPlus className="w-5 h-5" aria-hidden="true" />,
    phone: <Phone className="w-5 h-5" aria-hidden="true" />,
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {icon && iconComponent[icon]}
      <span>{children}</span>
    </button>
  );
}
