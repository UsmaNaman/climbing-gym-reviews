import { getDb } from './db'

export type GymType = 'bouldering' | 'lead' | 'both'

export interface Gym {
  id: number
  name: string
  area: string
  address: string
  type: GymType
  website: string | null
  history: string | null
  training_facilities: string | null
  lat: number | null
  lng: number | null
}

export function getAllGyms(): Gym[] {
  const db = getDb()
  return db.prepare('SELECT * FROM gyms ORDER BY name').all() as Gym[]
}

export function getGymById(id: number): Gym | null {
  const db = getDb()
  return db.prepare('SELECT * FROM gyms WHERE id = ?').get(id) as Gym | null
}

