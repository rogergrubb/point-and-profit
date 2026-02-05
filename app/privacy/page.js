import '../globals.css';

export const metadata = {
  title: 'Privacy Policy — Point and Profit',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      <a href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-block', marginBottom: '2rem' }}>← Back to Point and Profit</a>

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        <span className="gold">Privacy</span> Policy
      </h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>Last updated: February 5, 2026</p>

      <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>1. Introduction</h2>
        <p>Point and Profit (&ldquo;the App&rdquo;) is developed and operated by Number One Son Software (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Point and Profit mobile application.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>2. Information We Collect</h2>

        <p><strong style={{ color: 'var(--text-primary)' }}>Camera Images:</strong> When you use the scanning feature, the App captures images from your device&rsquo;s camera. These images are sent to Google&rsquo;s Gemini API (a third-party AI service) for object identification and valuation. Images are processed in real-time and are <strong style={{ color: 'var(--text-primary)' }}>not stored on our servers</strong>.</p>

        <p style={{ marginTop: '1rem' }}><strong style={{ color: 'var(--text-primary)' }}>Scan History:</strong> Your scan results (object names, categories, estimated values, and Profit Scores) are stored locally on your device only. This data is not transmitted to or stored on our servers.</p>

        <p style={{ marginTop: '1rem' }}><strong style={{ color: 'var(--text-primary)' }}>Purchase Information:</strong> If you subscribe to Point and Profit Pro, your payment is processed by Apple through the App Store. We do not collect, store, or have access to your payment card details. We receive only a confirmation of your subscription status from Apple.</p>

        <p style={{ marginTop: '1rem' }}><strong style={{ color: 'var(--text-primary)' }}>Device Information:</strong> We may collect basic device information (device type, operating system version) for the purpose of app performance optimization and crash diagnostics.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>3. Third-Party AI Disclosure</h2>
        <p>Point and Profit uses <strong style={{ color: 'var(--text-primary)' }}>Google Gemini API</strong> to analyze images you capture. When you scan an object, the captured image is transmitted to Google&rsquo;s servers for processing. Google processes this data according to their own privacy policies. We do not share any personally identifiable information with Google through this process — only the image you choose to scan. By using the scanning feature, you consent to this data being processed by Google&rsquo;s AI services. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google&rsquo;s Privacy Policy</a>.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>4. How We Use Your Information</h2>
        <p>We use the information described above solely to: provide the object identification and valuation service; maintain and improve the App&rsquo;s performance; process your subscription through Apple; and store your scan history locally on your device for your convenience.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>5. Data Sharing</h2>
        <p>We do not sell, trade, rent, or otherwise share your personal information with third parties for marketing or advertising purposes. Images are shared with Google Gemini API solely for the purpose of providing the scanning service, as described above. No other third parties receive your data.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>6. Data Retention</h2>
        <p>Camera images are processed in real-time by Google Gemini and are not retained by us. Scan history is stored locally on your device and can be deleted at any time by you within the App or by uninstalling the App. We do not maintain server-side copies of your scan data.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>7. Your Rights &amp; Data Deletion</h2>
        <p>You have the right to: delete your scan history at any time within the App; revoke camera permissions through your device settings; cancel your Pro subscription at any time through Apple&rsquo;s subscription management; and request information about any data we hold. Since all user data is stored locally on your device, deleting the App effectively removes all your data. If you wish to request data deletion or have questions, contact us at the email address below.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>8. Children&rsquo;s Privacy</h2>
        <p>Point and Profit is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete that information.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>9. Security</h2>
        <p>We use commercially reasonable measures to protect the information transmitted through the App. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the App after changes constitutes acceptance of the updated policy.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or your data, please contact us at:</p>
        <p style={{ marginTop: '0.75rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Number One Son Software</strong><br />
          Email: <a href="mailto:privacy@pointandprofit.app" style={{ color: 'var(--gold)' }}>privacy@pointandprofit.app</a><br />
          Website: <a href="https://pointandprofit.app" style={{ color: 'var(--gold)' }}>pointandprofit.app</a>
        </p>
      </div>

      <footer className="footer" style={{ marginTop: '4rem' }}>
        <div className="footer-brand">
          <span className="gold">Point</span> and <span className="gold">Profit</span>
        </div>
        <p className="footer-sub">
          Built by <a href="https://numberoneson.com" target="_blank" rel="noopener noreferrer">Number One Son Software</a> &nbsp;·&nbsp; © 2026
        </p>
      </footer>
    </main>
  );
}
