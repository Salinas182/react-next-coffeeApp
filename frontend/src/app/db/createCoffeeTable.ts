import pool from "@/config/dbConfig";

export default async function createCoffeeTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS coffee (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        type VARCHAR(50),
        price DECIMAL(10, 2),
        image_url TEXT
      )
    `);
  } catch (error) {
    console.error("Error creating table:", error);
    throw new Error("Failed to create table");
  }
}
