/** @format */

export const navigation = [
	{ href: "/", label: "Inicio" },
	{ href: "/servicios", label: "Servicios" },
	{ href: "/trabajos", label: "Trabajos" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/contacto", label: "Contacto" },
];

export const company = {
	name: "Pavimentos Urbanos",
	shortName: "Pavimentos Urbanos",
	legalName: "Pavimentos Urbanos SpA",
	tagline: "Expertos en desarrollo constructivo",
	siteUrl: "https://pavimentosurbanos.cl",
	defaultOgImage: "/og-default.svg",
	recipientEmail: "jramirez2432@gmail.com",
	description:
		"Constructora con 30 años de trayectoria orientada a urbanización, pavimentación y obras civiles con foco en ejecución confiable, coordinación técnica y respuesta en terreno.",
	email: "contacto@pavimentosurbanos.com",
	phone: "+56 9 9999 1331",
	location: "Casa matriz: Santiago, Chile",
	schedule: "Atención comercial de lunes a viernes, 08:30 a 18:00.",
	coverage:
		"Nos ubicamos en Santiago y realizamos proyectos urbanos a lo largo de todo el territorio nacional.",
	seoDescription:
		"Pavimentos Urbanos es una constructora con 30 años de experiencia en urbanización, pavimentación, movimientos de tierra, montajes eléctricos y obras civiles en Chile.",
};

export const contactChannels = [
	{
		title: "Correo directo",
		value: company.recipientEmail,
		href: `mailto:${company.recipientEmail}?subject=Consulta%20desde%20web%20Pavimentos%20Urbanos`,
		icon: "email",
	},
	{
		title: "WhatsApp comercial",
		value: company.phone,
		href: "https://wa.me/56900000000",
		icon: "brand-whatsapp",
	},
	{ title: "Llamada", value: company.phone, href: "tel:+56900000000", icon: "phone" },
	{
		title: "LinkedIn corporativo",
		value: "Perfil editable",
		href: "https://www.linkedin.com",
		icon: "linkedin",
	},
];

export const typographyOptions = [
	{
		name: "Opcion recomendada",
		headings: "Bebas Neue",
		body: "Manrope",
		reason: "Alto contraste entre presencia industrial y lectura limpia en bloques corporativos.",
	},
	{
		name: "Alternativa mas tecnica",
		headings: "Oswald",
		body: "Inter",
		reason: "Se siente mas ingenieril y contenida, util si quieres una marca menos expresiva.",
	},
];

export const hero = {
	eyebrow: "Presentación corporativa 2026",
	title: "Infraestructura urbana ejecutada con criterio técnico y presencia en terreno.",
	description:
		"Desarrollamos soluciones constructivas para urbanización, pavimentos y obras complementarias, combinando experiencia operacional, coordinación de especialidades y un estándar visual y técnico a la altura de cada proyecto.",
	primaryCta: { href: "/contacto", label: "Solicitar contacto" },
	secondaryCta: { href: "/trabajos", label: "Ver trabajos" },
};

export const heroSlides = [
	{
		id: "obra-01",
		image: "/hero/obra-01.svg",
		kicker: "Urbanización",
		title: "Frentes de obra pensados para mostrar escala, ejecución y control.",
		description:
			"Reemplaza esta imagen por una fotografía real manteniendo el mismo archivo o la misma proporción visual.",
	},
	{
		id: "obra-02",
		image: "/hero/obra-02.svg",
		kicker: "Pavimentación",
		title: "Una cabecera editable para exhibir maquinaria, faena o terminaciones.",
		description: "El carrusel permite ir sumando nuevas vistas sin rediseñar el home completo.",
	},
	{
		id: "obra-03",
		image: "/hero/obra-03.svg",
		kicker: "Desarrollo constructivo",
		title: "Narrativa visual premium, más directa y más alineada con construcción.",
		description:
			"Puedes cambiar estas láminas por fotos propias y dejar el resto del hero intacto.",
	},
];

export const metrics = [
	{ value: "30+", label: "años construyendo ciudad" },
	{ value: "5+", label: "líneas principales de servicio" },
	{ value: "100%", label: "foco en ejecución urbana" },
	{ value: "360°", label: "mirada técnica y operacional" },
];

export const services = [
	{
		slug: "desarrollo-de-ingenieria",
		name: "Desarrollo de ingeniería",
		shortDescription:
			"Apoyo técnico para definir soluciones constructivas, coordinación y factibilidad de ejecución.",
		description:
			"Abordamos el desarrollo de ingeniería con una mirada práctica: revisamos condiciones de proyecto, anticipamos interferencias y alineamos criterios de ejecución para que obra y diseño avancen con consistencia.",
		deliverables: [
			"Coordinación de especialidades y criterios de terreno",
			"Apoyo para cubicaciones, secuencia y constructibilidad",
			"Documentación base para toma de decisiones",
		],
	},
	{
		slug: "areas-de-urbanizacion",
		name: "Áreas de urbanización",
		shortDescription:
			"Intervenciones para habilitar espacios urbanos funcionales, durables y ordenados.",
		description:
			"Ejecutamos obras de urbanización que integran circulaciones, áreas públicas y soluciones complementarias, cuidando la calidad del entorno y la coordinación con las condiciones existentes del sitio.",
		deliverables: [
			"Habilitación de áreas exteriores y espacios de uso común",
			"Obras civiles de soporte para proyectos urbanos",
			"Coordinación integral con etapas y frentes de trabajo",
		],
	},
	{
		slug: "montajes-electricos",
		name: "Montajes eléctricos",
		shortDescription:
			"Soporte constructivo para instalaciones eléctricas vinculadas a proyectos urbanos.",
		description:
			"Desarrollamos montajes eléctricos asociados a infraestructura y habilitación urbana, con foco en orden de ejecución, compatibilidad con otras partidas y seguridad operativa.",
		deliverables: [
			"Canalizaciones y soluciones de soporte",
			"Coordinación con obras civiles y especialidades",
			"Preparación de frentes para puesta en marcha",
		],
	},
	{
		slug: "movimientos-de-tierra",
		name: "Movimientos de tierra",
		shortDescription:
			"Preparación de terreno, nivelación y habilitación para iniciar obras con base sólida.",
		description:
			"Planificamos y ejecutamos movimientos de tierra considerando secuencia, estabilidad, accesos y compatibilidad con el resto del proyecto para asegurar una plataforma eficiente de trabajo.",
		deliverables: [
			"Preparación y conformación de terreno",
			"Nivelaciones y perfiles para obra",
			"Apoyo a etapas iniciales y fundaciones",
		],
	},
	{
		slug: "obras-y-construccion",
		name: "Obras y construcción",
		shortDescription:
			"Ejecución de obras civiles y partidas constructivas con enfoque operativo y control en terreno.",
		description:
			"Tomamos la construcción desde la coordinación diaria hasta la entrega visual del frente ejecutado, manteniendo foco en avance, terminación y consistencia constructiva.",
		deliverables: [
			"Obras civiles para entornos urbanos",
			"Pavimentación y partidas complementarias",
			"Gestión de ejecución y control de avance",
		],
	},
];

export const projects = [
	{
		slug: "habilitacion-acceso-urbano",
		name: "Habilitación de acceso urbano",
		category: "Urbanización y obras civiles",
		location: "Santiago",
		year: "2026",
		scope: "Pavimentos, bordes y ordenamiento de circulaciones.",
	},
	{
		slug: "plataforma-operativa-industrial",
		name: "Plataforma operativa industrial",
		category: "Movimiento de tierra",
		location: "Región Metropolitana",
		year: "2026",
		scope: "Preparación de terreno y secuencia para ejecución posterior.",
	},
	{
		slug: "mejoramiento-espacio-comun",
		name: "Mejoramiento de espacio común",
		category: "Urbanización",
		location: "Zona urbana",
		year: "2025",
		scope: "Habilitación de superficie, terminaciones y coordinación de especialidades.",
	},
	{
		slug: "infraestructura-de-servicio",
		name: "Infraestructura de servicio",
		category: "Montajes eléctricos y obra complementaria",
		location: "Chile",
		year: "2025",
		scope: "Soporte constructivo y ejecución coordinada en terreno.",
	},
];

export const differentiators = [
	"Experiencia acumulada de tres décadas en construcción y pavimentación urbana.",
	"Enfoque técnico-práctico para convertir diseño en obra ejecutable.",
	"Respuesta directa en terreno, con seguimiento y orden de faena.",
	"Lenguaje corporativo claro para presentar capacidades ante clientes y licitaciones.",
];

export const timeline = [
	{
		year: "1990s",
		title: "Inicio de trayectoria",
		description:
			"La empresa consolida su experiencia en obras civiles y pavimentación, formando una base técnica y operativa de largo plazo.",
	},
	{
		year: "2000s",
		title: "Expansión de capacidades",
		description:
			"Se integran nuevas líneas de ejecución para responder a proyectos urbanos con mayor coordinación y alcance.",
	},
	{
		year: "2010s",
		title: "Consolidación en urbanización",
		description:
			"El foco se fortalece en frentes urbanos, habilitación de espacios y soluciones constructivas integrales.",
	},
	{
		year: "Hoy",
		title: "Posicionamiento corporativo",
		description:
			"La marca se presenta con una identidad más sólida y una narrativa comercial orientada a exhibir sus servicios y trabajos.",
	},
];

export const contactHighlights = [
	"Atención a solicitudes comerciales y presentación de servicios.",
	"Espacio preparado para agregar teléfono, formulario o WhatsApp definitivo.",
	"Base editable para sumar fichas técnicas, catálogos y proyectos reales.",
];
