import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'
import { seedIfEmpty } from './seed'

let db: Database.Database | null = null

function initSchema(database: Database.Database) {
  database.exec(`
    CREATE TABLE IF NOT EXISTS gyms (
      id      INTEGER PRIMARY KEY AUTOINCREMENT,
      name    TEXT NOT NULL,
      area    TEXT NOT NULL,
      address TEXT NOT NULL,
      type    TEXT NOT NULL CHECK(type IN ('bouldering', 'lead', 'both')),
      website TEXT
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      gym_id       INTEGER NOT NULL REFERENCES gyms(id) ON DELETE CASCADE,
      rating       INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
      review_text  TEXT NOT NULL,
      date_visited TEXT,
      created_at   TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at   TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)
}

export function getDb(): Database.Database {
  if (db) return db

  const dbDir = path.join(process.cwd(), 'database')
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true })
  }

  const dbPath = path.join(dbDir, 'climbing.db')
  db = new Database(dbPath)

  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')

  initSchema(db)
  seedIfEmpty(db)

  return db
}
