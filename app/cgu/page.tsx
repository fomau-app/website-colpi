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
            <h2 className="text-white font-semibold text-base mb-3">5. Abonnements et résiliation</h2>
            <p className="mb-3">
              Les abonnements hebdomadaires et mensuels sont à renouvellement automatique. Vous pouvez annuler votre abonnement à tout moment depuis :
            </p>
            <ul className="space-y-2 mb-3">
              {[
                "Les réglages de votre compte Apple ID (App Store)",
                "Google Play → Abonnements (Android)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              L&apos;annulation prend effet à la fin de la période en cours. Aucun remboursement partiel n&apos;est effectué pour la période restante, sauf décision de l&apos;App Store ou du Google Play.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Création de compte</h2>
            <p className="mb-3">Lors de l&apos;inscription, vous vous engagez à :</p>
            <ul className="space-y-2">
              {[
                "Fournir des informations exactes et à jour",
                "Maintenir la confidentialité de vos identifiants",
                "Ne pas créer plusieurs comptes",
                "Notifier Colpi en cas d'utilisation non autorisée de votre compte",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            <h2 className="text-white font-semibold text-base mb-3">12. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence exclusive des tribunaux français. En cas de différend, une solution amiable sera recherchée en priorité via{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors">contact@colpi.fr</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
