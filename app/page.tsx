"use client";

import { useState } from "react";
import { useTranslation } from "./hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import {
  ArrowRightLeft,
  Check,
  Copy,
  FileText,
  Languages,
  Send,
  Share2,
  Volume2,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Languages className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-800">
              Language Translator
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Select
                  value={sourceLanguage}
                  onValueChange={setSourceLanguage}
                >
                  <SelectTrigger className="w-full sm:w-[140px] border-blue-300 focus:ring-blue-500">
                    <SelectValue placeholder="From" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  onClick={swapLanguages}
                  variant="outline"
                  size="icon"
                  className="border-blue-500 text-blue-600 hover:bg-blue-100"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                  <span className="sr-only">Swap languages</span>
                </Button>
                <Select
                  value={targetLanguage}
                  onValueChange={setTargetLanguage}
                >
                  <SelectTrigger className="w-full sm:w-[140px] border-blue-300 focus:ring-blue-500">
                    <SelectValue placeholder="To" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  <FileText className="h-4 w-4 mr-2" />
                  Translate Document
                </Button>
                <Button
                  onClick={handleTranslate}
                  className="w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Translate
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Translated text will appear here"
                value={outputText}
                readOnly
                rows={6}
                className="resize-none bg-blue-50 border-blue-300"
              />
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {isCopied ? "Copied" : "Copy"}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-100"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Listen
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
