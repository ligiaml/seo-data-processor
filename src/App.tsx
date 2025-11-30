import { useState } from "react";
import JsonUpload from "./components/JsonUpload";
import CsvUpload from "./components/CSVUpload";
import { mergeData, type DomainMetrics } from "./lib/mergeData";
import DomainSummary from "./components/DomainSummary";
import SendWebhookButton from "./components/SendWebhookButton";

function App() {
  const [jsonData, setJsonData] = useState<any | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<DomainMetrics[]>([]);

  function handleProcess() {
    if (!jsonData || csvData.length === 0) return;
    const res = mergeData(jsonData.domains, csvData);
    setMetrics(res);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>SEO Case</h1>

      <JsonUpload onLoad={setJsonData} />
      <CsvUpload onLoad={setCsvData} />

      <button className="button" onClick={handleProcess} disabled={!jsonData || csvData.length === 0}>
        Process Data
      </button>

      <DomainSummary items={metrics} />

      {metrics.length > 0 && (
        <SendWebhookButton
          webhookUrl={import.meta.env.VITE_N8N_WEBHOOK}
          payload={metrics}
        />
      )}
    </div>
  );
}

export default App;
