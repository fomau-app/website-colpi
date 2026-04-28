import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Colpi",
  description: "Conditions générales d'utilisation de l'application Colpi.",
};

export default function CguPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <div className="mb-12">
          <p className="text-xs font-semibold text-gold/80 uppercase tracking-widest mb-4">Légal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Conditions Générales d&apos;Utilisation</h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de l&apos;application mobile <strong className="text-white/80">Colpi</strong>, éditée par FOMAU. En utilisant Colpi, vous acceptez ces CGU sans réserve.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Description du service</h2>
            <p className="mb-3">
              Colpi est une application de jeux de soirée disponible sur iOS et Android. Elle propose un modèle <strong className="text-white/80">freemium</strong> :
            </p>
            <ul className="space-y-2 mb-3">
              {[
                "Accès gratuit à une sélection de jeux sans inscription requise",
                "Abonnement hebdomadaire : accès complet à tous les jeux pour 7 jours",
                "Abonnement mensuel : accès complet à tous les jeux pour 30 jours",
                "Achat unique (accès à vie) : accès permanent à tous les jeux sans abonnement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Les prix sont indiqués dans l&apos;application et peuvent varier selon votre région. Les achats sont définitifs et non remboursables, sauf disposition légale contraire ou décision de l&apos;App Store / Google Play.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Accès et âge minimum</h2>
            <p>
              L&apos;application Colpi est destinée à un public de <strong className="text-white/80">17 ans et plus</strong>. En utilisant l&apos;application, vous confirmez avoir atteint cet âge ou disposer de l&apos;autorisation parentale requise. FOMAU se réserve le droit de suspendre tout compte dont l&apos;utilisateur ne respecterait pas cette condition.
            </p>
          </section>

          {/* Alcohol disclaimer — prominent */}
          <section className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F59E0B" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h2 className="text-amber-400 font-semibold text-base mb-2">4. Alcool et substances — Avertissement important</h2>
                <p className="text-white/60 leading-relaxed">
                  Colpi est une application de jeux de soirée destinée au divertissement. <strong className="text-white/80">Colpi ne promeut, n&apos;encourage ni ne cautionne en aucune façon la consommation d&apos;alcool, de substances psychoactives ou de tout autre produit pouvant être nocif pour la santé.</strong>
                </p>
                <p className="text-white/60 leading-relaxed mt-3">
                  Certains jeux peuvent, dans leur usage social, être associés à des pratiques impliquant de l&apos;alcool. Ces pratiques relèvent de l&apos;entière responsabilité des utilisateurs. Colpi décline toute responsabilité quant à l&apos;usage que les joueurs font de l&apos;application dans ce contexte.
                </p>
                <p className="text-white/60 leading-relaxed mt-3">
                  L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération. L&apos;alcool est interdit aux mineurs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Abonnements et paiements</h2>
            <p className="mb-3">
              Les abonnements sont gérés via <strong className="text-white/80">RevenueCat</strong> et traités par Apple (App Store) ou Google (Google Play). FOMAU ne collecte ni ne stocke aucune donnée bancaire.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Abonnement hebdomadaire — avec période d'essai gratuit",
                "Abonnement mensuel",
                "Achat unique (accès à vie) : accès permanent à tous les jeux",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-3">
              Les prix sont indiqués dans l&apos;application et peuvent varier selon votre région. Les abonnements se renouvellent automatiquement. Vous pouvez annuler à tout moment avant la fin de la période en cours, depuis :
            </p>
            <ul className="space-y-2 mb-3">
              {[
                "Réglages de votre compte Apple ID (App Store)",
                "Google Play → Abonnements (Android)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Colpi ne nécessite pas la création d&apos;un compte. Aucune donnée personnelle n&apos;est requise pour accéder aux jeux gratuits ou aux contenus premium.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Remboursements</h2>
            <p>
              FOMAU ne propose aucun remboursement direct. Toute demande doit être effectuée auprès de l&apos;<strong className="text-white/80">App Store</strong> ou de <strong className="text-white/80">Google Play</strong>, selon leurs propres conditions de remboursement.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Règles d&apos;utilisation</h2>
            <p className="mb-3">En utilisant Colpi, vous vous engagez à ne pas :</p>
            <ul className="space-y-2">
              {[
                "Tenter de contourner les protections des contenus premium",
                "Reproduire, distribuer ou revendre les jeux ou contenus de l'application",
                "Utiliser l'application à des fins commerciales non autorisées",
                "Compromettre la sécurité ou l'intégrité de l'application",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments de l&apos;application (design, logo, jeux, règles, textes, illustrations) est la propriété exclusive de FOMAU et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Responsabilité</h2>
            <p>
              Colpi est un outil de divertissement. FOMAU ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation de l&apos;application, notamment des comportements adoptés par les utilisateurs lors des sessions de jeu. L&apos;utilisation du service se fait sous votre entière responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est régi par notre{" "}
              <Link href="/politique-de-confidentialite" className="text-gold/80 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>, conforme au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">11. Modification des CGU</h2>
            <p>
              FOMAU se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications substantielles via l&apos;application ou par e-mail. La poursuite de l&apos;utilisation du service vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">12. Contact</h2>
            <p className="mb-3">Une question ou un problème ? Contactez-nous :</p>
            <ul className="space-y-2">
              {[
                { label: "Email", value: "contact@colpi.fr", href: "mailto:contact@colpi.fr" },
                { label: "Instagram", value: "@colpi_app", href: "https://www.instagram.com/colpi_app/" },
                { label: "TikTok", value: "@colpi_app", href: "https://www.tiktok.com/@colpi_app" },
              ].map(({ label, value, href }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="text-white/40">{label} :</span>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-gold/80 hover:text-white transition-colors">{value}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">13. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence exclusive des tribunaux français. En cas de différend, une solution amiable sera recherchée en priorité.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
