# Landing Page — Ganhe dinheiro com IA

## Dois arquivos de entrega

- **netlify-build-v2.zip**: site já compilado. Extraia o ZIP e arraste a pasta que contém `index.html` e `assets` para o Netlify Drop. Não envie a pasta de código-fonte para o Drop.
- **github-source-v2.zip**: código-fonte para GitHub. Extraia o ZIP e envie o conteúdo ao repositório. Na Netlify, escolha "Import an existing project" e conecte esse repositório. O arquivo `netlify.toml` configura a compilação e a pasta de publicação automaticamente.

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

A arte de IA é desenhada no próprio site com CSS e SVG, sem depender de arquivos de imagem externos. Aparece também no celular. As entradas suaves, as órbitas e as transições de rolagem respeitam a preferência por movimento reduzido do visitante. As fontes têm alternativas locais caso o Google Fonts esteja indisponível.

## Favicon

Substitua `public/favicon.ico` pelo seu ícone antes de compilar novamente.
