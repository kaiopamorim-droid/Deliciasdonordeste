/*
 * ═══════════════════════════════════════════════════════════════
 * DADOS DA EMPRESA — FONTE ÚNICA DE VERDADE
 * ═══════════════════════════════════════════════════════════════
 * Tudo que aparece na página vem daqui.
 *
 * Legenda das marcações:
 *   ✔ CONFIRMADO  — verificado em fonte pública (Instagram / Google / CNPJ)
 *   ⚠ CONFIRMAR   — dado plausível, mas precisa ser validado com o cliente
 *   ✎ PREENCHER   — não localizado publicamente; preencher com o cliente
 */

export const marca = {
  nome: 'Delícias do Nordeste', // ✔ CONFIRMADO
  bio: 'A sua Casa completa de Produtos Regionais e Naturais!',
  entrega: 'Entregamos para todo o Brasil', // ✔ CONFIRMADO — bio do Instagram
  desde: 2016, // ✔ CONFIRMADO — abertura em 30/08/2016 (registro público de CNPJ)
  instagram: {
    usuario: '@deliciasdonordestemercado',
    url: 'https://www.instagram.com/deliciasdonordestemercado/',
  },
}

/*
 * ✔ CONFIRMADO — WhatsApp comercial de cada unidade, informado pelo cliente.
 * O botão geral do site ("Fale conosco") usa o número da unidade Boa Viagem
 * como padrão. Cada unidade também tem seu próprio link na seção de localização.
 * Formato obrigatório: 55 + DDD + número, apenas dígitos.
 */
export const whatsapp = {
  numero: '5581989990747',
  exibicao: '(81) 98999-0747',
  mensagem: 'Olá! Vim pelo site e gostaria de saber mais sobre os produtos.',
}

export const linkWhatsApp = `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(
  whatsapp.mensagem,
)}`

export const unidades = [
  {
    id: 'boa-viagem',
    box: 'BOX 123',
    nome: 'Mercado de Boa Viagem', // ✔ CONFIRMADO
    endereco: 'Av. Conselheiro Aguiar, 4834 — Box 123', // ✔ CONFIRMADO
    bairro: 'Boa Viagem, Recife — PE',
    cep: '51021-020', // ✔ CONFIRMADO
    telefone: '(81) 3325-1664', // ✔ CONFIRMADO
    telefoneLink: 'tel:+558133251664',
    whatsapp: '5581989990747', // ✔ CONFIRMADO
    whatsappExibicao: '(81) 98999-0747',
    whatsappLink: `https://wa.me/5581989990747?text=${encodeURIComponent(
      'Olá! Vim pelo site e gostaria de saber mais sobre os produtos.',
    )}`,
    horarios: [
      { dias: 'Segunda a sexta', horas: '7h às 18h' },
      { dias: 'Sábado', horas: '7h às 15h30' },
      { dias: 'Domingo', horas: '7h às 13h' },
    ],
    mapa: 'https://www.google.com/maps/search/?api=1&query=Delicias+do+Nordeste+Mercado+de+Boa+Viagem+Recife',
    mapaEmbed:
      'https://www.google.com/maps?q=Delicias%20do%20Nordeste%20Mercado%20de%20Boa%20Viagem%20Recife&output=embed',
  },
  {
    id: 'sao-jose',
    box: 'SÃO JOSÉ',
    nome: 'Mercado de São José', // ✔ CONFIRMADO — bio do Instagram
    endereco: 'Rua do Rangel, 215', // ⚠ CONFIRMAR — endereço e número do box
    bairro: 'São José, Recife — PE',
    cep: null,
    telefone: null, // ✎ PREENCHER
    telefoneLink: null,
    whatsapp: '5581997577140', // ✔ CONFIRMADO
    whatsappExibicao: '(81) 99757-7140',
    whatsappLink: `https://wa.me/5581997577140?text=${encodeURIComponent(
      'Olá! Vim pelo site e gostaria de saber mais sobre os produtos.',
    )}`,
    horarios: [], // ✎ PREENCHER — horários desta unidade
    mapa: 'https://www.google.com/maps/search/?api=1&query=Delicias+do+Nordeste+Mercado+de+Sao+Jose+Recife',
    mapaEmbed:
      'https://www.google.com/maps?q=Delicias%20do%20Nordeste%20Mercado%20de%20S%C3%A3o%20Jos%C3%A9%20Recife&output=embed',
  },
]

export const navegacao = [
  { rotulo: 'Início', href: '#inicio' },
  { rotulo: 'Produtos', href: '#produtos' },
  { rotulo: 'Sobre', href: '#sobre' },
  { rotulo: 'Onde encontrar', href: '#onde-encontrar' },
  { rotulo: 'Contato', href: '#contato' },
]

export const seo = {
  titulo: 'Delícias do Nordeste | Produtos regionais e naturais em Recife',
  descricao:
    'Casa completa de produtos regionais e naturais em Recife. Duas unidades: Mercado de São José e Mercado de Boa Viagem. Entregamos para todo o Brasil.',
  url: 'https://deliciasdonordeste.com.br', // ✎ PREENCHER com o domínio final
}
