import BrandMark from './BrandMark';
import UiGlyph from './UiGlyph';

function LandingPage({ data, onStartCheckout, brandSources }) {
  return (
    <main className="page-shell">
      <div className="poster-shell poster-shell-simple">
        <section className="landing-simple-header" aria-label="Partenariat">
          <div className="landing-logo-block">
            <BrandMark
              sources={brandSources}
              alt="DRden"
              fallbackType="drden"
              brand="drden"
            />
          </div>
          <p>En collaboration avec <strong>DRDEN</strong></p>
        </section>

        <section className="landing-simple-hero">
          <span className="landing-simple-kicker">📶 Forfaits Internet</span>
          <h1>Restez Connecte Sans Limites</h1>
          <p>
            Choisissez un forfait. Vous serez redirige vers la page de connexion DRden Lite
            pour proceder au paiement.
          </p>
          <div className="landing-proof-grid" aria-label="Indicateurs de confiance">
            <article>
              <strong>99.9%</strong>
              <span>Disponibilite reseau</span>
            </article>
            <article>
              <strong>&lt; 30s</strong>
              <span>Activation moyenne</span>
            </article>
            <article>
              <strong>24/7</strong>
              <span>Support continu</span>
            </article>
          </div>
          <button
            type="button"
            className="hero-cta"
            onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Voir les forfaits
          </button>
        </section>

        <section className="card-grid" id="offers">
          {data.offres.map((offre) => (
            <article key={offre.id} className="offer-card">
              <div className="offer-top">
                <span className="offer-charge">{offre.tier === 'pro' || offre.tier === 'max' || offre.tier === 'unlimited' ? '4G+' : '4G'}</span>
                {offre.badge && <span className={`offer-badge ${offre.badgeClass}`}>{offre.badge}</span>}
              </div>
              <div className="offer-body">
                <span className="offer-amount">{offre.title}</span>
                <span className="offer-duration">{offre.subtitle}</span>
              </div>
              <div className="offer-price">
                <span className="offer-currency">{offre.currency}</span>
                <span className="offer-value">{offre.price.toFixed(2)}</span>
              </div>
              <button type="button" onClick={() => onStartCheckout(offre)}>
                <UiGlyph type="spark" />
                Choisir ce forfait
              </button>
            </article>
          ))}
        </section>

        <section className="airdata-trust" aria-label="Avantages">
          <article>
            <span aria-hidden="true">⚡</span>
            <strong>Activation instantanee</strong>
          </article>
          <article>
            <span aria-hidden="true">🔒</span>
            <strong>Paiement securise</strong>
          </article>
          <article>
            <span aria-hidden="true">📡</span>
            <strong>Couverture nationale stable</strong>
          </article>
        </section>

        <footer className="airdata-footer">© 2026 DRden. Tous droits reserves.</footer>
      </div>
    </main>
  );
}

export default LandingPage;
