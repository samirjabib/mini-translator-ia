// /components/TranslatorActions.tsx
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import Icon from "./IconComponent";

type TranslatorActionsProps = {
  outputText: string;
  isCopied: boolean;
  onCopy: () => void;
  setIsCopied: (value: boolean) => void;
};

export default function TranslatorActions({
  outputText,
  isCopied,
  onCopy,
  setIsCopied,
}: TranslatorActionsProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setIsCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The translated text has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "There was an error copying the text.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={copyToClipboard}
        variant="outline"
        className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
      >
        {isCopied ? (
          <Icon name="check" className="h-4 w-4 mr-2" />
        ) : (
          <Icon name="copy" className="h-4 w-4 mr-2" />
        )}
        {isCopied ? "Copied" : "Copy"}
      </Button>
      <Button
        variant="outline"
        className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
      >
        <Icon name="share" className="h-4 w-4 mr-2" />
        Share
      </Button>
      <Button
        variant="outline"
        className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
      >
        <Icon name="listen" className="h-4 w-4 mr-2" />
        Listen
      </Button>
    </div>
  );
}
