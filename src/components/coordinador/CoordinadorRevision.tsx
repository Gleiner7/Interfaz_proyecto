import { useState } from 'react'
import { mockInformes } from '../../data/mockData'
import StatusBadge from '../shared/StatusBadge'
import Modal from '../shared/Modal'

const tabs = ['En revisión', 'Aprobados', 'Correcciones'] as const

type TabKey = (typeof tabs)[number]

const CoordinadorRevision = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('En revisión')
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const visibleItems = mockInformes.filter((item) => {
    if (activeTab === 'En revisión') return item.estado === 'revisión'
    if (activeTab === 'Aprobados') return item.estado === 'aprobado'
    return item.estado === 'correcciones'
  })

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Revisión de informes</h1>
          <p className="mt-2 text-gray-400">Aprueba o solicita ajustes con claridad.</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-2xl px-4 py-2 text-sm ${activeTab === tab ? 'bg-green-700 text-white' : 'text-gray-400 hover:bg-green-900/30 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {visibleItems.map((informe) => (
            <div key={informe.id} className="rounded-3xl border border-green-900/30 bg-[#111827] p-5 sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-400">{informe.mes}</p>
                  <StatusBadge status={informe.estado} />
                </div>
                <p className="mt-2 text-white">{informe.observaciones}</p>
                <p className="mt-2 text-sm text-gray-500">{informe.fecha}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
                <button className="rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">Ver detalle</button>
                {informe.estado !== 'aprobado' ? (
                  <button
                    onClick={() => {
                      setSelected(informe.id)
                      setModalOpen(true)
                    }}
                    className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-400"
                  >
                    Solicitar ajustes
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        title="Confirmar acción"
        message="¿Deseas solicitar ajustes para este informe?"
        onClose={() => setModalOpen(false)}
        onConfirm={() => {
          setModalOpen(false)
          setSelected(null)
        }}
      />
    </div>
  )
}

export default CoordinadorRevision
