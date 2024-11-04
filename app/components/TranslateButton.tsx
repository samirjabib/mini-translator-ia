export type TranslateButtonProps = {
  handleTranslate: () => void;
};

export default function TranslateButton({
  handleTranslate,
}: TranslateButtonProps) {
  return (
    <button
      onClick={handleTranslate}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Translate
    </button>
  );
}
