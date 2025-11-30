type Props = {
  webhookUrl: string;
  payload: any;
};

export default function SendWebhookButton({ webhookUrl, payload }: Props) {
  function send() {
    fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => alert("Webhook enviado!"))
      .catch(() => alert("Erro ao enviar webhook"));
  }

  return <button className="button" onClick={send}>Enviar para n8n</button>;
}
