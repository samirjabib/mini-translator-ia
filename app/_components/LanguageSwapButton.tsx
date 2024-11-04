// /components/LanguageSwapButton.tsx
import { Button } from "@/components/ui/button";
import Icon from "./IconComponent";

type LanguageSwapButtonProps = {
  onClick: () => void;
};

export default function LanguageSwapButton({
  onClick,
}: LanguageSwapButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className="border-blue-500 text-blue-600 hover:bg-blue-100"
    >
      <Icon name="swap" className="h-4 w-4" />
      <span className="sr-only">Swap languages</span>
    </Button>
  );
}
