import { useCallback, useState } from 'react'
import { galeria } from '../data/conteudo.js'
import { Figura, Revelar, TituloSecao } from '../components/Primitivos.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function Galeria() {
  const [indice, setIndice] = useState(null)

  const navegar = useCallback(
    (passo) => setIndice((i) => (i === null ? null : (i + passo + galeria.length) % galeria.length)),
    [],
  )
  const fechar = useCallback(() => setIndice(null), [])

  const [destaque, ...restantes] = galeria

  return (
    <section aria-labelledby="titulo-galeria" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <Revelar>
          <TituloSecao
            etiqueta="Galeria"
            titulo="O balcão, de perto."
          />
          <span id="titulo-galeria" className="sr-only">
            Galeria de fotos
          </span>
        </Revelar>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <Revelar className="lg:col-span-2 lg:row-span-2">
            <BotaoImagem item={destaque} indice={0} aoAbrir={setIndice} className="h-full min-h-[280px] lg:min-h-[560px]" />
          </Revelar>

          <div className="grid grid-cols-2 gap-4 lg:col-span-1 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
            {restantes.slice(0, 2).map((item, i) => (
              <Revelar key={item.id} atraso={(i + 1) * 90}>
                <BotaoImagem
                  item={item}
                  indice={i + 1}
                  aoAbrir={setIndice}
                  className="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[272px]"
                />
              </Revelar>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {restantes.slice(2).map((item, i) => (
            <Revelar key={item.id} atraso={i * 90}>
              <BotaoImagem
                item={item}
                indice={i + 3}
                aoAbrir={setIndice}
                className="aspect-square"
              />
            </Revelar>
          ))}
        </div>
      </div>

      <Lightbox itens={galeria} indice={indice} aoFechar={fechar} aoNavegar={navegar} />
    </section>
  )
}

function BotaoImagem({ item, indice, aoAbrir, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => aoAbrir(indice)}
      aria-label={`Ampliar imagem: ${item.alt}`}
      className={`group block w-full overflow-hidden rounded-marca ${className}`}
    >
      <Figura
        imagem={item.imagem}
        arquivo={item.arquivo}
        alt={item.alt}
        className="h-full w-full"
        imgClassName="group-hover:scale-[1.04]"
      />
    </button>
  )
}


