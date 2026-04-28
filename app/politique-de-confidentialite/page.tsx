import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Colpi",
  description: "Comment Colpi collecte et utilise vos données.",
};

export default function PolitiqueConfidentialitePage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Politique de confidentialité</h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Introduction</h2>
            <p>
              Colpi est une application mobile de jeux de soirée éditée par <strong className="text-white/80">FOMAU</strong>. Nous respectons votre vie privée et nous nous engageons à collecter le strict minimum de données nécessaires au bon fonctionnement de l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Données collectées</h2>
            <p className="mb-4">
              Colpi <strong className="text-white/80">ne collecte aucune donnée personnelle</strong> : pas de nom, pas d&apos;adresse e-mail, pas de numéro de téléphone, pas de géolocalisation, pas de suivi publicitaire.
            </p>
            <p className="mb-3">Seules des données techniques anonymes sont collectées :</p>
            <ul className="space-y-2 mb-4">
              {[
                "Type d'appareil et version du système d'exploitation",
                "Langue de l'appareil",
                "Données d'usage anonymisées (temps passé dans l'app, jeux joués, interactions par écran)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Ces données sont strictement non personnelles et ne permettent pas de vous identifier.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Finalités</h2>
            <p className="mb-3">Ces données anonymes sont utilisées uniquement pour :</p>
            <ul className="space-y-2">
              {[
                "Améliorer le fonctionnement et la stabilité de l'application",
                "Comprendre quelles fonctionnalités et quels jeux plaisent",
                "Corriger les bugs et améliorer la fluidité",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-medium text-white/80">Nous ne vendons aucune donnée à des tiers. Jamais.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Achats intégrés</h2>
            <p>
              Les achats (abonnement hebdomadaire, mensuel, ou accès à vie) sont intégralement traités par <strong className="text-white/80">Apple (App Store)</strong> ou <strong className="text-white/80">Google (Google Play)</strong>. Colpi n&apos;accède à aucune information bancaire ou de paiement. Pour toute question de facturation, référez-vous aux politiques d&apos;Apple ou de Google.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Partage avec des tiers</h2>
            <p>
              Nous ne partageons aucune donnée personnelle avec des tiers. Nous utilisons des outils d&apos;analyse anonymes (de type Firebase Analytics ou équivalent) uniquement pour des statistiques d&apos;usage global, sans identification des utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Mineurs</h2>
            <p>
              Colpi est destinée à un public de <strong className="text-white/80">17 ans et plus</strong>. L&apos;application contient des références à des jeux pouvant impliquer de l&apos;alcool dans un contexte festif. Elle ne doit pas être utilisée par des mineurs sans la supervision d&apos;un adulte responsable.
            </p>
          </section>

          {/* Alcohol warning */}
          <section className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6">
            <h2 className="text-amber-400 font-semibold text-base mb-2">7. Avertissement alcool</h2>
            <p className="text-white/60 leading-relaxed">
              Colpi ne promeut, n&apos;encourage ni ne cautionne en aucune façon la consommation d&apos;alcool ou de toute autre substance. Certains jeux peuvent, dans leur usage social, être associés à des pratiques impliquant de l&apos;alcool : ces pratiques relèvent de l&apos;entière responsabilité des utilisateurs.
            </p>
            <p className="text-white/50 text-xs mt-3">L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération. L&apos;alcool est interdit aux mineurs.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Vos droits (RGPD)</h2>
            <p>
              Dans la mesure où aucune donnée personnelle n&apos;est collectée, la plupart des droits RGPD ne trouvent pas à s&apos;appliquer. Si vous avez néanmoins une question relative à vos données ou souhaitez exercer un droit, contactez-nous à{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors">contact@colpi.fr</a>.
              Vous pouvez également saisir la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold/80 hover:text-white transition-colors">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, contactez FOMAU à{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors font-medium">contact@colpi.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Modifications</h2>
            <p>
              Cette politique peut évoluer en cas de changement de l&apos;application. Toute modification sera indiquée ici avec la date de mise à jour.
            </p>
          </section>

        </div>

        {/* Summary card */}
        <div className="mt-16 border border-white/10 rounded-2xl p-6">
          <p className="text-xs font-semibold text-gold/80 uppercase tracking-widest mb-3">En résumé</p>
          <p className="text-white/50 text-sm leading-relaxed">
            Chez Colpi, on fait des jeux — pas de la collecte de données. Vous jouez, vous rigolez, et c&apos;est tout.
          </p>
        </div>

      </div>
    </main>
  );
}
