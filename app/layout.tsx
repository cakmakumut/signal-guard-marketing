import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Guard — GA4 Event Anomaly Detection",
  description: "Automatically detect drops and anomalies in your GA4 event data before they impact your business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
