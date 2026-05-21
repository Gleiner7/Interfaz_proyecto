import { useState } from 'react'
import { Download, FileText, Printer, LayoutDashboard } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const opciones = ['PDF', 'Excel', 'Imprimir']
const datosVista = [
  { name: 'Mar', valor: 22 },
  { name: 'Abr', valor: 27 },
  { name: 'May', valor: 31 }
]

const CoordinadorExportes = () => {
  const [form, setForm] = useState({ tipo: 'PDF', periodo: '2026-05' })

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Exportes</h1>
          <p className="mt-2 text-gray-400">Prepara tus reportes para descarga o impresión.</p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 space-y-6">
          <div>
            <p className="text-sm text-gray-400">Configuración de reporte</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Filtro rápido</h2>
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-gray-300">
              <span className="text-gray-400">Tipo de exporte</span>
              <select value={form.tipo} onChange={(e) => setForm((prev) => ({ ...prev, tipo: e.target.value }))} className="mt-3 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none">
                {opciones.map((opcion) => (
                  <option key={opcion}>{opcion}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-gray-300">
              <span className="text-gray-400">Periodo</span>
              <input type="month" value={form.periodo} onChange={(e) => setForm((prev) => ({ ...prev, periodo: e.target.value }))} className="mt-3 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none" />
            </label>
          </div>
          <div className="grid gap-3">
            <button className="rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 inline-flex items-center gap-2">
              <FileText className="h-4 w-4" /> Exportar PDF
            </button>
            <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-800 inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Exportar Excel
            </button>
            <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-800 inline-flex items-center gap-2">
              <Printer className="h-4 w-4" /> Imprimir
            </button>
          </div>
        </div>

        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <div className="flex items-center gap-3 text-green-300">
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-sm uppercase tracking-[0.2em]">Vista previa dinámica</span>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosVista} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid stroke="#184b2b" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} axisLine={false} />
                <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #166534', color: '#fff' }} />
                <Bar dataKey="valor" fill="#22c55e" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoordinadorExportes
