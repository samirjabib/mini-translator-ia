type LanguageSelectorProps = {
  selectedLanguage: string;
  handleCheckboxChange: (language: "es" | "fr" | "ja") => void;
};

export default function LanguageSelector({
  selectedLanguage,
  handleCheckboxChange,
}: LanguageSelectorProps) {
  return (
    <div className="mt-3">
      <h3>Select Language</h3>
      <div>
        {["es", "fr", "ja"].map((lang) => (
          <label key={lang} className="block">
            <input
              type="checkbox"
              checked={selectedLanguage === lang}
              onChange={() => handleCheckboxChange(lang as "es" | "fr" | "ja")}
            />
            {lang === "es" ? "Spanish" : lang === "fr" ? "French" : "Japanese"}
          </label>
        ))}
      </div>
    </div>
  );
}
