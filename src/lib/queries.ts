import { getDb } from './db'

export type GymType = 'bouldering' | 'lead' | 'both'

export interface Gym {
  id: number
  name: string
  area: string
  address: string
  type: GymType
  website: string | null
}

export interface GymWithStats extends Gym {
  avg_rating: number | null
  review_count: number
}

export interface Review {
  id: number
  gym_id: number
  rating: number
  review_text: string
  date_visited: string | null
  created_at: string
  updated_at: string
}

export function getAllGymsWithStats(): GymWithStats[] {
  const db = getDb()
  return db.prepare(`
    SELECT
      g.*,
      AVG(r.rating) as avg_rating,
      COUNT(r.id) as review_count
    FROM gyms g
    LEFT JOIN reviews r ON r.gym_id = g.id
    GROUP BY g.id
    ORDER BY g.name
  `).all() as GymWithStats[]
}

export function getGymById(id: number): Gym | null {
  const db = getDb()
  return db.prepare('SELECT * FROM gyms WHERE id = ?').get(id) as Gym | null
}

export function getReviewsByGymId(gymId: number): Review[] {
  const db = getDb()
  return db.prepare(`
    SELECT * FROM reviews
    WHERE gym_id = ?
    ORDER BY created_at DESC
  `).all(gymId) as Review[]
}

export function getReviewById(id: number): Review | null {
  const db = getDb()
  return db.prepare('SELECT * FROM reviews WHERE id = ?').get(id) as Review | null
}
