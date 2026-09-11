export interface NavItem {
  label: string;
  href: string;
}

export interface PurposeCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ImpactBlock {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const SITE_DATA = {
  institution: {
    legalName: "FUNDACION PABLO TOBON URIBE",
    displayName: "Fundación Pablo Tobón Uribe",
    nit: "890982202-3",
    slogan: "Construyendo oportunidades, transformando vidas",
    domain: "fundacionpablotobon.online",
    url: "https://fundacionpablotobon.online",
    address: {
      street: "Carrera 40 51 24",
      city: "Medellín",
      region: "Antioquia",
      country: "Colombia",
      full: "Carrera 40 51 24, Medellín, Antioquia, Colombia"
    },
    contact: {
      phone: "+57 3104379734",
      phoneClean: "+573104379734",
      email: "soporte@fundacionpablotobon.online",
      whatsappUrl: "https://wa.me/573104379734?text=Hola,%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20la%20Fundaci%C3%B3n%20Pablo%20Tob%C3%B3n%20Uribe"
    }
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "La Fundación", href: "#sobre-nosotros" },
    { label: "Nuestro propósito", href: "#proposito" },
    { label: "Impacto", href: "#impacto" },
    { label: "Contacto", href: "#contacto" }
  ] as NavItem[],
  hero: {
    title: "Construyendo oportunidades, transformando vidas",
    subtitle: "Trabajamos activamente con un compromiso orientado al bienestar social, la generación de oportunidades y el desarrollo integral de las personas y sus comunidades.",
    primaryCta: "Conoce la Fundación",
    secondaryCta: "Contáctanos"
  },
  about: {
    title: "Sobre la Fundación",
    badge: "Identidad Institucional",
    paragraph1: "La Fundación Pablo Tobón Uribe trabaja con un enfoque orientado al bienestar, las oportunidades y el desarrollo de las personas y las comunidades.",
    paragraph2: "Como entidad sin ánimo de lucro registrada en la Cámara de Comercio de Medellín para Antioquia, nuestra labor responde a principios de transparencia, excelencia social y compromiso ético continuo en beneficio de nuestro entorno.",
    paragraph3: "Fomentamos iniciativas y articulaciones estratégicas diseñadas para potenciar el talento, la solidaridad y la inclusión social en cada uno de nuestros ejes de acción."
  },
  purpose: {
    title: "Nuestro propósito",
    subtitle: "Principios rectores que guían nuestro compromiso diario con la sociedad.",
    cards: [
      {
        id: "oportunidades",
        title: "Oportunidades",
        description: "Promovemos entornos e iniciativas que permitan el crecimiento personal, académico y socioeconómico de los ciudadanos.",
        iconName: "Sparkles"
      },
      {
        id: "comunidad",
        title: "Comunidad",
        description: "Fortalecemos los lazos sociales y el trabajo colaborativo en los territorios para consolidar redes de apoyo mutuo.",
        iconName: "Users"
      },
      {
        id: "bienestar",
        title: "Bienestar",
        description: "Impulsamos acciones enfocadas en mejorar la calidad de vida, la salud integral y la dignidad de las familias.",
        iconName: "Heart"
      },
      {
        id: "transformacion",
        title: "Transformación social",
        description: "Generamos impacto positivo sostenible mediante proyectos éticos, responsables y de alto valor humano.",
        iconName: "TrendingUp"
      }
    ] as PurposeCard[]
  },
  impact: {
    title: "Nuestro impacto",
    subtitle: "Construimos valor social sostenible enfocado en ejes fundamentales de desarrollo humano.",
    blocks: [
      {
        tag: "Desarrollo humano",
        title: "Personas",
        subtitle: "Capacidades e inclusión",
        description: "Acompañamiento enfocado en potenciar el desarrollo integral y las habilidades individuales."
      },
      {
        tag: "Tejido social",
        title: "Comunidades",
        subtitle: "Cohesión y articulación",
        description: "Creación de valor compartido y fortalecimiento de espacios colectivos para el progreso social."
      },
      {
        tag: "Equidad e inclusión",
        title: "Oportunidades",
        subtitle: "Caminos hacia el crecimiento",
        description: "Generación de alternativas reales para reducir brechas y fomentar la participación activa."
      },
      {
        tag: "Compromiso duradero",
        title: "Transformación",
        subtitle: "Sostenibilidad y ética",
        description: "Estrategias con vocación social a largo plazo que promueven cambios positivos en el entorno."
      }
    ] as ImpactBlock[]
  },
  ctaSection: {
    title: "Construyendo oportunidades, transformando vidas",
    description: "Únete a nuestro propósito institucional de generar un impacto positivo y duradero en la sociedad.",
    buttonText: "Conoce más"
  },
  contact: {
    title: "Estamos para escucharte",
    subtitle: "Ponte en contacto con nuestro equipo institucional para consultas, colaboraciones e información general.",
    form: {
      namePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Escribe tu mensaje...",
      submitButton: "Enviar mensaje",
      successMessage: "Gracias por comunicarte con la Fundación Pablo Tobón Uribe. Hemos recibido tu mensaje y te responderemos a la brevedad."
    }
  }
};
