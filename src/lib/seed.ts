import Database from 'better-sqlite3'

const gyms = [
  {
    name: 'The Castle Climbing Centre',
    area: 'Stoke Newington',
    address: 'Green Lanes, London N4 2HA',
    type: 'both',
    website: 'https://www.castle-climbing.co.uk',
  },
  {
    name: 'The Arch Bermondsey',
    area: 'Bermondsey',
    address: 'Unit 6, 68 Southwark Bridge Rd, London SE1 0AS',
    type: 'bouldering',
    website: 'https://www.archclimbing.com',
  },
  {
    name: 'The Arch Biscuit Factory',
    area: 'Bermondsey',
    address: '100 Drummond Rd, London SE16 4DG',
    type: 'bouldering',
    website: 'https://www.archclimbing.com',
  },
  {
    name: 'Boulder World',
    area: 'Acton',
    address: '1 Warple Way, London W3 0RQ',
    type: 'bouldering',
    website: 'https://www.boulderworld.co.uk',
  },
  {
    name: 'Westway Climbing',
    area: 'Notting Hill',
    address: '1 Crowthorne Rd, London W10 6RP',
    type: 'both',
    website: 'https://www.westwaysportscentre.org.uk',
  },
  {
    name: 'VauxWall East',
    area: 'Vauxhall',
    address: 'Arches 178-180, Loughborough Rd, London SW9 7NL',
    type: 'both',
    website: 'https://www.vauxwall.co.uk',
  },
  {
    name: 'VauxWall West',
    area: 'Vauxhall',
    address: 'Arches 67-68, Miles St, London SW8 1RY',
    type: 'both',
    website: 'https://www.vauxwall.co.uk',
  },
  {
    name: '9 Degrees Climbing',
    area: 'Bermondsey',
    address: '53 Tanner St, London SE1 3PL',
    type: 'bouldering',
    website: 'https://www.9degrees.co.uk',
  },
  {
    name: 'Reach Climbing & Fitness',
    area: 'Bethnal Green',
    address: 'Unit 1, 51 Brunswick Wharf, London E14 6AE',
    type: 'both',
    website: 'https://www.reachclimbing.co.uk',
  },
  {
    name: 'Fiend Climbing',
    area: 'Wandsworth',
    address: '2 Bendon Valley, London SW18 4LZ',
    type: 'bouldering',
    website: 'https://www.fiendclimbing.com',
  },
  {
    name: 'The Climbing Hangar Wembley',
    area: 'Wembley',
    address: 'St Davids Dr, Wembley HA9 6EG',
    type: 'bouldering',
    website: 'https://www.climbinghangar.com',
  },
  {
    name: 'Gravity Bouldering',
    area: 'Stockwell',
    address: 'Unit 5, Clapham North Arts Centre, Voltaire Rd, London SW4 6DH',
    type: 'bouldering',
    website: 'https://www.gravityclimbing.co.uk',
  },
  {
    name: 'Depot Climbing',
    area: 'Shepherd\'s Bush',
    address: '115 Wood Ln, London W12 7SB',
    type: 'both',
    website: 'https://www.depotclimbing.co.uk',
  },
]

export function seedIfEmpty(db: Database.Database) {
  const count = (db.prepare('SELECT COUNT(*) as count FROM gyms').get() as { count: number }).count
  if (count > 0) return

  const insert = db.prepare(`
    INSERT INTO gyms (name, area, address, type, website)
    VALUES (@name, @area, @address, @type, @website)
  `)

  const insertMany = db.transaction((gymsToInsert: typeof gyms) => {
    for (const gym of gymsToInsert) {
      insert.run(gym)
    }
  })

  insertMany(gyms)
}
