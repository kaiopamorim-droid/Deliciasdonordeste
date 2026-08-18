# Delícias do Nordeste — landing page

React + Vite + Tailwind CSS.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

Deploy: Vercel detecta Vite automaticamente (build `npm run build`, output `dist`).

---

## 1. O que foi confirmado na pesquisa

O Instagram bloqueia acesso automatizado, então o perfil não pôde ser lido
diretamente. O que está na página veio de: a bio pública do perfil (visível em
resultado de busca), as fichas públicas das duas unidades no Google e o registro
público de CNPJ.

| Dado | Valor | Fonte |
|---|---|---|
| Bio oficial | "A sua Casa completa de Produtos Regionais e Naturais!" | Instagram |
| Unidades | São José e Boa Viagem, Recife-PE | Instagram |
| Entrega | Todo o Brasil | Instagram |
| Seguidores | ~6,8 mil / 409 publicações | Instagram |
| Endereço Boa Viagem | Av. Conselheiro Aguiar, 4834 — Mercado de Boa Viagem, Box 123, CEP 51021-020 | Google + CNPJ |
| Telefone Boa Viagem | (81) 3325-1664 | Google |
| Horários Boa Viagem | Seg–sex 7h–18h · Sáb 7h–15h30 · Dom 7h–13h | Google |
| Abertura da empresa | 30/08/2016 | Registro público de CNPJ |
| Atividade registrada | Comércio varejista de laticínios, frios e conservas | CNAE 4721-1/03 |

As **categorias de produto** foram derivadas dessa atividade registrada somada às
menções recorrentes de clientes nas avaliações públicas das duas lojas (carne de
sol, farinhas, arroz integral, chás e ervas, proteína de soja, doces). Nenhuma
categoria foi inventada.

## 2. Pendências antes de publicar

Tudo abaixo está marcado no código com `⚠ CONFIRMAR` ou `✎ PREENCHER`.

1. **Logo oficial** — o componente `Logo` é uma reconstrução tipográfica
   provisória. Instruções de troca em `public/imagens/LEIA-ME.md`.
2. **Verde da marca** — `tailwind.config.js`, chave `verde.DEFAULT` (hoje
   `#14603F`). Amostre o hex exato da logo com conta-gotas e troque ali: toda a
   página se atualiza a partir desse valor.
3. **WhatsApp** — hoje aponta para `(81) 98734-1303`, o celular que consta no
   registro público da empresa. **Confirmar com o cliente se é o número comercial
   de WhatsApp** antes de subir. Fica em `src/data/site.js`.
4. **Unidade São José** — endereço (Rua do Rangel, 215), horários e telefone
   precisam de confirmação. Enquanto os horários estiverem vazios, a seção mostra
   "a confirmar" em vez de inventar.
5. **Fotografias** — nenhuma foto real foi usada. Cada espaço reservado mostra o
   nome do arquivo esperado. Lista completa em `public/imagens/LEIA-ME.md`.
6. **Domínio** — trocar `https://deliciasdonordeste.com.br` em `index.html` e em
   `src/data/site.js`.
7. **Links do Instagram** — a grade aponta para o perfil; se quiser levar a cada
   publicação, preencha `link` em `src/data/conteudo.js`.

## 3. Direção visual

- **Cor:** verde sólido da marca + creme (`#FBF9F4`) e areia. Zero gradiente em
  qualquer parte da interface.
- **Tipografia:** IBM Plex Sans (texto), Newsreader (títulos, com itálico usado
  como acento) e IBM Plex Mono (etiquetas, horários, números de box).
- **Elemento de assinatura:** a microtipografia de mercado — etiquetas em mono
  versalete tipo `BOX 123`, que é o endereço real da banca, e o filete vertical
  repetido (`.trelica`) que ecoa a estrutura de ferro dos mercados públicos.
  Usado três vezes na página inteira, de propósito.
- **Movimento:** apenas fade-in com deslocamento curto ao entrar na tela, hover
  de 4% nas imagens e o header ganhando fundo ao rolar. `prefers-reduced-motion`
  desliga tudo.

## 4. Estrutura

```
src/
  components/   Primitivos.jsx (Revelar, Figura, Logo, Icone, Botao, TituloSecao)
                Lightbox.jsx, BotaoFlutuante.jsx
  sections/     Header Hero Diferenciais Produtos Galeria Sobre
                Destaque Instagram Localizacao CTA Footer
  data/         site.js (empresa, unidades, contato)
                conteudo.js (categorias, diferenciais, galeria, Instagram)
```

## 5. Acessibilidade e SEO

- HTML semântico, hierarquia de headings correta, link "ir para o conteúdo".
- Foco visível em todos os elementos interativos; lightbox com `role="dialog"`,
  fechamento por Esc e navegação por setas.
- Alternador de unidades implementado como tablist com `aria-selected`.
- `alt` em todas as imagens; espaços reservados anunciados como `role="img"`.
- Open Graph, canonical, favicon e Schema.org `GroceryStore` com endereço,
  telefone, coordenadas e horários — todos com dados verificados.
