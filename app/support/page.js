import '../globals.css';

export const metadata = {
  title: 'Support — Point and Profit',
};

export default function Support() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      <a href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-block', marginBottom: '2rem' }}>← Back to Point and Profit</a>

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        <span className="gold">Support</span>
      </h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>We&rsquo;re here to help you get the most out of Point and Profit.</p>

      <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>Contact Us</h2>
        <p>For questions, bug reports, or feature requests, reach out to our team:</p>
        <p style={{ marginTop: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Email:</strong> <a href="mailto:support@pointandprofit.app" style={{ color: 'var(--gold)' }}>support@pointandprofit.app</a>
        </p>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-dim)' }}>We aim to respond within 24 hours.</p>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>Frequently Asked Questions</h2>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>How accurate are the valuations?</h3>
          <p>Point and Profit uses advanced AI to provide market estimates based on current data. However, all valuations are estimates for informational purposes only. For high-value items, we recommend getting a professional appraisal before buying or selling.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>What are Pro Analysis credits?</h3>
          <p>Every new user gets 5 free Pro Analysis credits. When the AI detects a potentially high-value item, you can use a Pro credit for a deep-dive forensic analysis that includes authentication tips, where-to-sell recommendations, and market trend insights.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>How do I manage or cancel my Pro subscription?</h3>
          <p>Your Pro subscription is managed through Apple. To cancel or change your subscription: open <strong style={{ color: 'var(--text-primary)' }}>Settings</strong> on your iPhone → tap your name → <strong style={{ color: 'var(--text-primary)' }}>Subscriptions</strong> → select <strong style={{ color: 'var(--text-primary)' }}>Point and Profit Pro</strong> → tap <strong style={{ color: 'var(--text-primary)' }}>Cancel Subscription</strong>. Cancellations take effect at the end of your current billing period.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Why does the app need camera access?</h3>
          <p>Point and Profit uses your camera to scan and identify objects in real-time. Images are processed by AI and are not stored on our servers. You can revoke camera access at any time in your device&rsquo;s Settings → Privacy → Camera.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Can I scan anything?</h3>
          <p>Yes! Point and Profit is a universal appraiser. It can identify and estimate the value of coins, antiques, furniture, cars, collectibles, pets, electronics, real estate features, jewelry, art, and much more.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>How do I delete my data?</h3>
          <p>All scan history is stored locally on your device. You can delete individual scans by swiping left on them in the Finds tab, or delete all data by uninstalling the App. No data is stored on our servers.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--charcoal)', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>The scan isn&rsquo;t working — what should I do?</h3>
          <p>Make sure you have a stable internet connection (the AI requires connectivity). Try improving lighting conditions and getting closer to the object. If problems persist, email us at <a href="mailto:support@pointandprofit.app" style={{ color: 'var(--gold)' }}>support@pointandprofit.app</a> with a description of the issue.</p>
        </div>

        <h2 style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' }}>Request Account &amp; Data Deletion</h2>
        <p>Since Point and Profit stores all data locally on your device, uninstalling the App removes all your data. If you have a Pro subscription and wish to fully close your account, please email <a href="mailto:support@pointandprofit.app" style={{ color: 'var(--gold)' }}>support@pointandprofit.app</a> with the subject line &ldquo;Account Deletion Request&rdquo; and we will process it within 7 business days.</p>

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
