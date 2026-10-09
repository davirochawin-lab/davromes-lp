# Landing Page — Ganhe dinheiro com IA

## Entrega para GitHub e Netlify

- **github-source-v4.zip**: extraia e envie o conteúdo ao repositório GitHub já conectado à Netlify, substituindo os arquivos antigos. Não envie o próprio ZIP ao repositório. A Netlify publica automaticamente após o envio dos arquivos; a configuração que já funcionou foi preservada.

## Instalar e rodar localmente

Use Node.js 22 e Bun 1.3.13:

```sh
bun install --frozen-lockfile
bun run dev
```

Abra http://localhost:8080.

## Compilar

```sh
bun run build
```

A página pública é pré-renderizada. O resultado estático fica em `dist/client`, com `index.html` e os arquivos de CSS e JavaScript em `assets`. Não é necessário servidor para esta página.

## WhatsApp

O número e a mensagem ficam em `src/lib/whatsapp.ts`. Todos os botões usam o mesmo destino.

## Arte e transições

A arte de IA é desenhada no próprio site com CSS e SVG, sem depender de arquivos de imagem externos. Aparece também no celular. Blocos, títulos e parágrafos têm entradas suaves, acompanhadas de órbitas, varredura luminosa na arte e brilho discreto nos botões. As transições respeitam a preferência por movimento reduzido do visitante, e o conteúdo permanece visível sem JavaScript. As fontes têm alternativas locais caso o Google Fonts esteja indisponível.

## Favicon

Substitua `public/favicon.ico` pelo seu ícone antes de compilar novamente.
