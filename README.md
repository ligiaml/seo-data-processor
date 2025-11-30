# Case Técnico - Desenvolvedor Júnior 
Esse projeto é composto por um desafio tecnico proposto para uma vaga de estagio em desenvolvimento jr

---

## Descrição

Este projeto é uma pequena aplicação web para processar dados de SEO. Ele permite fazer upload de um arquivo JSON com dados base e um CSV complementar, cruza essas informações e apresenta um resumo de métricas importantes em uma interface simples construída com TSX. Além disso, os dados processados podem ser enviados via webhook para o n8n, possibilitando exportação automática para Google Docs.

Principais métricas calculadas por domínio:
-Número de páginas indexáveis
-Quantidade de imagens sem atributo alt
-Média de autoridade das páginas
-Total de backlinks

## 🖼️ Capturas de Tela

![Tela da interface principal](./main.png)
![Fluxo de funcionamento](./case.drawio.png)

---

## ⚙️ Instalação

```bash
# Clonar o repositório
git clone https://github.com/ligiaml/seo-data-processor.git

# Entrar na pasta do projeto
cd seo-data-processor

# Instalar dependências
pnpm install

# Rodar o projeto
pnpm start
