import { categorias } from '../data/conteudo.js'
import { linkWhatsApp } from '../data/site.js'
import { Figura, Revelar, TituloSecao } from '../components/Primitivos.jsx'

export default function Produtos() {
  const ativas = categorias.filter((c) => c.ativo)

  return (
    <section id="produtos" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <Revelar>
          <TituloSecao
            etiqueta="Nossos produtos"
            titulo="Sabores e produtos que carregam a identidade do Nordeste."
            apoio="O que a casa reúne, organizado do jeito que o cliente procura no balcão."
          />
        </Revelar>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ativas.map((cat, i) => (
            <Revelar key={cat.id} atraso={i * 80}>
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Figura
                  imagem={cat.imagem}
                  arquivo={cat.arquivo}
                  alt={`${cat.nome} — Delícias do Nordeste`}
                  className="aspect-[4/5] w-full rounded-marca"
                  imgClassName="group-hover:scale-[1.04]"
                />
                <h3 className="mt-6 font-serif text-[22px] leading-snug text-verde-escuro">
                  {cat.nome}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-cinza">{cat.descricao}</p>
                <span className="etiqueta mt-5 inline-flex items-center gap-2 text-verde transition-transform duration-300 group-hover:translate-x-1">
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
