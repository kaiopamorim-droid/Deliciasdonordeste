import { diferenciais } from '../data/conteudo.js'
import { Icone, Revelar } from '../components/Primitivos.jsx'

export default function Diferenciais() {
  return (
    <section aria-label="Diferenciais" className="mt-12 lg:mt-20">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-marca bg-verde/12 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, i) => (
            <Revelar
              key={item.titulo}
              atraso={i * 90}
              className="bg-creme p-7 lg:p-8"
            >
              <Icone nome={item.icone} className="h-6 w-6 text-verde" />
              <h3 className="mt-6 font-serif text-xl leading-snug text-verde-escuro">
                {item.titulo}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cinza">{item.texto}</p>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}

