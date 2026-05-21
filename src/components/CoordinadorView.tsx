import { Activity, FileText, FolderOpen, History, LineChart, Settings, Users, LayoutGrid, Square } from 'lucide-react'
import CoordinadorDashboard from './coordinador/CoordinadorDashboard'
import CoordinadorRevision from './coordinador/CoordinadorRevision'
import CoordinadorEquipo from './coordinador/CoordinadorEquipo'
import CoordinadorPlantillas from './coordinador/CoordinadorPlantillas'
import CoordinadorHistorial from './coordinador/CoordinadorHistorial'
import CoordinadorExportes from './coordinador/CoordinadorExportes'
import CoordinadorPerfil from './coordinador/CoordinadorPerfil'

interface Props {
  userName: string
  selectedPage: string
  onChangePage: (page: string) => void
  onLogout: () => void
}

const menuItems = [
  { label: 'Dashboard', icon: Activity },
  { label: 'Revisar Informes', icon: FileText },
  { label: 'Equipo', icon: Users },
  { label: 'Plantillas', icon: LayoutGrid },
  { label: 'Historial', icon: History },
  { label: 'Exportes', icon: LineChart },
  { label: 'Perfil', icon: Settings }
]

const CoordinadorView = ({ userName, selectedPage, onChangePage, onLogout }: Props) => {
  const renderView = () => {
    switch (selectedPage) {
      case 'Revisar Informes':
        return <CoordinadorRevision />
      case 'Equipo':
        return <CoordinadorEquipo />
      case 'Plantillas':
        return <CoordinadorPlantillas />
      case 'Historial':
        return <CoordinadorHistorial />
      case 'Exportes':
        return <CoordinadorExportes />
      case 'Perfil':
        return <CoordinadorPerfil />
      default:
        return <CoordinadorDashboard userName={userName} />
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <aside className="w-[220px] hidden lg:flex flex-col bg-[#0f172a] border-r border-green-900 p-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-green-700 flex items-center justify-center text-white">
            <Square className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold">SITMI</h2>
            <p className="text-sm text-gray-400">Coordinación</p>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = selectedPage === item.label
            return (
              <button
                key={item.label}
                onClick={() => onChangePage(item.label)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                  active ? 'bg-green-700 text-white' : 'text-gray-400 hover:bg-green-900/20 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-6 space-y-2">
          <button className="w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-left text-gray-300 hover:bg-green-900/20">
            Modo oscuro
          </button>
          <button onClick={onLogout} className="w-full rounded-2xl bg-green-700 px-4 py-3 text-white hover:bg-green-600">
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 p-5 lg:p-8 overflow-auto scrollbar-thin">
        <div className="lg:hidden mb-4 rounded-3xl border border-green-900/30 bg-gray-800 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-green-300">SITMI</p>
              <h3 className="text-lg font-bold">Coordinación</h3>
            </div>
            <button onClick={onLogout} className="rounded-2xl bg-green-700 px-3 py-2 text-sm text-white">
              Salir
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onChangePage(item.label)}
                className={`rounded-2xl px-3 py-2 text-sm ${
                  selectedPage === item.label ? 'bg-green-700 text-white' : 'text-gray-400 hover:bg-green-900/20 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {renderView()}
      </main>
    </div>
  )
}

export default CoordinadorView
