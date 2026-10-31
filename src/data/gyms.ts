// London climbing gyms.
//
// Every fact here should be traceable to one of the gym's `sources`.
// If you can't source it, leave it out — a short true entry beats a long invented one.
// Last checked: 2026-10-31. Coordinates come from postcodes.io / OpenStreetMap.

export type GymType = 'bouldering' | 'lead' | 'both'

export interface Photo {
  /** Path under /public */
  src: string
  /** Who took or owns it, e.g. "Mggo314" or "VauxWall West" */
  credit: string
  /** Where the photo came from (Commons file page, or the gym's site) */
  creditUrl: string
  /** Set for freely licensed photos, e.g. "CC BY 4.0". Omitted = the gym's own photo. */
  license?: string
}

export interface Gym {
  slug: string
  name: string
  area: string
  address: string
  type: GymType
  website: string
  about: string
  facilities: string[]
  lat: number
  lng: number
  sources: string[]
  /** Only add a photo you're sure shows this exact gym. No photo is better than the wrong one. */
  photo?: Photo
}

export const gyms: Gym[] = [
  {
    slug: 'the-castle',
    name: 'The Castle Climbing Centre',
    area: 'Stoke Newington',
    address: 'Green Lanes, London N4 2HA',
    type: 'both',
    website: 'https://www.castle-climbing.co.uk',
    about:
      'A converted Victorian water pumping station, built in the 1850s and opened as a climbing centre in 1995. Around 450 top-rope and lead routes alongside a large bouldering area. Lead climbers bring their own rope.',
    facilities: ['Lead climbing', 'Top-rope', 'Bouldering'],
    lat: 51.564731,
    lng: -0.092217,
    sources: [
      'https://thenudge.com/castle-climbing-centre/',
      'https://londonist.com/london/sport/where-to-go-climbing-the-best-centres-in-london',
    ],
    photo: {
      src: '/gyms/the-castle.jpg',
      credit: 'Mggo314',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Castle_Climbing_Centre_Wells_1_Lead_Area.jpg',
      license: 'CC BY 4.0',
    },
  },
  {
    slug: 'westway',
    name: 'Westway Climbing',
    area: 'North Kensington',
    address: 'Westway Sports & Fitness Centre, 1 Crowthorne Road, London W10 6RP',
    type: 'both',
    website: 'https://www.everyoneactive.com/centre/westway-sports-fitness-centre/',
    about:
      'Inside the Westway Sports & Fitness Centre under the A40. Over 350 routes on around 110 roped lines up to 13.5m, plus over 450m² of bouldering.',
    facilities: ['Lead climbing', 'Top-rope', 'Bouldering', 'Taster sessions', 'Beginner courses'],
    lat: 51.516381,
    lng: -0.219993,
    sources: [
      'https://www.timeout.com/london/sport-and-fitness/westway-climbing-centre',
      'https://www.visitlondon.com/things-to-do/place/51148959-westway-climbing-wall',
    ],
    photo: {
      src: '/gyms/westway.jpg',
      credit: 'David Hawgood',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Climbing_wall_by_Westway_-_geograph.org.uk_-_788928.jpg',
      license: 'CC BY-SA 2.0',
    },
  },
  {
    slug: 'mile-end',
    name: 'Mile End Climbing Wall',
    area: 'Mile End',
    address: 'Haverfield Road, London E3 5BE',
    type: 'both',
    website: 'https://www.mileendwall.org.uk',
    about:
      "Set in an old pipe engineering works, with around 16,000 sq ft of climbing. Known for the 'Monkey House', an overhanging bouldering room, plus top-rope and lead walls up to 10m.",
    facilities: ['Lead climbing', 'Top-rope', 'Auto-belays', 'Bouldering', 'Monkey House overhang room'],
    lat: 51.527705,
    lng: -0.039672,
    sources: [
      'https://thenudge.com/mile-end-climbing-wall/',
      'https://www.abcwalls.co.uk/wall/mile-end-climbing-wall/',
    ],
    photo: {
      src: '/gyms/mile-end.jpg',
      credit: 'ceridwen',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Mile_End_Climbing_Wall_-_geograph.org.uk_-_1533282.jpg',
      license: 'CC BY-SA 2.0',
    },
  },
  {
    slug: 'the-reach',
    name: 'The Reach',
    area: 'Woolwich',
    address: 'Unit 6, Harrington Way, London SE18 5NR',
    type: 'both',
    website: 'https://www.thereach.org.uk',
    about:
      "South-east London's big roped wall, near the Thames Barrier. Its 16m overhanging lead wall opened in 2015, funded by the London Marathon Charitable Trust.",
    facilities: ['Lead climbing', '16m overhanging lead wall', 'Top-rope', 'Bouldering'],
    lat: 51.494961,
    lng: 0.043085,
    sources: [
      'https://www.timeout.com/london/sport-and-fitness/the-reach-climbing-wall',
      'https://services.thebmc.co.uk/new-16m-overhanging-lead-wall-at-the-reach-london',
    ],
    photo: {
      src: '/gyms/the-reach.jpg',
      credit: 'The Reach',
      creditUrl: 'https://www.thereach.org.uk',
    },
  },
  {
    slug: 'the-font-wandsworth',
    name: 'The Font Wandsworth',
    area: 'Wandsworth',
    address: 'Southside Shopping Centre, 52–58 Garratt Lane, London SW18 4TF',
    type: 'both',
    website: 'https://www.the-font.co.uk/wandsworth',
    about:
      "Formerly Parthian Climbing, which opened here in 2023 and has since joined The Font. 300+ boulder problems including a replica of 'The Titan', the Paris 2024 Olympic boulder wall, plus over 120 top-rope and lead routes and auto-belays up to 12m.",
    facilities: ['Lead climbing', 'Top-rope', 'Auto-belays', 'Bouldering', 'Olympic boulder wall replica'],
    lat: 51.454569,
    lng: -0.193136,
    sources: [
      'https://www.the-font.co.uk/wandsworth',
      'https://parthianclimbing.com/wandsworth-2/',
      'https://epclimbing.com/en/news/parthian-climbing-summits-southside-olympic',
    ],
  },
  {
    slug: 'the-font-borough',
    name: 'The Font Borough',
    area: 'Bankside',
    address: 'Triptych Place, 185 Park Street, London SE1 9BL',
    type: 'bouldering',
    website: 'https://www.the-font.co.uk/borough',
    about: "The Font's central London bouldering gym, a short walk from London Bridge and Tate Modern.",
    facilities: ['Bouldering'],
    lat: 51.5071808,
    lng: -0.0971764,
    sources: ['https://www.timeout.com/london/sport-and-fitness/the-font-borough', 'https://www.the-font.co.uk/borough'],
  },
  {
    slug: 'vauxwall-west',
    name: 'VauxWall West',
    area: 'Vauxhall',
    address: 'Arch 47, South Lambeth Road, London SW8 1SR',
    type: 'bouldering',
    website: 'https://londonclimbingcentres.co.uk/centre/vauxwest/',
    about: 'Bouldering in the railway arches a minute from Vauxhall station. Run by London Climbing Centres.',
    facilities: ['Bouldering'],
    lat: 51.485064,
    lng: -0.122824,
    sources: [
      'https://www.timeout.com/london/sport-and-fitness/vauxwall-west-climbing-centre',
      'https://londonclimbingcentres.co.uk/centre/vauxwest/',
    ],
    photo: {
      src: '/gyms/vauxwall-west.jpg',
      credit: 'London Climbing Centres',
      creditUrl: 'https://londonclimbingcentres.co.uk/centre/vauxwest/',
    },
  },
  {
    slug: 'vauxwall-east',
    name: 'VauxWall East',
    area: 'Kennington',
    address: '1 Cabanel Place, London SE11 6BD',
    type: 'bouldering',
    website: 'https://londonclimbingcentres.co.uk/centre/vauxeast/',
    about:
      "VauxWall West's sister gym, opened in 2018 in a Grade II-listed 1960s school assembly hall. Multiple walls plus circuit boards and a MoonBoard.",
    facilities: ['Bouldering', 'MoonBoard', 'Circuit boards'],
    lat: 51.492013,
    lng: -0.114789,
    sources: ['https://cademy.co.uk/vauxwall-climbing-vauxeast', 'https://londonclimbingcentres.co.uk/centre/vauxeast/'],
    photo: {
      src: '/gyms/vauxwall-east.jpg',
      credit: 'London Climbing Centres',
      creditUrl: 'https://londonclimbingcentres.co.uk/centre/vauxeast/',
    },
  },
  {
    slug: 'climbing-district-building-one',
    name: 'Climbing District Building One',
    area: 'Bermondsey',
    address: 'Drummond Road, London SE16 4DG',
    type: 'bouldering',
    website: 'https://climbingdistrict.uk/climbing-gym/building-one/',
    about:
      'Formerly The Arch Climbing Wall, in the Biscuit Factory complex. The Arch joined the Climbing District group in 2025.',
    facilities: ['Bouldering'],
    lat: 51.493965,
    lng: -0.061909,
    sources: ['https://climbingdistrict.uk/climbing-gym/building-one/', 'https://thenudge.com/the-arch-climbing-wall/'],
    photo: {
      src: '/gyms/climbing-district-building-one.jpg',
      credit: 'Climbing District',
      creditUrl: 'https://climbingdistrict.uk/climbing-gym/building-one/',
    },
  },
  {
    slug: 'climbing-district-london-fields',
    name: 'Climbing District London Fields',
    area: 'London Fields',
    address: 'Unit 30, Canal Place, Andrews Road, London E8 4FX',
    type: 'bouldering',
    website: 'https://climbingdistrict.uk/climbing-gym/london-fields/',
    about:
      'Canal-side bouldering gym, formerly Stronghold London Fields. Has a Kilter Board, a gym area and an upstairs café overlooking the canal.',
    facilities: ['Bouldering', 'Kilter Board', 'Gym area', 'Café'],
    lat: 51.534501,
    lng: -0.0601,
    sources: [
      'https://climbingdistrict.uk/climbing-gym/london-fields/',
      'https://www.timeout.com/london/sport-and-fitness/stronghold-climbing-centre',
    ],
    photo: {
      src: '/gyms/climbing-district-london-fields.jpg',
      credit: 'Climbing District',
      creditUrl: 'https://climbingdistrict.uk/climbing-gym/london-fields/',
    },
  },
  {
    slug: 'climbing-district-tottenham-hale',
    name: 'Climbing District Tottenham Hale',
    area: 'Tottenham Hale',
    address: 'First Floor, The Archives, Unit 10 High Cross Centre, Fountayne Road, London N15 4BE',
    type: 'bouldering',
    website: 'https://climbingdistrict.uk/climbing-gym/tottenham-hale/',
    about:
      'The original Stronghold gym, open since 2017. Over 200 problems, a MoonBoard and a large circuit board set by Steve McClure.',
    facilities: ['Bouldering', 'MoonBoard', 'Circuit board', 'Gym area'],
    lat: 51.584908,
    lng: -0.061348,
    sources: [
      'https://climbingdistrict.uk/climbing-gym/tottenham-hale/',
      'https://www.designmynight.com/london/blog/rock-climbing-london',
    ],
    photo: {
      src: '/gyms/climbing-district-tottenham-hale.jpg',
      credit: 'Climbing District',
      creditUrl: 'https://climbingdistrict.uk/climbing-gym/tottenham-hale/',
    },
  },
  {
    slug: 'yonder',
    name: 'Yonder',
    area: 'Walthamstow',
    address: '4–6 Hookers Road, London E17 6DP',
    type: 'bouldering',
    website: 'https://www.thisisyonder.com',
    about:
      'Started as a Kickstarter project in 2016. Bouldering alongside yoga, art workshops and live music, with challenges from total beginner to expert.',
    facilities: ['Bouldering', 'Yoga'],
    lat: 51.589621,
    lng: -0.040849,
    sources: ['https://www.thisisyonder.com/aboutus', 'https://www.thisisyonder.com/how-to-find-us'],
    photo: {
      src: '/gyms/yonder.jpg',
      credit: 'Yonder',
      creditUrl: 'https://www.thisisyonder.com',
    },
  },
  {
    slug: 'substation-brixton',
    name: 'Substation Brixton',
    area: 'Brixton',
    address: 'Unit 13, Ellerslie Square Industrial Estate, Brixton Hill, London SW2 5DZ',
    type: 'bouldering',
    website: 'https://brixton.substation.co.uk',
    about:
      'Large bouldering centre between Brixton and Clapham, with around 300 problems, a gym, a fitness studio and a kids’ climbing space called The Wild.',
    facilities: ['Bouldering', 'Gym', 'Fitness studio', "Kids' area"],
    lat: 51.457847,
    lng: -0.127554,
    sources: [
      'https://love.lambeth.gov.uk/living-wage-substation-climbing-centre',
      'https://www.ukclimbing.com/listings/listing.php?id=20985',
    ],
    photo: {
      src: '/gyms/substation-brixton.jpg',
      credit: 'Substation',
      creditUrl: 'https://brixton.substation.co.uk',
    },
  },
]
