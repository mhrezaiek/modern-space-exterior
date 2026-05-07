/**
 * Single source of truth for business identity, NAP, services, and stats.
 * Update values here — they propagate to schema.org, footer, contact, etc.
 */

export const business = {
  legalName: 'Modern Space Exterior Inc.',
  brandName: 'Modern Space Exterior',
  shortName: 'Modern Space',
  founded: 2015,

  url: 'https://www.modernspaceexterior.com',
  defaultLocale: 'en-CA',

  phone: '+1-289-552-5404',
  phoneDisplay: '(289) 552-5404',
  email: 'info@modernspaceexterior.com',

  // Service area — update to specific HQ when public
  address: {
    streetAddress: '',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: '',
    addressCountry: 'CA',
  },

  geo: {
    // Approximate GTA centroid — used for LocalBusiness Map Pack
    latitude: 43.6532,
    longitude: -79.3832,
  },

  serviceArea: [
    'Toronto',
    'Mississauga',
    'Vaughan',
    'Markham',
    'Brampton',
    'Richmond Hill',
    'Oakville',
    'Burlington',
    'Pickering',
    'Ajax',
    'Whitby',
    'Oshawa',
    'North York',
    'Etobicoke',
    'Scarborough',
  ],

  hours: {
    monday: '08:00-18:00',
    tuesday: '08:00-18:00',
    wednesday: '08:00-18:00',
    thursday: '08:00-18:00',
    friday: '08:00-18:00',
    saturday: '09:00-15:00',
    sunday: 'Closed',
  },

  social: {
    instagram: 'https://www.instagram.com/modernspaceexterior',
    facebook: 'https://www.facebook.com/modernspaceexterior',
    linkedin: 'https://www.linkedin.com/company/modern-space-exterior',
    google: 'https://g.page/modern-space-exterior',
  },

  stats: {
    projects: 300,
    customers: 500,
    yearsExperience: new Date().getFullYear() - 2015,
    teamSize: 20,
  },

  team: [
    {
      name: 'Jay',
      role: 'Chief Executive Officer',
      bio:
        'Jay leads Modern Space Exterior with a decade of hands-on experience delivering ACM cladding and facade systems across the GTA. His standard: every panel installed should look as precise the day it’s commissioned as it does ten winters later.',
    },
    {
      name: 'Ray',
      role: 'Technical Manager',
      bio:
        'Ray oversees engineering on every job — substructure detailing, thermal performance, water management. He’s the reason our facades are as quiet inside the wall as they are striking outside it.',
    },
    {
      name: 'Hamed',
      role: 'Technical Manager',
      bio:
        'Hamed runs site execution and quality control. From shop drawings to the last sealant joint, he ensures the build meets the drawings, the schedule, and the standard.',
    },
  ] as const,

  services: [
    {
      slug: 'acm-installation',
      name: 'ACM Panel Installation',
      shortName: 'ACM Installation',
      tagline: 'Aluminum Composite Material cladding, executed with precision.',
      description:
        'Engineered ACM cladding systems for commercial, residential and industrial buildings. Crisp reveals, true-flat panels, and weather-tight joinery built to last decades in Canadian climates.',
    },
    {
      slug: 'metal-cladding',
      name: 'Metal Cladding',
      shortName: 'Metal Cladding',
      tagline: 'Architectural metal envelopes that elevate the entire structure.',
      description:
        'Standing-seam, flat-lock and rainscreen metal cladding in aluminum, zinc, copper and steel. Tailored to architect intent, fabricated for tolerance, installed for longevity.',
    },
    {
      slug: 'exterior-facade-systems',
      name: 'Exterior Facade Systems',
      shortName: 'Facade Systems',
      tagline: 'Complete facade design-assist, fabrication and installation.',
      description:
        'Full-system facade delivery: substructure engineering, thermal breaks, vapor management, fabrication, and certified installation — coordinated as one accountable scope.',
    },
    {
      slug: 'commercial',
      name: 'Commercial Exterior Construction',
      shortName: 'Commercial',
      tagline: 'Office, retail and mixed-use envelopes built to spec.',
      description:
        'Schedule-driven commercial cladding programs with rigorous QA, BIM coordination, and crews experienced on tight urban GTA sites.',
    },
    {
      slug: 'residential',
      name: 'Residential Exterior Construction',
      shortName: 'Residential',
      tagline: 'Custom homes and luxury renovations with architect-grade detailing.',
      description:
        'Residential facade work where joinery, alignment, and finish quality are inspected at the millimeter — the way custom homes deserve.',
    },
    {
      slug: 'industrial',
      name: 'Industrial Exterior Projects',
      shortName: 'Industrial',
      tagline: 'High-volume industrial cladding with reliability and uptime.',
      description:
        'Warehouses, plants and logistics facilities — durable cladding systems engineered for thermal performance and long maintenance cycles.',
    },
  ] as const,
} as const

export type Service = (typeof business.services)[number]
export type TeamMember = (typeof business.team)[number]
