export function AlertPreview() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Instant alerts, zero noise
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            When something breaks, you'll know exactly what, by how much, and since when.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Slack alert mockup */}
          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Slack topbar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#19171d] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-slate-500 font-medium"># data-alerts</span>
            </div>

            {/* Message */}
            <div className="p-5">
              <div className="flex items-start gap-3">
                {/* Bot avatar */}
                <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                  <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3L4 8V17C4 23.075 9.375 28.35 16 30C22.625 28.35 28 23.075 28 17V8L16 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                    <path d="M7 16 L11 16 L13 11 L16 21 L19 13 L21 16 L25 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-bold text-white">Signal Guard</span>
                    <span className="text-xs text-slate-500">Today at 09:02 AM</span>
                  </div>

                  {/* Slack attachment */}
                  <div className="rounded-lg overflow-hidden border-l-4 border-red-500 bg-[#222529]">
                    <div className="px-4 py-3">
                      <p className="text-sm font-bold text-white mb-1">🚨 Anomaly detected — Production GA4</p>
                      <p className="text-xs text-slate-400 mb-3">Checked on 2024-01-15 · 3 anomalies found</p>

                      <div className="space-y-2">
                        {[
                          { event: "purchase", type: "DROP", drop: "74%", yesterday: 12, avg: 46 },
                          { event: "add_to_cart", type: "DROP", drop: "61%", yesterday: 89, avg: 228 },
                          { event: "begin_checkout", type: "MISSING", drop: "100%", yesterday: 0, avg: 34 },
                        ].map((a) => (
                          <div key={a.event} className="flex items-center justify-between py-1.5 border-t border-white/5">
                            <div>
                              <span className="text-xs font-mono text-slate-200">{a.event}</span>
                              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded font-medium ${a.type === "MISSING" ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"}`}>
                                {a.type}
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs text-red-400 font-semibold">↓ {a.drop}</span>
                              <span className="text-xs text-slate-500 ml-2">{a.yesterday} vs avg {a.avg}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email mockup */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Email header */}
            <div className="px-5 py-4 border-b border-white/5 bg-slate-800/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 text-white">
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3L4 8V17C4 23.075 9.375 28.35 16 30C22.625 28.35 28 23.075 28 17V8L16 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                    <path d="M7 16 L11 16 L13 11 L16 21 L19 13 L21 16 L25 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Signal Guard</p>
                  <p className="text-xs text-slate-500">noreply@getsignalguard.com</p>
                </div>
                <span className="ml-auto text-xs text-slate-500">09:02 AM</span>
              </div>
              <p className="text-sm font-semibold text-white">🚨 3 anomalies detected in Production GA4</p>
            </div>

            {/* Email body */}
            <div className="px-5 py-4">
              <p className="text-xs text-slate-400 mb-4">
                Signal Guard detected <strong className="text-white">3 anomalies</strong> in your GA4 data for <strong className="text-white">2024-01-15</strong>.
              </p>

              <div className="space-y-2 mb-4">
                {[
                  { event: "purchase", drop: "74% drop", color: "text-orange-400" },
                  { event: "add_to_cart", drop: "61% drop", color: "text-orange-400" },
                  { event: "begin_checkout", drop: "Missing (0 events)", color: "text-red-400" },
                ].map((a) => (
                  <div key={a.event} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs font-mono text-slate-300">{a.event}</span>
                    <span className={`text-xs font-semibold ${a.color}`}>{a.drop}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg px-4 py-2.5 text-center">
                <span className="text-xs text-indigo-300 font-medium">View full report →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
