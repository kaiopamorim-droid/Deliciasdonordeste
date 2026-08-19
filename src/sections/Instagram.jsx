import { instagramPosts } from '../data/conteudo.js'
import { linkWhatsApp } from '../data/site.js'
import { Figura, Revelar, TituloSecao } from '../components/Primitivos.jsx'

export default function Instagram() {
  return (
    <section aria-labelledby="titulo-instagram" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <Revelar>
          <TituloSecao titulo="Mais produtos" />
          <span id="titulo-instagram" className="sr-only">
            Mais produtos
          </span>
        </Revelar>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <Revelar key={post.id} atraso={i * 60}>
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Figura
                  imagem={post.imagem}
                  arquivo={post.arquivo}
                  alt="Produto da DelÃ­cias do Nordeste"
                  className="aspect-square w-full rounded-marca"
                  imgClassName="group-hover:scale-[1.05]"
                />
                <span className="etiqueta mt-4 inline-flex items-center gap-1.5 text-verde transition-transform duration-300 group-hover:translate-x-1">
                  Perguntar no WhatsApp
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M2 8h11M9 4l4 4-4 4" />
                  </svg>
                </span>
              </a>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}

