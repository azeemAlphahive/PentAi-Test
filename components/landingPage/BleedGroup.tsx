import * as React from "react";
export function BleedGroup({ children }: React.PropsWithChildren) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0c10]">
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 top-0 z-0 h-14
          bg-gradient-to-b from-[#0b0c10]/85 via-[#0b0c10]/55 to-transparent
        "
      />
      {/* upper purple beam */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 -top-8 -z-10 h-[420px]
          [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
        "
      >
        <div
          className="
            absolute left-1/2 top-0 h-[200px] w-[1100px] -translate-x-1/2
            rounded-[36px] bg-fuchsia-600/24 blur-[140px]
          "
        />
        <div
          className="
            absolute left-[18%] top-6 h-[200px] w-[560px] -translate-x-1/2
            rounded-[36px] bg-fuchsia-400/14 blur-[150px]
          "
        />
        <div
          className="
            absolute left-[82%] top-8 h-[220px] w-[560px] -translate-x-1/2
            rounded-[36px] bg-purple-900/22 blur-[160px]
          "
        />
      </div>
      <div
        aria-hidden
        className="
          pointer-events-none absolute -z-10
          left-1/2 top-[760px] h-[720px] w-[1700px]
          -translate-x-[42%]
          [background:radial-gradient(60%_70%_at_70%_50%,rgba(255,255,255,0.20),rgba(255,255,255,0.08)_50%,transparent_85%)]
          blur-[40px]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[800px]
          [background:radial-gradient(80%_80%_at_50%_100%,rgba(0,0,0,0.45),transparent_70%)]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-30
          [background:radial-gradient(120%_110%_at_50%_120%,rgba(0,0,0,0.35),transparent_60%)]
        "
      />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
