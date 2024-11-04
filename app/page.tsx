"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { toast } from "@/components/ui/toast";
import TranslatorHeader from "./_components/TranslatorHeader";
import LanguageSelector from "./_components/LanguageSelector";
import LanguageSwapButton from "./_components/LanguageSwapButton";
import { Textarea } from "@/components/ui/textarea";
import Icon from "./_components/IconComponent";
import TranslatorActions from "./_components/TranslatorActions";
import { useTranslation } from "./hooks/useTranslation";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
];

export default function Page() {
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [isCopied, setIsCopied] = useState(false);
  const { inputText, setInputText, outputText, translate } = useTranslation();

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter text to translate.",
        variant: "destructive",
      });
      return;
    }
    translate(sourceLanguage, targetLanguage);
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

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
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-2 sm:p-4">
      <Card className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl shadow-xl bg-white">
        <CardContent className="p-3 sm:p-6">
          <TranslatorHeader />
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <LanguageSelector
                  languages={languages}
                  selectedLanguage={sourceLanguage}
                  onChange={setSourceLanguage}
                  placeholder="From"
                />
                <LanguageSwapButton onClick={swapLanguages} />
                <LanguageSelector
                  languages={languages}
                  selectedLanguage={targetLanguage}
                  onChange={setTargetLanguage}
                  placeholder="To"
                />
              </div>
              <Textarea
                placeholder="Enter text to translate"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
                className="resize-none border-blue-300 focus:ring-blue-500"
              />
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-500 text-blue-600 hover:bg-blue-100"
                >
                  <Icon name="document" className="h-4 w-4 mr-2" />
                  Translate Document
                </Button>
                <Button
                  onClick={handleTranslate}
                  className="w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Icon name="send" className="h-4 w-4 mr-2" />
                  Translate
                </Button>
              </div>
            </div>
            <Textarea
              placeholder="Translated text will appear here"
              value={outputText}
              readOnly
              rows={6}
              className="resize-none bg-blue-50 border-blue-300"
            />
            <TranslatorActions
              outputText={outputText}
              isCopied={isCopied}
              onCopy={copyToClipboard}
              setIsCopied={setIsCopied}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
