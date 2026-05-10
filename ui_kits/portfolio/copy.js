// FR / EN copy dictionary. All copy lives here.
// Always extend in matched pairs.

window.COPY = {
  en: {
    nav: { work: "Work", skills: "Skills", about: "About", contact: "Contact" },
    hero: {
      kicker: "EMBEDDED · FULLSTACK · PARIS",
      headline: "I build medical devices and the software around them.",
      sub: "Freelance engineer working on regulated MedTech firmware and fullstack web products. Available for remote and on-site collaboration across the EU.",
      cta1: "Get in touch",
      cta2: "Download CV",
    },
    about: {
      eyebrow: "ABOUT",
      title: "Senior engineer, two stacks, one job: ship.",
      body:
        "I split my time between firmware on regulated medical devices and fullstack web work for product teams. Same engineering rigour, two very different stacks. Based in Paris, comfortable in French and English client settings.",
      pill: "Available for new projects · Q2 2025",
      location: "Paris, France",
    },
    skills: {
      eyebrow: "WHAT I BUILD",
      title: "Two stacks, both in production.",
      embedded: {
        title: "Embedded · MedTech",
        items: [
          { k: "Languages", v: "C, C++, modern Rust (learning)" },
          { k: "MCU / SoC", v: "ESP32-S3, STM32, nRF52" },
          { k: "RTOS", v: "FreeRTOS, Zephyr (some)" },
          { k: "Connectivity", v: "BLE, Wi-Fi, AWS IoT (MQTT, Greengrass)" },
          { k: "Process", v: "IEC 62304 Class B, ISO 14971, design history files" },
          { k: "Lab", v: "Logic analyser, scope, in-vivo trial support" },
        ],
      },
      web: {
        title: "Web · Fullstack",
        items: [
          { k: "Frontend", v: "React, Vite, TypeScript, TanStack" },
          { k: "Backend", v: "Node.js, Firebase, Cloud Functions" },
          { k: "Data / AI", v: "Gemini, OpenAI, vector indexes, RAG pipelines" },
          { k: "Mobile", v: "Flutter (production app shipped)" },
          { k: "Infra", v: "Firebase Hosting, Cloudflare, GitHub Actions" },
          { k: "Process", v: "Solo-to-team handoff, pair programming, code review" },
        ],
      },
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Five projects, five contexts.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "If you're hiring or shipping, get in touch.",
      body:
        "I read every message. I reply within two business days. For NDA / contract terms, attach them and I'll respond with a calendar link.",
      mail: "tom@huyghe.dev",
      cta: "Write me",
    },
    footer: "© 2025 Tom Huyghe · Paris",
  },
  fr: {
    nav: { work: "Projets", skills: "Compétences", about: "À propos", contact: "Contact" },
    hero: {
      kicker: "EMBARQUÉ · FULLSTACK · PARIS",
      headline: "Je conçois des dispositifs médicaux et les logiciels qui les entourent.",
      sub: "Ingénieur freelance, je travaille sur du firmware MedTech régulé et des produits web fullstack. Disponible en remote et en présentiel dans l'UE.",
      cta1: "Me contacter",
      cta2: "Télécharger CV",
    },
    about: {
      eyebrow: "À PROPOS",
      title: "Ingénieur senior, deux stacks, un même métier : livrer.",
      body:
        "Je partage mon temps entre le firmware sur dispositifs médicaux régulés et le web fullstack pour des équipes produit. Même rigueur d'ingénierie, deux stacks très différentes. Basé à Paris, à l'aise en environnement client FR et EN.",
      pill: "Disponible pour nouveaux projets · T2 2025",
      location: "Paris, France",
    },
    skills: {
      eyebrow: "CE QUE JE CONSTRUIS",
      title: "Deux stacks, les deux en production.",
      embedded: {
        title: "Embarqué · MedTech",
        items: [
          { k: "Langages", v: "C, C++, Rust moderne (en cours)" },
          { k: "MCU / SoC", v: "ESP32-S3, STM32, nRF52" },
          { k: "RTOS", v: "FreeRTOS, Zephyr (notions)" },
          { k: "Connectivité", v: "BLE, Wi-Fi, AWS IoT (MQTT, Greengrass)" },
          { k: "Processus", v: "IEC 62304 Classe B, ISO 14971, dossier de conception" },
          { k: "Labo", v: "Analyseur logique, oscilloscope, support essais in-vivo" },
        ],
      },
      web: {
        title: "Web · Fullstack",
        items: [
          { k: "Frontend", v: "React, Vite, TypeScript, TanStack" },
          { k: "Backend", v: "Node.js, Firebase, Cloud Functions" },
          { k: "Data / IA", v: "Gemini, OpenAI, index vectoriels, pipelines RAG" },
          { k: "Mobile", v: "Flutter (app livrée en production)" },
          { k: "Infra", v: "Firebase Hosting, Cloudflare, GitHub Actions" },
          { k: "Méthode", v: "Solo vers équipe, pair programming, code review" },
        ],
      },
    },
    work: {
      eyebrow: "PROJETS SÉLECTIONNÉS",
      title: "Cinq projets, cinq contextes.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Vous recrutez ou vous livrez. Écrivez-moi.",
      body:
        "Je lis chaque message. Je réponds sous deux jours ouvrés. Pour les NDA / conditions de mission, joignez-les et je reviens avec un lien de calendrier.",
      mail: "tom@huyghe.dev",
      cta: "M'écrire",
    },
    footer: "© 2025 Tom Huyghe · Paris",
  },
};

