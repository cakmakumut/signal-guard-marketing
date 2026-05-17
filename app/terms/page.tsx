import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service — Signal Guard",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24 pt-32 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-slate-500 text-sm mb-12">Last updated: May 2025</p>

      <section className="space-y-10 text-sm leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-slate-400">
            By accessing or using Signal Guard ("the Service"), you agree to be bound by these
            Terms of Service. The Service is operated by Umut Çakmak, based in Turkey. If you do not agree to these terms, please do not use the Service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">2. Description of Service</h2>
          <p className="text-slate-400">
            Signal Guard is a monitoring tool that connects to your Google BigQuery datasets
            to detect anomalies in your GA4 event data and send alerts via email or Slack.
            The Service requires you to grant read-only access to your Google Cloud project.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">3. Your Account</h2>
          <p className="text-slate-400">
            You are responsible for maintaining the security of your account credentials.
            You must provide accurate information when creating your account.
            You are responsible for all activity that occurs under your account.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">4. Acceptable Use</h2>
          <p className="text-slate-400">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 mt-2">
            <li>Use the Service for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to any part of the Service.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Share your account credentials with others.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">5. Google API Access</h2>
          <p className="text-slate-400">
            By connecting your Google account, you authorize Signal Guard to access your
            BigQuery data in read-only mode. You can revoke this access at any time from
            your Google account settings. Signal Guard will not modify, delete, or share
            your Google Cloud data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">6. Free Plan & Paid Plans</h2>
          <p className="text-slate-400">
            Signal Guard offers a free plan with limited features. Paid plans may be introduced
            in the future with expanded capabilities. Pricing and plan details will be communicated
            in advance of any changes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">7. Availability & Uptime</h2>
          <p className="text-slate-400">
            We strive to maintain high availability but do not guarantee uninterrupted access
            to the Service. We are not liable for any losses resulting from downtime or service
            interruptions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">8. Limitation of Liability</h2>
          <p className="text-slate-400">
            Signal Guard is provided "as is" without warranties of any kind. We are not liable
            for any indirect, incidental, or consequential damages arising from your use of the
            Service, including missed anomaly alerts or incorrect detections.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">9. Termination</h2>
          <p className="text-slate-400">
            You may stop using the Service at any time. We reserve the right to suspend or
            terminate accounts that violate these Terms. Upon termination, your data will be
            deleted within 30 days upon request.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">10. Changes to Terms</h2>
          <p className="text-slate-400">
            We may update these Terms from time to time. Continued use of the Service after
            changes constitutes acceptance of the new Terms. We will notify users of significant
            changes via email.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">11. Governing Law</h2>
          <p className="text-slate-400">
            These Terms are governed by the laws of Turkey. Any disputes shall be resolved
            in the courts of Turkey.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">12. Contact</h2>
          <p className="text-slate-400">
            Questions about these Terms? Email us at{" "}
            <a href="mailto:data@umutcakmak.com" className="text-indigo-400 hover:underline">
              data@umutcakmak.com
            </a>.
          </p>
        </div>

      </section>
    </main>
    <Footer />
    </>
  );
}
