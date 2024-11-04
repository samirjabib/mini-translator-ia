"use client";
import { useState } from "react";
import Banner from "./components/Banner";
import TextInput from "./components/TextInput";
import LanguageSelector from "./components/LanguageSelector";
import TranslateButton from "./components/TranslateButton";

type LanguageCode = "es" | "fr" | "ja" | "";

const translations: Record<LanguageCode, string> = {
  es: "Traducción en español",
  fr: "Traduction en français",
  ja: "日本語への翻訳",
  "": "Translation not available.",
};

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("");

  const handleCheckboxChange = (language: LanguageCode) => {
    setSelectedLanguage(selectedLanguage === language ? "" : language);
  };

  const handleTranslate = () => {
    if (!inputText) {
      alert("Please enter text to translate.");
      return;
    }

    if (!selectedLanguage) {
      alert("Please select a language.");
      return;
    }

    const translatedText = translations[selectedLanguage];
    alert(`Translated Text: ${translatedText}`);
  };

  return (
    <div className="w-96 mx-auto mt-20">
      <Banner />
      <div className="mt-5">
        <h2>Text to translate</h2>
        <TextInput inputText={inputText} setInputText={setInputText} />
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          handleCheckboxChange={handleCheckboxChange}
        />
        <TranslateButton handleTranslate={handleTranslate} />
      </div>
    </div>
  );
}
