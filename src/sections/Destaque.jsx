import { Figura, Revelar } from '../components/Primitivos.jsx'

export default function Destaque() {
  return (
    <section aria-label="Nossa proposta" className="mt-24 bg-verde lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
          <Revelar>
            <p className="mt-8 font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-creme sm:text-[40px] lg:text-[46px]">
              Tudo que você procura em um só lugar.
            </p>

            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-creme/75">
              Regional e natural na mesma banca, com quem conhece o produto e sabe explicar de onde
              ele vem.
            </p>
          </Revelar>

          <Revelar atraso={140}>
            <Figura
              imagem={null}
              arquivo="destaque-produto.jpg"
              alt="Composição de produtos da Delícias do Nordeste"
              className="aspect-[4/3] w-full rounded-marca border border-creme/15 !bg-verde-escuro/40"
            />
          </Revelar>
        </div>
      </div>
    </section>
  )
}

