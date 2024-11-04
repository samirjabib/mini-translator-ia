type TextInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
};

export default function TextInput({ inputText, setInputText }: TextInputProps) {
  return (
    <input
      type="text"
      placeholder="Enter text to translate"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      className="border p-2 w-full"
    />
  );
}
