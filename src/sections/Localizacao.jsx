import { useState } from 'react'
import { unidades } from '../data/site.js'
import { Revelar, TituloSecao } from '../components/Primitivos.jsx'

export default function Localizacao() {
  const [ativa, setAtiva] = useState(unidades[0].id)
  const unidade = unidades.find((u) => u.id === ativa)

  return (
    <section id="onde-encontrar" className="mt-24 lg:mt-36">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <Revelar>
          <TituloSecao
            etiqueta="Onde encontrar"
            titulo="Venha nos visitar"
            apoio="Duas bancas, dois mercados tradicionais de Recife."
          />
        </Revelar>

        <Revelar atraso={80} className="mt-10">
          <div role="tablist" aria-label="Escolha a unidade" className="inline-flex rounded-marca border border-verde/20 p-1">
            {unidades.map((u) => (
              <button key={u.id} role="tab" aria-selected={ativa === u.id} aria-controls={`painel-${u.id}`} id={`aba-${u.id}`} onClick={() => setAtiva(u.id)} className={`rounded-[2px] px-5 py-2.5 text-sm transition-colors duration-300 ${ativa === u.id ? 'bg-verde text-creme' : 'text-verde/70 hover:text-verde'}`}>
                {u.nome}
              </button>
            ))}
          </div>
        </Revelar>

        <Revelar atraso={120} className="mt-8 grid gap-px overflow-hidden rounded-marca bg-verde/12 lg:grid-cols-[0.85fr_1.15fr]">
          <div role="tabpanel" id={`painel-${unidade.id}`} aria-labelledby={`aba-${unidade.id}`} className="bg-creme p-8 lg:p-10">
            <p className="etiqueta text-verde/60">{unidade.box}</p>
            <h3 className="mt-4 font-serif text-[28px] leading-tight text-verde-escuro">{unidade.nome}</h3>

            <dl className="mt-8 space-y-6 text-[15px]">
              <div>
                <dt className="etiqueta text-verde/55">EndereÃ§o</dt>
                <dd className="mt-2 leading-relaxed text-carvao/85">
                  {unidade.endereco}
                  <br />
                  {unidade.bairro}
                  {unidade.cep && (<><br />CEP {unidade.cep}</>)}
                </dd>
              </div>

              <div>
                <dt className="etiqueta text-verde/55">HorÃ¡rio</dt>
                <dd className="mt-2 space-y-1.5 text-carvao/85">
                  {unidade.horarios.length > 0 ? (
                    unidade.horarios.map((h) => (
                      <p key={h.dias} className="flex justify-between gap-6">
                        <span>{h.dias}</span>
                        <span className="font-mono text-[13px] text-verde-escuro">{h.horas}</span>
                      </p>
                    ))
                  ) : (
                    <p className="font-mono text-[13px] text-cinza">âœŽ HorÃ¡rio a confirmar com a loja</p>
                  )}
                </dd>
              </div>

              <div>
                <dt className="etiqueta text-verde/55">Contato</dt>
                <dd className="mt-2 space-y-1.5 text-carvao/85">
                  {unidade.telefone ? (
                    <p><a href={unidade.telefoneLink} className="transition-colors hover:text-verde">{unidade.telefone}</a></p>
                  ) : (
                    <p className="font-mono text-[13px] text-cinza">âœŽ Telefone a confirmar com a loja</p>
                  )}
                  <p><a href={unidade.whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-verde">WhatsApp</a></p>
                </dd>
              </div>
            </dl>

            <a href={unidade.mapa} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-marca bg-verde px-6 py-3.5 text-[15px] font-medium text-creme transition-colors duration-300 hover:bg-verde-escuro">
              Como chegar
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M6 3h7v7M13 3 3.5 12.5" />
              </svg>
            </a>
          </div>

          <div className="min-h-[320px] bg-creme lg:min-h-[520px]">
            <iframe key={unidade.id} title={`Mapa â€” ${unidade.nome}`} src={unidade.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[320px] w-full border-0 grayscale-[35%]" />
          </div>
        </Revelar>
      </div>
    </section>
  )
}

