interface ProgressBarProps {
  value: number
  label?: string
}

const ProgressBar = ({ value, label }: ProgressBarProps) => {
  return (
    <div className="space-y-2">
      {label ? <div className="text-sm text-gray-400">{label}</div> : null}
      <div className="h-3 rounded-full bg-slate-800 border border-green-900/50 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500" style={{ width: `${value}%` }} />
      </div>
      <div className="text-right text-xs text-gray-400">{value}%</div>
    </div>
  )
}

export default ProgressBar
