import { gyms, type Gym, type GymType } from '@/data/gyms'

export type { Gym, GymType }

export function getAllGyms(): Gym[] {
  return [...gyms].sort((a, b) => a.name.localeCompare(b.name))
}

export function getGymBySlug(slug: string): Gym | undefined {
  return gyms.find((g) => g.slug === slug)
}
