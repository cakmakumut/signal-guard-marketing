export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Powered by BigQuery
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Know when your GA4
          <br />
          <span className="text-indigo-400">events go silent</span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Signal Guard monitors your GA4 BigQuery export daily, detects missing or dropped events,
          and alerts you before a data issue becomes a business problem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.getsignalguard.com"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors text-sm"
          >
            Start monitoring for free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium transition-colors text-sm"
          >
            See how it works
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-slate-900 overflow-hidden shadow-2xl shadow-indigo-950/50">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-slate-500">app.getsignalguard.com/dashboard</span>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4">
            {[
              { label: "Active Guards", value: "4", color: "text-white" },
              { label: "Anomalies (24h)", value: "2", color: "text-red-400" },
              { label: "Failed Runs", value: "0", color: "text-slate-400" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6">
            <div className="bg-slate-800/50 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Recent Runs</span>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { name: "Production GA4", date: "2024-01-15", status: "SUCCESS", anomalies: 2 },
                  { name: "Staging GA4", date: "2024-01-15", status: "SUCCESS", anomalies: 0 },
                  { name: "Production GA4", date: "2024-01-14", status: "SUCCESS", anomalies: 0 },
                ].map((run, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm text-slate-300">{run.name}</span>
                    <span className="text-xs text-slate-500">{run.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${run.status === "SUCCESS" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                      {run.status}
                    </span>
                    <span className={`text-sm font-medium ${run.anomalies > 0 ? "text-red-400" : "text-slate-500"}`}>
                      {run.anomalies}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
