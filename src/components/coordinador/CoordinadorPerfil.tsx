import { useState } from 'react'
import { Bell, Activity, Shield } from 'lucide-react'

const CoordinadorPerfil = () => {
  const [settings, setSettings] = useState({ notificaciones: true, resumenDiario: false, alertasAutomaticas: true })

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Perfil de Coordinación</h1>
          <p className="mt-2 text-gray-400">Configura alertas y resúmenes para tu equipo.</p>
        </div>
        <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">Guardar cambios</button>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <div className="flex items-center gap-3 text-green-300">
            <Bell className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Notificaciones</h2>
          </div>
          <div className="mt-6 space-y-4">
            {['notificaciones', 'resumenDiario', 'alertasAutomaticas'].map((field) => (
              <button
                key={field}
                onClick={() => setSettings((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))}
                className={`flex items-center justify-between w-full rounded-full border px-4 py-4 text-left transition ${settings[field as keyof typeof settings] ? 'border-green-700 bg-green-700/10 text-white' : 'border-slate-800 bg-gray-900 text-gray-300 hover:border-green-700/60 hover:bg-green-900/20'}`}
              >
                <div>
                  <p className="text-sm font-semibold">{field === 'notificaciones' ? 'Notificaciones activas' : field === 'resumenDiario' ? 'Resumen diario' : 'Alertas automáticas'}</p>
                  <p className="mt-1 text-sm text-gray-400">{field === 'notificaciones' ? 'Recibe actualizaciones en tiempo real.' : field === 'resumenDiario' ? 'Resumen por correo cada mañana.' : 'Alertas cuando haya cambios críticos.'}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{settings[field as keyof typeof settings] ? 'Encendido' : 'Apagado'}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <div className="flex items-center gap-3 text-green-300">
            <Activity className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Resumen semanal</h2>
          </div>
          <div className="mt-6 space-y-3 text-gray-400">
            <p>Seguimiento en curso: 5 instructores activos.</p>
            <p>Documentos pendientes: 12</p>
            <p>Alertas nuevas: 3</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <div className="flex items-center gap-3 text-green-300">
            <Shield className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Seguridad</h2>
          </div>
          <div className="mt-6 space-y-3 text-gray-400">
            <p>Acceso protegido con credenciales institucionales.</p>
            <p>Control de permisos para revisores y coordinadores.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoordinadorPerfil
