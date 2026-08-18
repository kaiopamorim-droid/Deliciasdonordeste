import { marca } from '../data/site.js'
import { Figura, Revelar } from '../components/Primitivos.jsx'

export default function Sobre() {
  return (
    <section id="sobre" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Revelar>
            <Figura
              imagem={null}
              arquivo="sobre-loja.jpg"
              alt="Fachada da Delícias do Nordeste no mercado"
              className="aspect-[4/5] w-full rounded-marca"
            />
          </Revelar>

          <Revelar atraso={120}>
            <p className="etiqueta text-verde/60">Sobre</p>
            <h2 className="mt-4 font-serif text-[34px] leading-[1.08] tracking-[-0.015em] text-verde-escuro sm:text-[42px] lg:text-[46px]">
              A história da Delícias do Nordeste
            </h2>

            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-cinza">
              <p>
                A Delícias do Nordeste nasceu em {marca.desde}, dentro dos mercados públicos de
                Recife, o de São José e o de Boa Viagem. Dois endereços que fazem parte da rotina
                da cidade há gerações e que continuam sendo o lugar onde se encontra o produto de
                verdade.
              </p>
              <p>
                A proposta é simples e está na própria frase da casa:{' '}
                <em className="not-italic text-verde-escuro">
                  a sua casa completa de produtos regionais e naturais
                </em>
                . De um lado, o que é daqui, carne de sol, queijos, farinhas, doces. Do outro, o
                que é natural, grãos, chás, ervas e itens que raramente aparecem em prateleira de
                supermercado.
              </p>
              <p>
                Quem mora perto vem ao balcão. Quem está longe pede pelo WhatsApp e recebe em casa,
                em qualquer estado do Brasil.
              </p>
            </div>

            <div className="mt-9 flex items-center gap-4 border-t border-verde/12 pt-7">
              <p className="etiqueta text-verde/60">
                Mercado de São José <span className="mx-1 text-verde/30">·</span> Mercado de Boa
                Viagem
              </p>
            </div>
          </Revelar>
        </div>
      </div>
    </section>
  )
}
