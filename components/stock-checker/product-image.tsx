"use client";

import { useState } from "react";
import Image from "next/image";
import { Package } from "lucide-react";

interface ProductImageProps {
  imageUrl?: string | null;
  productName?: string | null;
  size?: number;
  className?: string;
}

export function ProductImage({
  imageUrl,
  productName,
  size = 120,
  className = "",
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  // Show placeholder if no image URL or if image failed to load
  if (!imageUrl || imageError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-muted rounded-lg ${className}`}
        style={{ width: size, height: size, minWidth: size }}
      >
        <Package className="h-8 w-8 text-muted-foreground mb-1" />
        <span className="text-xs text-muted-foreground text-center px-2 line-clamp-2">
          {productName || "Product"}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-muted ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      <Image
        src={imageUrl}
        alt={productName || "Product image"}
        fill
        className="object-contain"
        onError={() => setImageError(true)}
        loading="lazy"
        sizes={`${size}px`}
      />
    </div>
  );
}
