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
              <strong className="text-white/80">FOMAU</strong> (&quot;nous&quot;, &quot;notre&quot;) s&apos;engage à protéger votre vie privée et vos informations personnelles. Cette politique décrit ce que nous collectons, pourquoi, comment nous l&apos;utilisons, et quels droits vous avez. Si vous avez des questions, contactez-nous à{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors">contact@colpi.fr</a>.
            </p>
            <p className="mt-3">
              Cette politique s&apos;applique à l&apos;application mobile <strong className="text-white/80">Colpi</strong> et à tout service associé. Veuillez la lire attentivement avant d&apos;utiliser l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Données collectées</h2>
            <p className="mb-4">
              Colpi <strong className="text-white/80">ne collecte aucune donnée personnelle identifiable</strong>. Sont notamment exclus :
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "Nom, adresse e-mail, mot de passe ou numéro de téléphone",
                "Géolocalisation précise",
                "Cookies tiers ou traqueurs publicitaires",
                "Données de santé, photos, contacts ou toute autre donnée sensible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-white/30 mt-1">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-3">Seules des données techniques anonymes sont collectées automatiquement :</p>
            <ul className="space-y-2 mb-4">
              {[
                "Type d'appareil, modèle et fabricant",
                "Version du système d'exploitation",
                "Langue de l'appareil",
                "Adresse IP (non stockée individuellement)",
                "Données d'usage anonymisées : jeux joués, temps passé, interactions par écran",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Ces données sont hébergées par des services tiers sécurisés (ex : Firebase Analytics) et ne permettent pas d&apos;identifier un utilisateur personnellement.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Finalités et bases légales du traitement</h2>
            <p className="mb-3">Nous traitons ces données sur les bases légales suivantes :</p>
            <ul className="space-y-3">
              {[
                { base: "Intérêt légitime", desc: "Améliorer le fonctionnement, la stabilité et les fonctionnalités de l'application ; identifier les bugs ; comprendre quels jeux plaisent." },
                { base: "Obligations légales", desc: "Divulguer des informations si la loi l'exige (demande judiciaire, autorité compétente)." },
              ].map(({ base, desc }) => (
                <li key={base} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span><strong className="text-white/80">{base} :</strong> {desc}</span>
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
            <p className="mb-3">Nous pouvons partager des données dans les situations suivantes :</p>
            <ul className="space-y-3">
              {[
                { titre: "Consentement", desc: "Si vous nous donnez un accord explicite pour un usage spécifique." },
                { titre: "Prestataires techniques", desc: "Firebase Analytics (statistiques d'usage anonymes) et RevenueCat (gestion des abonnements). Ces services sont conformes au RGPD et n'ont pas accès à vos données personnelles identifiables." },
                { titre: "Obligations légales", desc: "Si nous y sommes légalement contraints (décision de justice, autorité publique, sécurité nationale)." },
                { titre: "Intérêts vitaux", desc: "Pour prévenir une fraude, une menace à la sécurité ou une activité illicite." },
                { titre: "Cession d'activité", desc: "En cas de fusion, acquisition ou cession d'actifs, vos données peuvent être transférées, dans le respect de cette politique." },
              ].map(({ titre, desc }) => (
                <li key={titre} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span><strong className="text-white/80">{titre} :</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Sites et services tiers</h2>
            <p>
              L&apos;application peut contenir des liens vers des sites ou services tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers. Les données que vous leur communiquez ne sont pas couvertes par cette politique. Nous vous encourageons à lire leurs propres politiques de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Conservation des données</h2>
            <p>
              Les données techniques anonymes sont conservées uniquement le temps nécessaire aux fins décrites dans cette politique, sans jamais dépasser <strong className="text-white/80">6 mois</strong>. Lorsqu&apos;elles ne sont plus utiles, elles sont supprimées ou anonymisées. Aucune donnée personnelle identifiable n&apos;étant collectée, aucune donnée de ce type n&apos;est stockée.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données traitées. Cependant, aucune transmission sur internet n&apos;est garantie à 100% sécurisée. L&apos;utilisation de l&apos;application se fait sous votre responsabilité depuis un environnement sécurisé.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Mineurs</h2>
            <p>
              Colpi est destinée à un public de <strong className="text-white/80">17 ans et plus</strong>. L&apos;application contient des références à des jeux pouvant impliquer de l&apos;alcool dans un contexte festif. Elle ne doit pas être utilisée par des mineurs sans la supervision d&apos;un adulte responsable.
            </p>
          </section>

          {/* Alcohol warning */}
          <section className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6">
            <h2 className="text-amber-400 font-semibold text-base mb-2">10. Avertissement alcool</h2>
            <p className="text-white/60 leading-relaxed">
              Colpi ne promeut, n&apos;encourage ni ne cautionne en aucune façon la consommation d&apos;alcool ou de toute autre substance. Certains jeux peuvent, dans leur usage social, être associés à des pratiques impliquant de l&apos;alcool : ces pratiques relèvent de l&apos;entière responsabilité des utilisateurs.
            </p>
            <p className="text-white/50 text-xs mt-3">L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération. L&apos;alcool est interdit aux mineurs.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">11. Vos droits (RGPD)</h2>
            <p className="mb-3">
              Si vous résidez dans l&apos;Espace Économique Européen, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Droit d'accès et d'obtention d'une copie de vos données",
                "Droit de rectification",
                "Droit à l'effacement (« droit à l'oubli »)",
                "Droit à la limitation du traitement",
                "Droit à la portabilité",
                "Droit d'opposition au traitement",
                "Droit de retirer votre consentement à tout moment (sans affecter la licéité du traitement antérieur)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Dans la mesure où aucune donnée personnelle identifiable n&apos;est collectée, la plupart de ces droits ne trouvent pas à s&apos;appliquer. Pour toute demande, contactez-nous à{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors">contact@colpi.fr</a>.
              Vous pouvez également saisir votre autorité de protection des données locale — en France, la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold/80 hover:text-white transition-colors">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">12. Mises à jour de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique à tout moment. La date de dernière mise à jour est indiquée en haut de la page. En cas de modification substantielle, nous vous en informerons via l&apos;application ou par tout autre moyen approprié. Nous vous encourageons à consulter cette page régulièrement.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">13. Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez FOMAU à{" "}
              <a href="mailto:contact@colpi.fr" className="text-gold/80 hover:text-white transition-colors font-medium">contact@colpi.fr</a>{" "}
              ou via le site <a href="https://www.colpi.fr" className="text-gold/80 hover:text-white transition-colors">www.colpi.fr</a>.
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
