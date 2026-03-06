'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getDb } from '@/lib/db'

export async function addReview(formData: FormData) {
  const gymId = Number(formData.get('gymId'))
  const rating = Number(formData.get('rating'))
  const reviewText = String(formData.get('reviewText') || '').trim()
  const dateVisited = String(formData.get('dateVisited') || '').trim() || null

  if (!gymId || !rating || !reviewText) return

  const db = getDb()
  db.prepare(`
    INSERT INTO reviews (gym_id, rating, review_text, date_visited)
    VALUES (?, ?, ?, ?)
  `).run(gymId, rating, reviewText, dateVisited)

  revalidatePath(`/gyms/${gymId}`)
  revalidatePath('/')
}

export async function editReview(formData: FormData) {
  const reviewId = Number(formData.get('reviewId'))
  const gymId = Number(formData.get('gymId'))
  const rating = Number(formData.get('rating'))
  const reviewText = String(formData.get('reviewText') || '').trim()
  const dateVisited = String(formData.get('dateVisited') || '').trim() || null

  if (!reviewId || !gymId || !rating || !reviewText) return

  const db = getDb()
  db.prepare(`
    UPDATE reviews
    SET rating = ?, review_text = ?, date_visited = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(rating, reviewText, dateVisited, reviewId)

  revalidatePath(`/gyms/${gymId}`)
  revalidatePath('/')
  redirect(`/gyms/${gymId}`)
}

export async function deleteReview(formData: FormData) {
  const reviewId = Number(formData.get('reviewId'))
  const gymId = Number(formData.get('gymId'))

  if (!reviewId || !gymId) return

  const db = getDb()
  db.prepare('DELETE FROM reviews WHERE id = ?').run(reviewId)

  revalidatePath(`/gyms/${gymId}`)
  revalidatePath('/')
}
