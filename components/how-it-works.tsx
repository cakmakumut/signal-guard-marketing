const steps = [
  {
    number: "01",
    title: "Connect your GCP project",
    description: "Sign in with Google and connect the GCP project that contains your GA4 BigQuery export. We request read-only access — nothing more.",
  },
  {
    number: "02",
    title: "Create a guard",
    description: "Set your dataset ID, choose which events to monitor, define your drop threshold, and pick the events you care about.",
  },
  {
    number: "03",
    title: "Set your schedule",
    description: "Choose what time UTC you want the daily check to run. Signal Guard handles the rest automatically every day.",
  },
  {
    number: "04",
    title: "Get alerted instantly",
    description: "When an anomaly is detected, you receive an immediate Slack message or email with the affected events and drop percentages.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No code, no complex setup. Just connect your BigQuery project and start monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent -translate-x-6 z-0" />
              )}
              <div className="relative bg-slate-900 border border-white/5 rounded-2xl p-6">
                <span className="text-4xl font-bold text-indigo-500/20 mb-4 block">{step.number}</span>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/20 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to protect your GA4 data?</h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Start with one free guard. No credit card required.
          </p>
          <a
            href="https://app.getsignalguard.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
          >
            Get started for free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
