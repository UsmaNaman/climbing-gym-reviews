import Database from 'better-sqlite3'

const gyms = [
  {
    name: 'The Castle Climbing Centre',
    area: 'Stoke Newington',
    address: 'Green Lanes, London N4 2HA',
    type: 'both',
    website: 'https://www.castle-climbing.co.uk',
    history: "Built inside a Grade II*-listed Victorian pumping station designed by architect Robert William Billings between 1852 and 1856, The Castle was originally the engine house of the Metropolitan Water Board, constructed following the Metropolis Water Act 1852 after the 1849 cholera outbreak. After falling derelict by 1971, local residents campaigned to save it, and it was granted planning permission for conversion in 1994. The Castle Climbing Centre opened in 1995 and is now one of Europe's most celebrated climbing venues, blending extraordinary Victorian heritage with world-class facilities across five floors.",
    training_facilities: JSON.stringify(['Campus boards', 'Systems boards', 'Dedicated gym', 'Traverse walls', 'Abseil tower', 'Stretching areas', 'Private coaching', 'Beginner courses', 'Café and garden', 'Climbing shop']),
    lat: 51.5736, lng: -0.0931,
  },
  {
    name: 'The Arch Bermondsey',
    area: 'Bermondsey',
    address: 'Unit 6, 68 Southwark Bridge Rd, London SE1 0AS',
    type: 'bouldering',
    website: 'https://www.archclimbingwall.com',
    history: "The Arch Climbing Wall opened in Bermondsey as one of London's first dedicated bouldering spaces, carved out of the railway arches near Southwark Bridge Road. It quickly established itself as a cornerstone of the city's bouldering scene, prized for creative routesetting and a welcoming atmosphere that drew everyone from beginners to competition climbers.",
    training_facilities: JSON.stringify(['Campus boards', 'Circuit boards', 'Strength training zone', 'Mobility area', 'Climbing shop', 'Changing rooms']),
    lat: 51.5013, lng: -0.0974,
  },
  {
    name: 'The Arch Biscuit Factory',
    area: 'Bermondsey',
    address: '100 Drummond Rd, London SE16 4DG',
    type: 'bouldering',
    website: 'https://www.archclimbingwall.com',
    history: "Set in the historic Biscuit Factory complex in Bermondsey — a former Peek Freans biscuit manufacturing site — this 15,000 sq ft facility was reimagined and relaunched in summer 2018 in what was previously a Damien Hirst gallery space. Now operating as Building One under the Climbing District umbrella, it represents one of London's largest dedicated bouldering floors with an impressive competition-standard wall.",
    training_facilities: JSON.stringify(['Campus boards', 'Circuit boards', '55° steep training wall', '40m traverse wall', 'LED MoonBoard', 'Strength gym', 'Mobility zones', 'Endurance training area', 'Café', 'On-site climbing shop', 'Full changing facilities with showers']),
    lat: 51.4950, lng: -0.0647,
  },
  {
    name: 'Boulder World',
    area: 'Acton',
    address: '1 Warple Way, London W3 0RQ',
    type: 'bouldering',
    website: 'https://www.boulderworld.co.uk',
    history: "Boulder World is Acton's dedicated bouldering gym, occupying a purpose-built warehouse space within the Warple Way industrial estate in West London. Serving the climbing community across Acton, Chiswick, and Ealing, it offers a no-frills, accessible environment focused on quality problems and friendly coaching for all abilities.",
    training_facilities: JSON.stringify(['Training boards', 'Hangboards', 'Strength area', 'Stretching space', 'Café', 'Changing facilities']),
    lat: 51.5068, lng: -0.2687,
  },
  {
    name: 'Westway Climbing',
    area: 'Notting Hill',
    address: '1 Crowthorne Rd, London W10 6RP',
    type: 'both',
    website: 'https://www.westwaysportscentre.org.uk',
    history: "Part of the Westway Sports & Fitness Centre, run by the Westway Trust — a charity managing the land beneath the A40 elevated motorway in North Kensington. The climbing wall has served the local community since the 1990s, offering subsidised access alongside a full coaching programme. It is one of London's few inner-city climbing walls with significant outdoor facilities and boasts one of the largest award-winning climbing areas in the UK.",
    training_facilities: JSON.stringify(['Traverse wall', 'Campus boards', 'Finger boards', 'Two dedicated training rooms', 'Pull-up bars', 'Four auto-belay machines', 'Stretching mats', 'Coaching programmes for all levels', 'Changing facilities']),
    lat: 51.5178, lng: -0.2110,
  },
  {
    name: 'VauxWall East',
    area: 'Vauxhall',
    address: 'Arches 178-180, Loughborough Rd, London SW9 7NL',
    type: 'both',
    website: 'https://www.vauxwall.co.uk',
    history: "VauxWall East opened in 2018 as the sister venue to VauxWall West, operated by the Lakeland Climbing Centre — one of Britain's most respected climbing operators since 1993. Set in railway arches near Loughborough Junction, VauxEast expanded the brand's footprint in South London with a larger bouldering floor, a café, gym, and shop, bringing the same high-spec Lakeland ethos to a second London postcode.",
    training_facilities: JSON.stringify(['Bouldering circuits', 'Training boards', 'Dedicated gym', 'Strength zone', 'Café', 'Retail shop', 'Changing rooms with showers']),
    lat: 51.4735, lng: -0.1044,
  },
  {
    name: 'VauxWall West',
    area: 'Vauxhall',
    address: 'Arches 67-68, Miles St, London SW8 1RY',
    type: 'both',
    website: 'https://www.vauxwall.co.uk',
    history: "VauxWall West opened in 2014, transforming two Victorian railway arches beneath Vauxhall station into a bouldering venue. Run by the Lakeland Climbing Centre, it was the company's first London outpost — bringing Cumbrian climbing expertise to the capital with a high-spec fit-out including electronic registration and check-in, dust extraction, and air conditioning. It quickly became a favourite for Vauxhall's growing fitness community.",
    training_facilities: JSON.stringify(['500m² bouldering surface', 'Over 250 problems', 'Training boards', 'Café', 'Retail shop', 'Changing rooms with showers']),
    lat: 51.4827, lng: -0.1225,
  },
  {
    name: '9 Degrees Climbing',
    area: 'Bermondsey',
    address: '53 Tanner St, London SE1 3PL',
    type: 'bouldering',
    website: 'https://www.9degrees.co.uk',
    history: "Tucked into a railway arch on Tanner Street in the heart of Bermondsey, 9 Degrees is an intimate bouldering gym known for its community-first approach and inventive routesetting. Surrounded by the area's thriving food and arts scene, it has cultivated a loyal following among South London climbers who value character and quality problems over scale.",
    training_facilities: JSON.stringify(['Training boards', 'Campus rungs', 'Hangboards', 'Strength area', 'Café', 'Changing facilities']),
    lat: 51.5017, lng: -0.0803,
  },
  {
    name: 'Reach Climbing & Fitness',
    area: 'Bethnal Green',
    address: 'Unit 1, 51 Brunswick Wharf, London E14 6AE',
    type: 'both',
    website: 'https://www.reachclimbing.co.uk',
    history: "Reach Climbing & Fitness is one of East London's most comprehensive climbing facilities, offering the full range from bouldering to lead. With over 300 boulder blocs, a 16-metre roof overhang, and 65 lead lines, it caters to serious climbers seeking challenge and variety. The gym is operated by Leap Training Ltd, a not-for-profit company dedicated to making climbing accessible across East London.",
    training_facilities: JSON.stringify(['300+ boulder blocs', '16m roof overhang', '17m traverse wall', '12 auto-belay lines', '61 top-rope lines', '65 lead lines', 'Instructed taster sessions', 'Coaching programmes', 'Changing facilities']),
    lat: 51.5042, lng: -0.0132,
  },
  {
    name: 'Fiend Climbing',
    area: 'Wandsworth',
    address: '2 Bendon Valley, London SW18 4LZ',
    type: 'bouldering',
    website: 'https://www.fiendclimbing.com',
    history: "Fiend Climbing opened in Wandsworth as a compact, climber-run bouldering gym in an industrial unit off Bendon Valley, close to Earlsfield. Built by climbers for climbers, it established a devoted local following through quality routesetting, honest pricing, and an unpretentious atmosphere that makes it a genuine neighbourhood gym for South West London's climbing community.",
    training_facilities: JSON.stringify(['Training boards', 'Hangboards', 'Campus rungs', 'Stretching area', 'Changing facilities']),
    lat: 51.4534, lng: -0.1837,
  },
  {
    name: 'The Climbing Hangar Wembley',
    area: 'Wembley',
    address: 'St Davids Dr, Wembley HA9 6EG',
    type: 'bouldering',
    website: 'https://www.theclimbinghangar.com',
    history: "The Climbing Hangar brand was founded in 2011 by Ged Mason in Liverpool as a passion project to create world-class, accessible climbing spaces. The Wembley location — formerly known as Urban Ascent — joined the Hangar family and brought the brand's high-quality routesetting philosophy to North West London. Classes follow the NICAS syllabus, delivered by DBS-checked, fully qualified BMC coaches.",
    training_facilities: JSON.stringify(['MoonBoard', 'Training boards', 'Two-floor bouldering space', 'Viewing deck with sofas', 'Café', 'Bouldering shop', 'NICAS coaching programme']),
    lat: 51.5561, lng: -0.2951,
  },
  {
    name: 'Gravity Bouldering',
    area: 'Stockwell',
    address: 'Unit 5, Clapham North Arts Centre, Voltaire Rd, London SW4 6DH',
    type: 'bouldering',
    website: 'https://www.gravityclimbing.co.uk',
    history: "Gravity Bouldering occupies a distinctive space within the Clapham North Arts Centre — a converted Victorian building shared with creative studios and arts organisations. The gym has built a reputation as South London's most characterful bouldering destination, where inspiring surroundings and quality setting combine to attract a diverse community of climbers from Clapham, Brixton, and Stockwell.",
    training_facilities: JSON.stringify(['Training boards', 'Hangboards', 'Campus rungs', 'Stretching area', 'Strength zone', 'Changing facilities']),
    lat: 51.4647, lng: -0.1332,
  },
  {
    name: 'Depot Climbing',
    area: "Shepherd's Bush",
    address: '115 Wood Ln, London W12 7SB',
    type: 'both',
    website: 'https://www.depotclimbing.co.uk',
    history: "The Depot at Shepherd's Bush sits within the redeveloped media quarter around Wood Lane, close to the BBC's historic base at Television Centre. Offering a broad mix of bouldering and lead climbing, the gym draws a diverse crowd of climbers from across West London attracted by the wide variety of routes and the vibrant surrounding neighbourhood.",
    training_facilities: JSON.stringify(['Lead walls', 'Top-rope lines', 'Bouldering area', 'Training boards', 'Campus rungs', 'Finger boards', 'Café', 'Changing rooms with showers']),
    lat: 51.5120, lng: -0.2262,
  },
  {
    name: 'Climbing District',
    area: 'Tottenham Hale',
    address: 'Unit 10, The Archives, High Cross Centre, Fountayne Rd, London N15 4BE',
    type: 'bouldering',
    website: 'https://climbingdistrict.uk',
    history: "Originally opened as Stronghold Climbing in 2017, the Tottenham Hale gym was one of North London's first dedicated bouldering venues. Situated in a converted warehouse within The Archives complex, it was acquired by and rebranded under the Climbing District name — a European bouldering brand with gyms across London, Paris, and Milan. The rebranding brought an expanded problem set, upgraded training tools, and a busy social calendar to an already thriving community hub.",
    training_facilities: JSON.stringify(['MoonBoard', 'Circuit board', '200+ boulder problems (V2–V12)', 'Dedicated training area', 'Gym facilities', 'Café', 'Retail shop', 'Coworking space', 'Weekly coaching sessions', 'Yoga classes']),
    lat: 51.5882, lng: -0.0583,
  },
  {
    name: 'Climbing District',
    area: 'London Fields',
    address: 'Unit 30, Canal Place, Andrews Road, London E8 4FX',
    type: 'bouldering',
    website: 'https://climbingdistrict.uk',
    history: "The London Fields location — formerly Stronghold Climbing — sits in a converted space near the Regent's Canal and Broadway Market in Hackney. After being acquired by Climbing District, it gained a Kilter Board, refreshed problem sets, and a bright canal-side café. The gym is renowned for excellent routesetting and a strong community spirit, with an air-conditioned underground wall that provides perfect conditions year-round.",
    training_facilities: JSON.stringify(['Kilter Board', '200+ boulder problems (V0–V11)', 'Dedicated training area', 'Yoga classes', 'Personal coaching', 'NICAS youth programme', 'Canal-side café', 'Indoor bike storage', 'Changing rooms with showers', 'Coworking space']),
    lat: 51.5361, lng: -0.0553,
  },
]

export function seedIfEmpty(db: Database.Database) {
  const count = (db.prepare('SELECT COUNT(*) as count FROM gyms').get() as { count: number }).count
  if (count > 0) return

  const insert = db.prepare(`
    INSERT INTO gyms (name, area, address, type, website, history, training_facilities, lat, lng)
    VALUES (@name, @area, @address, @type, @website, @history, @training_facilities, @lat, @lng)
  `)

  const insertMany = db.transaction((gymsToInsert: typeof gyms) => {
    for (const gym of gymsToInsert) {
      insert.run(gym)
    }
  })

  insertMany(gyms)
}
