import React from 'react'

export default function Context({children}) {
  return (
    <div>
        <div className=" relative  border border-cyan-800/30 rounded-[5px] p-10 pb-24 flex gap-12">
              <div>
                <span className="text-cyan-500/70 text-lg font-mono">{children}</span>
                <h3 className="text-white text-4xl font-bold mt-1">{children}</h3>
                <p className="text-cyan-400/80 text-[16px] mt-5">
                  {children}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {["React", "JavaScript", "Tailwind",].map((t) => (
                    <span key={t} className="text-cyan-400 text-xs border border-cyan-800/50 rounded-md px-3 py-1 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
        
              <div className="flex flex-col gap-6">
                <Buttons className="border border-cyan-800/50 text-cyan-300 text-sm font-mono px-4 py-2 rounded-lg">
                 {children}
                </Buttons>
                <button className="bg-cyan-400 text-black text-sm font-mono font-medium px-4 py-3 rounded-lg">
                 {children}
                </button>
              </div>
              <div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[820px] h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              </div>
            </div>
    </div>
  )
}
