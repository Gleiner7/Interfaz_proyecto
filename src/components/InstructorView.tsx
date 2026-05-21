import { Activity, BookOpen, FileText, FolderOpen, History, LineChart, Settings, Bell, Square } from 'lucide-react'
import InstructorDashboard from './instructor/InstructorDashboard'
import InstructorSubirInforme from './instructor/InstructorSubirInforme'
import InstructorReportes from './instructor/InstructorReportes'
import InstructorIndicadores from './instructor/InstructorIndicadores'
import InstructorHistorial from './instructor/InstructorHistorial'
import InstructorRecursos from './instructor/InstructorRecursos'
import InstructorAlertas from './instructor/InstructorAlertas'
import InstructorPerfil from './instructor/InstructorPerfil'

interface Props {
  userName: string
  selectedPage: string
  onChangePage: (page: string) => void
  onLogout: () => void
}

const menuItems = [
  { label: 'Dashboard', icon: Activity },
  { label: 'Subir Informe', icon: FolderOpen },
  { label: 'Mis Reportes', icon: FileText },
  { label: 'Indicadores', icon: LineChart },
  { label: 'Historial', icon: History },
  { label: 'Recursos', icon: BookOpen },
  { label: 'Alertas', icon: Bell },
  { label: 'Perfil', icon: Settings }
]

const InstructorView = ({ userName, selectedPage, onChangePage, onLogout }: Props) => {
  const renderView = () => {
    switch (selectedPage) {
      case 'Subir Informe':
        return <InstructorSubirInforme />
      case 'Mis Reportes':
        return <InstructorReportes />
      case 'Indicadores':
        return <InstructorIndicadores />
      case 'Historial':
        return <InstructorHistorial />
      case 'Recursos':
        return <InstructorRecursos />
      case 'Alertas':
        return <InstructorAlertas />
      case 'Perfil':
        return <InstructorPerfil />
      default:
        return <InstructorDashboard userName={userName} />
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
            <p className="text-sm text-gray-400">Instructor</p>
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
              <h3 className="text-lg font-bold">Instructor</h3>
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

export default InstructorView
