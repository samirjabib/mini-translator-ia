// /hooks/useTranslation.ts
import { useState } from "react";

export function useTranslation() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const translate = async (from: string, to: string) => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText, from, to }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutputText(data.translatedText);
      } else {
        throw new Error(data.error || "Translation failed.");
      }
    } catch (error) {
      console.error("Translation failed:", error);
      setOutputText("An error occurred during translation.");
    } finally {
      setLoading(false);
    }
  };

  return {
    inputText,
    setInputText,
    outputText,
    loading,
    translate,
  };
}
