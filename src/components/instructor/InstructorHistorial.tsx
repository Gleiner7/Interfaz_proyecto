import { useMemo, useState } from 'react'
import { mockInformes } from '../../data/mockData'
import { Download, Search } from 'lucide-react'

const InstructorHistorial = () => {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('2026')

  const filtered = useMemo(
    () =>
      mockInformes.filter((item) =>
        item.mes.toLowerCase().includes(query.toLowerCase()) && item.mes.includes(year)
      ),
    [query, year]
  )

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Historial</h1>
            <p className="mt-2 text-gray-400">Busca y exporta tus informes históricos.</p>
          </div>
          <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">Exportar historial</button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-5">
          <div className="flex items-center gap-3 rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3">
            <Search className="h-5 w-5 text-green-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar informe por mes"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-5">
          <label className="text-sm text-gray-400">Filtrar por año</label>
          <select value={year} onChange={(e) => setYear(e.target.value)} className="mt-3 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="grid gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-3xl border border-green-900/30 bg-[#111827] p-5 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">{item.mes}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Informe mensual</h2>
                <p className="mt-2 text-gray-400">{item.observaciones}</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-0">
                <button className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">
                  <Download className="h-4 w-4" /> Exportar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstructorHistorial
