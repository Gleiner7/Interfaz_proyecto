import { useState } from 'react'
import { Bell, Clock3, CheckCircle2 } from 'lucide-react'
import { mockNotificaciones } from '../../data/mockData'

const tabs = ['Todas', 'Nuevas', 'Leídas'] as const

type TabKey = (typeof tabs)[number]

const InstructorAlertas = () => {
  const [ activeTab, setActiveTab ] = useState<TabKey>('Todas')

  const items = mockNotificaciones.filter((item) => {
    if (activeTab === 'Nuevas') return !item.leida
    if (activeTab === 'Leídas') return item.leida
    return true
  })

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <h1 className="text-3xl font-bold">Alertas</h1>
        <p className="mt-2 text-gray-400">Gestiona tus avisos y solicitudes más recientes.</p>
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
          {items.map((item) => (
            <div key={item.id} className="rounded-3xl border border-green-900/30 bg-[#111827] p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.tipo === 'alerta' ? <Bell className="h-5 w-5 text-amber-300" /> : item.tipo === 'mensaje' ? <Clock3 className="h-5 w-5 text-green-300" /> : <CheckCircle2 className="h-5 w-5 text-emerald-300" />}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.titulo}</h3>
                    <p className="text-sm text-gray-400">{item.descripcion}</p>
                  </div>
                </div>
                {!item.leida ? <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Nueva</span> : null}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>{item.fecha}</span>
                <button className="text-green-300 hover:text-green-200">Marcar como leída</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstructorAlertas
