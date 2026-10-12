const form = document.querySelector("#contentForm");
const result = document.querySelector("#result");
const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copyBtn");

const profiles = {
  bar: {
    hook: "Una piccola pausa può cambiare la giornata ☕",
    ideas: ["Il tuo momento di relax ti aspetta.", "Passa a trovarci e concediti qualcosa di buono.", "Il profumo del caffè è sempre una buona idea."]
  },
  restaurant: {
    hook: "A tavola, i momenti migliori si condividono 🍕",
    ideas: ["Hai già deciso cosa mangiare stasera?", "Ingredienti scelti con cura e voglia di stare insieme.", "La prossima pausa golosa potrebbe essere qui."]
  },
  beauty: {
    hook: "Prenditi un momento tutto per te ✨",
    ideas: ["Un piccolo appuntamento con il benessere può fare la differenza.", "Il tuo prossimo look comincia da una buona idea.", "Dedica un po' di tempo a te: te lo meriti."]
  },
  fitness: {
    hook: "Un passo alla volta, un obiettivo alla volta 💪",
    ideas: ["Non serve essere perfetti: serve iniziare.", "Il tuo prossimo allenamento è un investimento su di te.", "Costanza prima della perfezione."]
  },
  shop: {
    hook: "Una nuova idea potrebbe aspettarti in negozio 🛍️",
    ideas: ["Scopri le novità e trova quella giusta per te.", "Passa a dare un'occhiata: potresti trovare il tuo prossimo preferito.", "Piccoli dettagli, nuove possibilità."]
  },
  other: {
    hook: "Il tuo prossimo progetto parte da una buona scelta ✨",
    ideas: ["Siamo qui per aiutarti a trovare la soluzione giusta.", "Hai un'idea? Parliamone insieme.", "Un servizio attento comincia dall'ascolto."]
  }
};

function makeContent(name, sector, format, offer) {
  const p = profiles[sector] || profiles.other;
  const detail = offer.trim() ? `\n\nIn evidenza: ${offer.trim()}.` : "";
  const cta = "\n\nScrivici per saperne di più o per chiedere informazioni.";
  const hashtags = "\n\n#attivitàlocale #qualità #scopridipiù";
  if (format === "reel") {
    return `IDEA REEL — ${name}\n\nScena 1: mostra un dettaglio riconoscibile della tua attività.\nScena 2: presenta il prodotto o servizio del giorno.\nScena 3: chiudi con una domanda per coinvolgere chi guarda.\n\nTesto in sovraimpressione: “${p.hook}”${detail}${cta}\n\nNota: gira video reali della tua attività e usa solo immagini per cui hai i diritti.`;
  }
  if (format === "promo") {
    return `BOZZA PROMOZIONALE — ${name}\n\n${offer.trim() ? `Da provare: ${offer.trim()}.` : p.hook}\n\nPassa a trovarci e scopri tutti i dettagli direttamente in negozio.${cta}\n\nPrima di pubblicare, aggiungi condizioni, date e prezzi esatti dell'offerta.`;
  }
  if (format === "week") {
    return `MINI CALENDARIO — ${name}\n\nLUNEDÌ · Presenta la tua attività e ciò che la rende speciale.\nMERCOLEDÌ · Condividi un consiglio utile legato al tuo settore.\nVENERDÌ · Mostra un prodotto o servizio e invita le persone a fare domande.\nDOMENICA · Racconta un momento dietro le quinte o chiedi un'opinione.\n\nTema suggerito: ${p.hook}${detail}\n\nAdatta giorni e frequenza agli orari e al pubblico della tua attività.`;
  }
  const idea = p.ideas[Math.floor(Math.random() * p.ideas.length)];
  return `POST INSTAGRAM — ${name}\n\n${p.hook}\n\n${idea}${detail}${cta}${hashtags}\n\nIDEA VISIVA: usa una foto originale e luminosa del tuo prodotto, del locale o del team.\n\n#DaPersonalizzare`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#business").value.trim();
  const sector = document.querySelector("#sector").value;
  const format = document.querySelector("#format").value;
  const offer = document.querySelector("#offer").value;
  if (!name) return;
  output.textContent = makeContent(name, sector, format, offer);
  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    copyBtn.textContent = "Copiato!";
    setTimeout(() => copyBtn.textContent = "Copia testo", 1400);
  } catch {
    copyBtn.textContent = "Seleziona e copia";
  }
});
