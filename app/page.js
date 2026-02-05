export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="crosshair">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="24" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
            <circle cx="40" cy="40" r="3" fill="#FFD700" />
            <line x1="40" y1="8" x2="40" y2="22" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="40" y1="58" x2="40" y2="72" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="40" x2="22" y2="40" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="58" y1="40" x2="72" y2="40" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 28V12H28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 12H68V28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M68 52V68H52" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 68H12V52" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="badge">Coming Soon — Download Free</div>

        <h1 className="hero-title">
          <span className="gold">Point</span> and <span className="gold">Profit</span>
        </h1>

        <p className="hero-subtitle">
          Point your phone at anything — coins, antiques, cars, furniture, collectibles — and instantly discover what it&apos;s worth.
        </p>

        <div className="cta-group">
          <a href="#pricing" className="cta-primary">
            <span>◆</span> Get Early Access
          </a>
          <a href="#how-it-works" className="cta-secondary">
            See How It Works
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how-it-works">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Three seconds to your<br />next big find.</h2>
        <p className="section-desc">
          No barcodes. No typing. No searching. Just point your camera and let our AI do the rest.
        </p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3 className="step-title">Point</h3>
            <p className="step-desc">
              Open the app and aim your camera at any object — a jar of old coins, a thrift store shelf, a vintage car, or an antique chair. Our AI sees what you see.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3 className="step-title">Identify</h3>
            <p className="step-desc">
              In under a second, our Gemini-powered vision engine identifies exactly what you&apos;re looking at — down to the year, maker, model, and condition.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3 className="step-title">Profit</h3>
            <p className="step-desc">
              Get an instant market valuation with a Profit Score. High-value finds trigger a &ldquo;cha-ching&rdquo; alert so you never walk past hidden treasure again.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== LENSES ===== */}
      <section className="section">
        <div className="section-label">Universal Appraiser</div>
        <h2 className="section-title">One app. Every category.<br />The world&apos;s inventory.</h2>
        <p className="section-desc">
          Point and Profit doesn&apos;t just identify objects — it reasons about rarity, condition, and 2026 market demand like a world-class expert.
        </p>

        <div className="lenses-grid">
          <div className="lens-card">
            <span className="lens-icon">🪙</span>
            <h3 className="lens-name">The Mint</h3>
            <div className="lens-hook">Coins &amp; Currency</div>
            <p className="lens-desc">
              Detects rare mint marks, doubled dies, and error dates that the naked eye misses. Turn your change jar into a treasure chest.
            </p>
          </div>

          <div className="lens-card">
            <span className="lens-icon">🏠</span>
            <h3 className="lens-name">The Closer</h3>
            <div className="lens-hook">Real Estate &amp; Home</div>
            <p className="lens-desc">
              Identifies HVAC age, flooring materials, panel brands, and repair costs. The investor&apos;s secret weapon for finding flip margins.
            </p>
          </div>

          <div className="lens-card">
            <span className="lens-icon">💎</span>
            <h3 className="lens-name">The Picker</h3>
            <div className="lens-hook">Antiques &amp; Collectibles</div>
            <p className="lens-desc">
              Recognizes maker&apos;s marks, era signatures, and brand logos. From mid-century Eames to vintage Speed Racer — if it&apos;s worth money, we find it.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== DEMO CARD ===== */}
      <section className="demo-section">
        <div className="section-label">Live Preview</div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>See what a scan looks like.</h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          This is what happens when you point your phone at a 1955 Lincoln Penny.
        </p>

        <div className="demo-card gold-glow">
          <div className="demo-object">Coin / Currency</div>
          <h3 className="demo-name">1955 Doubled Die<br />Lincoln Penny</h3>

          <div className="profit-gauge">
            <svg viewBox="0 0 140 140">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFE55C" />
                  <stop offset="100%" stopColor="#C5A200" />
                </linearGradient>
              </defs>
              <circle className="track" cx="70" cy="70" r="65" />
              <circle className="fill" cx="70" cy="70" r="65" />
            </svg>
            <span className="profit-number">94</span>
          </div>
          <div className="profit-label">Profit Score</div>

          <div className="demo-value">$1,200 — $1,800</div>
          <p className="demo-insight">
            &ldquo;Clear doubled die on date and LIBERTY. Strong VF+ grade. This is a confirmed high-value error coin.&rdquo;
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Pricing</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Free to scan.<br />Pro to profit.</h2>
          <p className="section-desc" style={{ margin: '0 auto 4rem' }}>
            Unlimited free scans forever. Upgrade to Pro when you find something big.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-tier">Free</div>
            <div className="price-amount">$0</div>
            <div className="price-period">Forever</div>
            <ul className="price-features">
              <li>Unlimited instant scans</li>
              <li>Object identification &amp; valuation</li>
              <li>Profit Score on every scan</li>
              <li>5 free Pro Analysis credits</li>
              <li>Scan history &amp; sharing</li>
            </ul>
            <a href="#" className="cta-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Download Free
            </a>
          </div>

          <div className="price-card featured">
            <div className="price-tier">Pro</div>
            <div className="price-amount"><span className="gold">$9.99</span></div>
            <div className="price-period">per month</div>
            <ul className="price-features">
              <li>Everything in Free</li>
              <li>Unlimited forensic deep-dive analysis</li>
              <li>Where-to-sell recommendations</li>
              <li>Authentication guidance</li>
              <li>Market trend insights</li>
              <li>Professional PDF appraisal reports</li>
            </ul>
            <a href="#" className="cta-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>◆</span> Get Early Access
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <h2 className="final-title">
          Stop walking past<br /><span className="gold">hidden treasure.</span>
        </h2>
        <p className="final-desc">
          Every garage sale, every attic, every pocket full of change — there&apos;s money hiding in plain sight. Point and Profit finds it.
        </p>
        <div className="cta-group">
          <a href="#" className="cta-primary" style={{ fontSize: '1.15rem', padding: '1.15rem 3rem' }}>
            <span>◆</span> Download Point and Profit
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="gold">Point</span> and <span className="gold">Profit</span>
        </div>
        <p className="footer-sub">
          Built by <a href="https://numberoneson.com" target="_blank" rel="noopener noreferrer">Number One Son Software</a> &nbsp;·&nbsp; © 2026
        </p>
      </footer>
    </>
  );
}
