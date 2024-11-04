// /components/LanguageSelector.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LanguageSelectorProps = {
  languages: { code: string; name: string }[];
  selectedLanguage: string;
  onChange: (language: string) => void;
};

export default function LanguageSelector({
  languages,
  selectedLanguage,
  onChange,
}: LanguageSelectorProps) {
  return (
    <Select value={selectedLanguage} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[140px] border-blue-300 focus:ring-blue-500">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
