import { useMemo } from 'react'
import { Line, Bar, ResponsiveContainer, LineChart, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const datosLineales = [
  { mes: 'Ene', valor: 65 },
  { mes: 'Feb', valor: 72 },
  { mes: 'Mar', valor: 81 },
  { mes: 'Abr', valor: 76 },
  { mes: 'May', valor: 88 }
]

const datosBarras = [
  { nombre: 'Seguimiento', valor: 38 },
  { nombre: 'Informes', valor: 27 },
  { nombre: 'Movilidad', valor: 19 },
  { nombre: 'Revisiones', valor: 16 }
]

const InstructorIndicadores = () => {
  const promedio = useMemo(() => Math.round(datosLineales.reduce((sum, item) => sum + item.valor, 0) / datosLineales.length), [])

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Indicadores de desempeño</h1>
            <p className="mt-2 text-gray-400">Monitorea tus resultados con métricas claras.</p>
          </div>
          <div className="rounded-3xl bg-[#12221a] px-5 py-3 text-sm text-green-200">Última actualización: hoy</div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <p className="text-sm text-gray-400">Score general</p>
          <p className="mt-4 text-5xl font-bold text-white">{promedio}%</p>
          <p className="mt-3 text-gray-400">Tu rendimiento promedio de los últimos 5 meses.</p>
        </div>
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <p className="text-sm text-gray-400">Eficiencia de entrega</p>
          <p className="mt-4 text-3xl font-bold text-white">88%</p>
          <p className="mt-3 text-gray-400">Entregas realizadas dentro del plazo establecido.</p>
        </div>
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <p className="text-sm text-gray-400">Tiempo de respuesta</p>
          <p className="mt-4 text-3xl font-bold text-white">24h</p>
          <p className="mt-3 text-gray-400">Promedio de respuesta en revisiones internas.</p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Tendencia mensual</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={datosLineales} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid stroke="#184b2b" vertical={false} />
                <XAxis dataKey="mes" tick={{ fill: '#94a3b8' }} axisLine={false} />
                <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickCount={5} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #166534', color: '#fff' }} />
                <Line type="monotone" dataKey="valor" stroke="#22c55e" strokeWidth={4} dot={{ r: 4, fill: '#22c55e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Áreas con mayor carga</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosBarras} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                <CartesianGrid stroke="#184b2b" vertical={false} />
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="nombre" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} width={120} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #166534', color: '#fff' }} />
                <Bar dataKey="valor" fill="#4ade80" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorIndicadores
