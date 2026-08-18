import { marca } from '../data/site.js'
import { instagramPosts } from '../data/conteudo.js'
import { Botao, Figura, Revelar, TituloSecao } from '../components/Primitivos.jsx'

export default function Instagram() {
  return (
    <section aria-labelledby="titulo-instagram" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Revelar>
            <TituloSecao
              etiqueta={marca.instagram.usuario}
              titulo="Acompanhe a Delícias do Nordeste"
            />
            <span id="titulo-instagram" className="sr-only">
              Instagram
            </span>
          </Revelar>

          <Revelar atraso={100}>
            <Botao
              href={marca.instagram.url}
              variante="contorno"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Instagram
            </Botao>
          </Revelar>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <Revelar key={post.id} atraso={i * 60}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir publicação no Instagram da Delícias do Nordeste"
                className="group block overflow-hidden rounded-marca"
              >
                <Figura
                  imagem={post.imagem}
                  arquivo={post.arquivo}
                  alt="Publicação do Instagram da Delícias do Nordeste"
                  className="aspect-square w-full"
                  imgClassName="group-hover:scale-[1.05]"
                />
              </a>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
