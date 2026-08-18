import { marca, linkWhatsApp } from '../data/site.js'
import { Botao, Figura, IconeWhatsApp } from '../components/Primitivos.jsx'
export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 lg:pt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
          {/* Coluna de texto */}
          <div className="animate-surgir">
            <p className="etiqueta text-verde/70">Delícias do Nordeste</p>
            <h1 className="mt-6 font-serif text-[40px] leading-[1.04] tracking-[-0.02em] text-verde-escuro sm:text-[56px] lg:text-[64px]">
              A sua casa completa de produtos{' '}
              <em className="font-normal italic text-verde">regionais e naturais</em>.
            </h1>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-cinza sm:text-lg">
              Duas bancas em Recife, no Mercado de São José e no Mercado de Boa Viagem, com
              produto escolhido item por item, com entrega rápida em Recife e região.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Botao href="#produtos">Conheça nossos produtos</Botao>
              <Botao
                href={linkWhatsApp}
                variante="contorno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconeWhatsApp />
                Fale pelo WhatsApp
              </Botao>
            </div>
          </div>
          {/* Composição de imagens */}
          <div className="relative">
            <Figura
              imagem="/imagens/hero-banca.jpg"
              arquivo="hero-banca.jpg"
              alt="Banca da Delícias do Nordeste com produtos regionais expostos"
              prioridade
              className="aspect-[16/10] w-full rounded-marca"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

