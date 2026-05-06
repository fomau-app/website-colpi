"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const games = [
  {
    id: "trivial",
    name: "Trivial Pour'Cuite",
    tagline: "Culture G et sanctions : cumule ou risque tout !",
    color: "#3779FC",
    image: "/games/TrivialPourcuite.png",
    isNew: true,
    rules: [
      "Chaque joueur répond à une question chacun son tour",
      "Tu cumules 1, 2 ou 3 points de manière aléatoire par question",
      "Bonne réponse = tu cumules ou distribues tes points",
      "Mauvaise réponse = tu prends tes points cumulés",
    ],
  },
  {
    id: "tierpotes",
    name: "TriPotes",
    tagline: "Le juge classe ses potes selon une question secrète. Il faut deviner laquelle.",
    color: "#AC5D1C",
    image: "/games/TriPotes.png",
    isNew: true,
    rules: [
      "Un joueur devient le juge",
      "Il découvre une question secrète et classe les autres joueurs selon elle",
      "Le groupe voit le classement et doit deviner la vraie question parmi 4 propositions",
      "Si le groupe trouve → le juge boit / S'il se trompe → le groupe boit",
    ],
  },
  {
    id: "jojauge",
    name: "Jojauge",
    tagline: "Devine ce que les autres pensent vraiment de toi sur une jauge de 0 à 100",
    color: "#058533",
    image: "/games/jojauge.png",
    isNew: true,
    rules: [
      "Un joueur est la cible : il ne regarde pas l'écran",
      "Les autres votent en secret entre 0 et 100 sur une question",
      "La cible doit deviner la moyenne (marge ±5)",
      "Dans la zone → gagné, sinon → perdu",
      "On passe ensuite au joueur suivant",
    ],
  },
  {
    id: "kimami",
    name: "Kimami",
    tagline: "Deviner ce que tes potes pensent de toi",
    color: "#FFE051",
    image: "/games/Kimami.png",
    isNew: true,
    rules: [
      "Chacun classe tout le monde en secret pour 3 questions",
      "Une fois que tout le monde a voté, on découvre les classements",
      "Le groupe doit deviner le vrai classement de chaque question via drag & drop",
      "Nombre d'essais = (nombre de joueurs - 2), entre 1 et 3",
      "Bonne réponse → on découvre les votes 🎉 / Échec → le vrai classement est révélé",
    ],
  },
  {
    id: "roue",
    name: "La Roue",
    tagline: "Jeu libre. Crée ta roue, choisis les probabilités, et laisse le hasard décider.",
    color: "#45C614",
    image: "/games/LaRoue.png",
    isNew: true,
    rules: [
      "Crée jusqu'à 10 cases avec ton propre texte",
      "Définis le poids (probabilité relative) de chaque case",
      "Lance la roue : le sélecteur en haut indique le quartier tiré",
    ],
  },
  {
    id: "pitch",
    name: "Pitch Approx",
    tagline: "Deviner le film à partir d'un pitch très mal raconté",
    color: "#4728FE",
    image: "/games/PitchApprox.png",
    isNew: true,
    rules: [
      "Un pitch approximatif s'affiche à l'écran",
      "Le premier joueur qui trouve gagne",
    ],
  },
  {
    id: "copain",
    name: "Question pour un copain",
    tagline: "Des questions sur tes amis",
    color: "#8F26F7",
    image: "/games/QuestionPourUnCopain.png",
    isNew: true,
    rules: [
      "Un joueur est tiré au sort",
      "Il doit répondre à 2 questions sur les autres joueurs",
      "S'il échoue, il devra répondre à une question révélation",
      "Puis on passe au joueur suivant",
    ],
  },
  {
    id: "telepathe",
    name: "Télépathe",
    tagline: "Pense comme les autres",
    color: "#D350DE",
    image: "/games/Telepathe.png",
    isNew: true,
    rules: [
      "2 mots s'affichent à l'écran",
      "Tout le monde dit un mot lié aux 2 mots",
      "Les joueurs avec un mot commun distribuent X pénalités",
      "Les autres prennent 1 pénalité",
    ],
  },
  {
    id: "dix",
    name: "C'est un.e 10 mais…",
    tagline: "Un.e 10 avec une contrepartie surprenante",
    color: "#9CA3AF",
    image: "/games/CestUn10Mais.png",
    isNew: true,
    rules: [
      "Une personne est un 10/10 physiquement",
      "Une contrepartie vient changer la perception",
      "À 3, chacun annonce une note sur 10",
      "Certains joueurs prennent une sanction en fonction de leur note",
    ],
  },
  {
    id: "tribunal",
    name: "Le Tribunal",
    tagline: "Défends-toi ou accuse les autres",
    color: "#F92F28",
    image: "/games/Tribunal.png",
    isNew: false,
    rules: [
      "Chaque joueur écrit une accusation (il pourra rester secret)",
      "Un à un les accusés se défendent (les accusations sont tirées aléatoirement)",
      "Vote à main levée : Coupable ou Non coupable",
    ],
  },
  {
    id: "banger",
    name: "Banger ou Ringard",
    tagline: "Banger ou ringard ? Le groupe décide",
    color: "#FDDA45",
    image: "/games/BangerOuRingard.png",
    isNew: false,
    rules: [
      "Une situation est proposée à tous les joueurs",
      "À 3, tout le monde vote : Banger (bras levé) ou Ringard (bras baissé)",
      "Les minoritaires perdent et prennent une sanction",
    ],
  },
  {
    id: "entre",
    name: "Entre 1 et 20",
    tagline: "Trouve le bon nombre",
    color: "#C83E26",
    image: "/games/Entre1et20.png",
    isNew: false,
    rules: [
      "Tirage au sort d'un joueur pour deviner le numéro mystère",
      "Tous les autres reçoivent le même chiffre (1 à 20)",
      "Le devineur a 3 questions maximum pour trouver le chiffre",
    ],
  },
  {
    id: "casting",
    name: "Le Casting",
    tagline: "Convaincre le directeur de casting",
    color: "#FB8732",
    image: "/games/Casting.png",
    isNew: false,
    rules: [
      "Un joueur devient le directeur de casting",
      "Une situation / question s'affiche",
      "Les autres joueurs tentent de convaincre le directeur",
      "Le directeur choisit l'acteur le plus convaincant",
    ],
  },
  {
    id: "nombre",
    name: "Le Juste Nombre",
    tagline: "Devine le nombre le plus proche de la bonne réponse",
    color: "#939393",
    image: "/games/LeJusteNombre.png",
    isNew: false,
    rules: [
      "Solo ou par équipe",
      "Une question est posée",
      "Répondre tour à tour (l'ordre de réponse change au fur et à mesure)",
      "Le plus proche gagne, le plus loin perd",
    ],
  },
  {
    id: "plus",
    name: "Qui est le plus ?",
    tagline: "Vote pour la personne qui est le plus…",
    color: "#B41B03",
    image: "/games/QuiEstLePlus.png",
    isNew: false,
    rules: [
      "Une question apparaît",
      "Le groupe discute et désigne quelqu'un",
    ],
  },
  {
    id: "million",
    name: "Le Million mais…",
    tagline: "Accepte, ou pas, le million en échange d'une contrepartie",
    color: "#56CA3C",
    image: "/games/LeMillionMais.png",
    isNew: false,
    rules: [
      "Une situation avec un million et sa contrepartie est proposée",
      "Débattez ensemble",
      "Votez",
      "Les minoritaires perdent et prennent une sanction",
    ],
  },
  {
    id: "def",
    name: "La Def",
    tagline: "Devine la définition d'un mot",
    color: "#B76D25",
    image: "/games/LaDef.png",
    isNew: false,
    rules: [
      "Un mot apparaît",
      "Chacun énonce sa définition",
      "Affichage de la vraie définition",
      "Le plus proche et le plus drôle gagnent",
    ],
  },
];

