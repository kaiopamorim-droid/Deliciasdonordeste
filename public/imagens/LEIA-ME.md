# Imagens do site

Todos os espacos reservados na pagina mostram o nome exato do arquivo esperado.
Salve a imagem nesta pasta com esse nome e preencha o campo `imagem`
correspondente nos arquivos de dados.

## Como ativar uma imagem

1. Salve o arquivo aqui, por exemplo: `public/imagens/hero-banca.jpg`
2. Abra `src/data/conteudo.js` e troque:
   `imagem: null` -> `imagem: '/imagens/hero-banca.jpg'`

Hero, Sobre e Destaque tem as imagens declaradas direto no componente
(`src/sections/Hero.jsx`, `Sobre.jsx`, `Destaque.jsx`) - mesma logica.

## Arquivos esperados

### Hero
- hero-banca.jpg      1200x1500 (4:5)  foto principal da banca/produtos
- hero-detalhe.jpg    600x600   (1:1)  detalhe de produto

### Produtos (4:5)
- produtos-carnes-e-frios.jpg
- produtos-graos-e-farinhas.jpg
- produtos-naturais-e-chas.jpg
- produtos-doces-e-conservas.jpg

### Galeria
- galeria-01-banca.jpg (grande, paisagem)
- galeria-02-graos.jpg
- galeria-03-carne-de-sol.jpg
- galeria-04-chas.jpg
- galeria-05-doces.jpg
- galeria-06-atendimento.jpg

### Sobre e destaque
- sobre-loja.jpg        (4:5)
- destaque-produto.jpg  (4:3)

### Instagram
- instagram-01.jpg ... instagram-06.jpg (1080x1080)

### Compartilhamento e marca
- og-imagem.jpg  1200x630, usada no WhatsApp/Facebook
- logo.svg       logo oficial (ver abaixo)

## Logo

O componente `Logo` em `src/components/Primitivos.jsx` e uma reconstrucao
tipografica temporaria. Com o arquivo oficial em maos:

1. Salve como `public/imagens/logo.svg`
2. Troque o corpo do componente por:
   <img src="/imagens/logo.svg" alt="Delicias do Nordeste" className="h-9 w-auto" />
3. Nao alterar as proporcoes: use apenas altura e deixe a largura automatica.

## Otimizacao

Converta para WebP e comprima antes de subir (Squoosh ou cwebp).
Largura maxima util: 1600px. As tags <img> ja usam loading="lazy",
exceto o Hero, que e eager por estar acima da dobra.
