
export default function Buttons({children}, className) {
  return (
    <div className={`text-xs text-cyan-500 tracking-wider bg-[#091416] uppercase w-fit border px-12 py-3.5 rounded-[10px] ${className}`}>
        {children}
    </div>
  )
}
