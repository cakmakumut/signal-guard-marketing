export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white">
            <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L4 8V17C4 23.075 9.375 28.35 16 30C22.625 28.35 28 23.075 28 17V8L16 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
              <path d="M7 16 L11 16 L13 11 L16 21 L19 13 L21 16 L25 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <span className="text-sm font-medium text-slate-400">Signal Guard</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a>
          <span className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Signal Guard</span>
        </div>
      </div>
    </footer>
  );
}
