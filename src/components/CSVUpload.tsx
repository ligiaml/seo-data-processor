import Papa from "papaparse";

type Props = {
  onLoad: (rows: any[]) => void;
};

export default function CsvUpload({ onLoad }: Props) {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: { data: any[]; }) => {
        onLoad(results.data as any[]);
      },
    });
  }

  return (
    <div className="upload-section">
        <label htmlFor="csv-upload">Upload CSV   </label>
      <input type="file" id="csv-upload" accept=".csv" onChange={handleFile} />
    </div>
  );
}
