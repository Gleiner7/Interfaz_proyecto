import { useState } from 'react'
import { Download, Search } from 'lucide-react'
import { mockInformes } from '../../data/mockData'

const CoordinadorHistorial = () => {
  const [query, setQuery] = useState('')
  const filtered = mockInformes.filter((item) => item.mes.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Historial Coordinación</h1>
          <p className="mt-2 text-gray-400">Navega por todos los informes y aplica filtros avanzados.</p>
        </div>
        <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">Exportar historial</button>
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3">
            <Search className="h-5 w-5 text-green-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar informe"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-3xl border border-green-900/30 bg-[#111827] p-5 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">{item.mes}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Estado: {item.estado}</h2>
                <p className="mt-2 text-gray-400">{item.observaciones}</p>
              </div>
              <button className="mt-4 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 sm:mt-0 inline-flex items-center gap-2">
                <Download className="h-4 w-4" /> Descargar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoordinadorHistorial
