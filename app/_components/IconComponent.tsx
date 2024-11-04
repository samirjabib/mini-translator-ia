// /components/ui/Icon.tsx
import React from "react";
import { icons } from "../lib/icons";

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent className={className} />;
}
