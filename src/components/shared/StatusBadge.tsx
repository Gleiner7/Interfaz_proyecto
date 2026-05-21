interface StatusBadgeProps {
  status: 'aprobado' | 'revisión' | 'correcciones' | 'activo' | 'inactivo'
}

const statusStyles: Record<StatusBadgeProps['status'], string> = {
  aprobado: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
  revisión: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
  correcciones: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
  activo: 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30',
  inactivo: 'bg-slate-800 text-slate-400 border border-slate-700'
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>{status}</span>
}

export default StatusBadge
