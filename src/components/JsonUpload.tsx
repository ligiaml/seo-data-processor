type Props = {
  onLoad: (data: any) => void;
};

export default function JsonUpload({ onLoad }: Props) {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const json = JSON.parse(reader.result as string);
      onLoad(json);
    };
    reader.readAsText(file);
  }

  return (
    <div className="upload-section">
        <label htmlFor="json-upload">Upload JSON   </label>
      <input type="file" id="json-upload" accept=".json" onChange={handleFile} />
    </div>
  );
}
