import { linkWhatsApp, whatsapp } from '../data/site.js'
import { Revelar, IconeWhatsApp } from '../components/Primitivos.jsx'

export default function CTA() {
  return (
    <section id="contato" className="mt-24 bg-verde-escuro lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 py-20 text-center sm:px-8 lg:py-28">
        <Revelar>
          <p className="etiqueta text-creme/55">Contato</p>

          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-[34px] leading-[1.12] tracking-[-0.015em] text-creme sm:text-[44px] lg:text-[50px]">
            Quer saber mais sobre nossos produtos?
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-creme/70">
            Fale com a Delícias do Nordeste pelo WhatsApp. A gente confere o que tem em estoque,
            monta o pedido e combina a entrega.
          </p>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-11 inline-flex items-center gap-3 rounded-marca bg-creme px-9 py-[18px] text-base font-medium text-verde-escuro transition-colors duration-300 hover:bg-white sm:text-lg"
          >
            <IconeWhatsApp className="h-6 w-6" />
            Falar pelo WhatsApp
          </a>

          <p className="mt-6 font-mono text-[13px] text-creme/45">{whatsapp.exibicao}</p>
        </Revelar>
      </div>
    </section>
  )
}
