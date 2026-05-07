export type ProjectCategory = 'commercial' | 'residential' | 'industrial' | 'mixed-use'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  city: string
  year: number
  scope: string
  summary: string
  image: string
  thumb?: string
  size?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'yorkville-residence',
    title: 'Yorkville Residence',
    category: 'residential',
    city: 'Toronto',
    year: 2025,
    scope: 'ACM facade · custom black anodized · standing-seam accents',
    summary:
      'Custom 4,800 sq ft residence in Yorkville. Black anodized ACM rainscreen with concealed fastening, standing-seam zinc accents, and architect-stamped detailing.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'mississauga-logistics',
    title: 'Mississauga Logistics Hub',
    category: 'industrial',
    city: 'Mississauga',
    year: 2024,
    scope: 'Industrial metal cladding · 38,000 sq ft envelope',
    summary:
      'Insulated metal panel envelope across a tier-1 logistics facility. Coordinated with structural steel + roofing to compress schedule.',
    image:
      'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1800&q=80',
    size: '38,000 sq ft',
  },
  {
    slug: 'king-west-mixed-use',
    title: 'King West Mixed-Use',
    category: 'mixed-use',
    city: 'Toronto',
    year: 2024,
    scope: 'ACM rainscreen · dual-tone champagne / graphite',
    summary:
      'Six-storey mixed-use building with retail at grade and residential above. Dual-tone facade with continuous insulation behind the rainscreen.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'vaughan-family-estate',
    title: 'Vaughan Family Estate',
    category: 'residential',
    city: 'Vaughan',
    year: 2025,
    scope: 'Mixed material facade · ACM + standing seam',
    summary:
      'Mixed-material exterior combining ACM with vertical standing-seam aluminum and stone base — coordinated with the homeowner’s architect.',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'markham-corporate-hq',
    title: 'Markham Corporate HQ',
    category: 'commercial',
    city: 'Markham',
    year: 2023,
    scope: 'ACM curtain-wall surround · brushed silver',
    summary:
      '12,400 sq ft of brushed-silver ACM around an aluminum curtain-wall. Tight tolerances on the column-line reveals.',
    image:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'burlington-medical-centre',
    title: 'Burlington Medical Centre',
    category: 'commercial',
    city: 'Burlington',
    year: 2024,
    scope: 'ACM + perforated metal screen',
    summary:
      'ACM cladding combined with custom-perforated metal solar screens for the south elevation. Engineered for thermal comfort.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'oakville-luxury-build',
    title: 'Oakville Luxury Build',
    category: 'residential',
    city: 'Oakville',
    year: 2023,
    scope: 'Architect-grade ACM · charcoal matte',
    summary:
      'Custom 6,200 sq ft luxury residence on the lake. Charcoal matte ACM with hidden-fastener system and bespoke window surrounds.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'brampton-flex-warehouse',
    title: 'Brampton Flex Warehouse',
    category: 'industrial',
    city: 'Brampton',
    year: 2024,
    scope: 'Insulated metal panel · 22,000 sq ft',
    summary:
      'Flex-industrial envelope retrofit. Replaced an aging EIFS skin with engineered insulated metal panels — shaved 18% off the building’s heating load.',
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1800&q=80',
  },
  {
    slug: 'forest-hill-extension',
    title: 'Forest Hill Extension',
    category: 'residential',
    city: 'Toronto',
    year: 2025,
    scope: 'ACM rear addition · matte white',
    summary:
      'Rear three-storey addition to a heritage Forest Hill home — clean white ACM volume contrasting brick original.',
    image:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1800&q=80',
  },
]

export const PROJECT_CATEGORIES: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'mixed-use', label: 'Mixed-use' },
]
