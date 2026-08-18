import { Revelar } from '../components/Primitivos.jsx'

export default function Destaque() {
  return (
    <section aria-label="Nossa proposta" className="mt-24 bg-verde lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="py-20 text-center lg:py-28">
          <Revelar>
            <p className="mx-auto max-w-3xl font-serif text-[36px] leading-[1.18] tracking-[-0.015em] text-creme sm:text-[48px] lg:text-[56px]">
              Tudo que você procura em um só lugar.
            </p>

            <p className="mx-auto mt-7 max-w-lg text-[17px] leading-relaxed text-creme/75">
              Regional e natural na mesma banca, com quem conhece o produto e sabe explicar de onde
              ele vem.
            </p>
          </Revelar>
        </div>
      </div>
    </section>
  )
}
