import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type LanguageSelectorProps = {
  languages: { code: string; name: string }[];
  selectedLanguage: string;
  onChange: (language: string) => void;
  placeholder: string;
};

export default function LanguageSelector({
  languages,
  selectedLanguage,
  onChange,
  placeholder,
}: LanguageSelectorProps) {
  return (
    <Select value={selectedLanguage} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[140px] border-blue-300 focus:ring-blue-500">
        <SelectValue placeholder={placeholder} />
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
