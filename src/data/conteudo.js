export const categorias = [
  {
    id: 'carnes-e-frios',
    nome: 'Carnes e frios',
    descricao:
      'Carne de sol, queijos e frios da região, cortados e pesados na hora, do jeito que o cliente pede.',
    imagem: '/imagens/produtos-carnes-e-frios.jpg',
    arquivo: 'produtos-carnes-e-frios.jpg',
    ativo: true,
  },
  {
    id: 'graos-e-farinhas',
    nome: 'Grãos e farinhas',
    descricao:
      'Farinhas, arroz integral, grãos e proteínas vegetais — inclusive os itens difíceis de achar fora do mercado.',
    imagem: '/imagens/produtos-graos-e-farinhas.jpg',
    arquivo: 'produtos-graos-e-farinhas.jpg',
    ativo: true,
  },
  {
    id: 'naturais-e-chas',
    nome: 'Naturais e chás',
    descricao:
      'Uma seleção larga de chás, ervas e produtos naturais, montada ao longo de anos de balcão.',
    imagem: '/imagens/produtos-naturais-e-chas.jpg',
    arquivo: 'produtos-naturais-e-chas.jpg',
    ativo: true,
  },
  {
    id: 'doces-e-conservas',
    nome: 'Doces e conservas',
    descricao:
      'Doces regionais e conservas de frutas e legumes, para levar o sabor de casa em qualquer lugar.',
    imagem: '/imagens/produtos-doces-e-conservas.jpg',
    arquivo: 'produtos-doces-e-conservas.jpg',
    ativo: true,
  },
  {
    id: 'temperos',
    nome: 'Temperos',
    descricao: '✎ PREENCHER com a descrição real desta categoria.',
    imagem: null,
    arquivo: 'produtos-temperos.jpg',
    ativo: false,
  },
  {
    id: 'bebidas',
    nome: 'Bebidas',
    descricao: '✎ PREENCHER com a descrição real desta categoria.',
    imagem: null,
    arquivo: 'produtos-bebidas.jpg',
    ativo: false,
  },
]

export const diferenciais = [
  {
    titulo: 'Regional e natural no mesmo balcão',
    texto:
      'A casa reúne o que normalmente exige duas viagens: o produto regional e o produto natural, lado a lado.',
    icone: 'cesta',
  },
  {
    titulo: 'Duas unidades em Recife',
    texto:
      'Mercado de São José e Mercado de Boa Viagem — dois endereços tradicionais, o mesmo atendimento.',
    icone: 'mapa',
  },
  {
    titulo: 'Entrega para todo o Brasil',
    texto:
      'Quem saiu do Nordeste continua recebendo em casa. É só combinar o pedido pelo WhatsApp.',
    icone: 'caixa',
  },
  {
    titulo: 'No mercado desde 2016',
    texto:
      'Tempo de balcão suficiente para conhecer fornecedor por fornecedor e escolher o que entra na prateleira.',
    icone: 'relogio',
  },
]

export const galeria = [
  { id: 'g1', arquivo: 'galeria-01-banca.jpg', alt: 'Banca da Delícias do Nordeste no mercado', destaque: true, imagem: null },
  { id: 'g2', arquivo: 'galeria-02-graos.jpg', alt: 'Grãos e farinhas expostos a granel', imagem: null },
  { id: 'g3', arquivo: 'galeria-03-carne-de-sol.jpg', alt: 'Carne de sol sobre a bancada', imagem: null },
  { id: 'g4', arquivo: 'galeria-04-chas.jpg', alt: 'Prateleira de chás e ervas', imagem: null },
  { id: 'g5', arquivo: 'galeria-05-doces.jpg', alt: 'Doces regionais embalados', imagem: null },
  { id: 'g6', arquivo: 'galeria-06-atendimento.jpg', alt: 'Atendimento no balcão da loja', imagem: null },
]

export const instagramPosts = Array.from({ length: 6 }, (_, i) => ({
  id: `ig-${i + 1}`,
  arquivo: `instagram-0${i + 1}.jpg`,
  imagem: null,
  link: 'https://www.instagram.com/deliciasdonordestemercado/',
}))