window.PROJECTS = [
  {
    id: "pulsar",
    name: "PULSAR",
    track: "EMBEDDED",
    year: "2024",
    status: "shipped",
    texture: "../../assets/texture-cyan.jpg",
    summary: {
      en: "Cardiac wearable. ESP32-S3 firmware, AWS IoT pipeline, validated on 50+ patients in clinical trial.",
      fr: "Wearable cardiaque. Firmware ESP32-S3, pipeline AWS IoT, validé sur 50+ patients en essai clinique.",
    },
    tags: ["ESP32-S3", "FreeRTOS", "IEC 62304", "AWS IoT", "C / C++"],
  },
  {
    id: "babycam",
    name: "BABYCAM",
    track: "EMBEDDED",
    year: "2023",
    status: "shipped",
    texture: "../../assets/texture-amber.jpg",
    summary: {
      en: "Embedded vision for newborn monitoring. TensorFlow Lite on-device, Flutter companion app.",
      fr: "Vision embarquée pour le monitoring néonatal. TensorFlow Lite on-device, app compagnon Flutter.",
    },
    tags: ["TFLite", "Computer Vision", "Flutter", "C++"],
  },
  {
    id: "brooklyn",
    name: "Brooklyn Intelligence",
    track: "WEB",
    year: "2024",
    status: "shipped",
    texture: "../../assets/texture-violet.jpg",
    summary: {
      en: "AI-augmented research tool. React / Vite frontend, Node + Firebase backend, Gemini-powered ingest pipeline.",
      fr: "Outil de recherche augmenté par IA. Front React / Vite, back Node + Firebase, pipeline d'ingestion Gemini.",
    },
    tags: ["React", "Vite", "Node.js", "Firebase", "Gemini"],
  },
  {
    id: "biquettes",
    name: "Les Biquettes",
    track: "WEB",
    year: "2023",
    status: "shipped",
    texture: "../../assets/texture-teal.jpg",
    summary: {
      en: "Colocation logistics webapp for a Paris house-share. React / TypeScript on Firebase. Quietly running for 18 months.",
      fr: "Webapp de logistique pour une coloc parisienne. React / TypeScript sur Firebase. Tourne discrètement depuis 18 mois.",
    },
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    id: "sleepguard",
    name: "TheSleepGuard",
    track: "EMBEDDED",
    year: "2022",
    status: "research",
    texture: "../../assets/texture-amber.jpg",
    summary: {
      en: "HRV-based sleep monitoring research with UDESC Brazil. C++ on STM32, signal-processing pipeline.",
      fr: "Recherche sur le monitoring du sommeil par HRV avec UDESC Brésil. C++ sur STM32, pipeline traitement du signal.",
    },
    tags: ["C++", "STM32", "DSP", "Research"],
  },
];
