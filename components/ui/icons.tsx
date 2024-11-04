// /components/Icon.tsx
import { icons } from "@/app/lib/icons";
import React from "react";

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return <span className={className}>{icons[name]}</span>;
}
