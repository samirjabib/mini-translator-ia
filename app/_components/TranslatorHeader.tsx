// /components/TranslatorHeader.tsx

import Icon from "./IconComponent";

export default function TranslatorHeader() {
  return (
    <div className="flex items-center justify-center mb-4 sm:mb-6">
      <Icon
        name="language"
        className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-600"
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-800">
        Language Translator
      </h1>
    </div>
  );
}