export default function Games() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<typeof games[0] | null>(null);

  return (
    <section id="jeux" ref={ref} className="py-16 md:py-32 px-6 relative">
      <div className="orb w-[500px] h-[500px] bg-[#F0A500]/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-[#F0A500]/80 uppercase mb-4">Les jeux</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight uppercase">
            <span className="text-white">Des jeux pour </span>
            <span className="gradient-text-gold">tous les goûts</span>
          </h2>
          <p className="text-white/40 text-lg mt-5 max-w-xl mx-auto font-light">
            {games.length} jeux disponibles. Clique pour découvrir les règles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game, i) => (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              onClick={() => setSelected(game)}
              className="game-card rounded-3xl p-6 text-left group hover:border-white/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden h-[228px]"
            >
              {game.isNew && (
                <span className="absolute top-3 right-3 bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
                  NEW
                </span>
              )}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${game.color}12 0%, transparent 70%)` }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl overflow-hidden mb-4 flex-shrink-0"
                  style={{ border: `1px solid ${game.color}40` }}
                >
                  <Image src={game.image} alt={game.name} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{game.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{game.tagline}</p>
                {game.rules.length > 0 && (
                  <div
                    className="mt-auto pt-3 text-xs font-medium flex items-center gap-1"
                    style={{ color: game.color }}
                  >
                    Voir les règles
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && selected.rules.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md bg-[#1C1C2E] rounded-3xl p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${selected.color}50` }}
                  >
                    <Image src={selected.image} alt={selected.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-black text-xl">{selected.name}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white transition-colors">
                  <X size={22} />
                </button>
              </div>

              <p className="text-white/60 text-sm mb-5">
                <span className="text-white font-semibold">But du jeu : </span>
                {selected.tagline}
              </p>

              <ul className="space-y-3">
                {selected.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: selected.color }} />
                    {rule}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
