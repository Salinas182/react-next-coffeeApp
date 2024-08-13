import pool from "@/config/dbConfig";

export default async function insertCoffee(
  name: string,
  description: string,
  type: string,
  price: string,
  image_url: string
) {
  try {
    const existingCoffee = await pool.query(
      "SELECT * FROM coffee WHERE name = $1",
      [name]
    );

    if (existingCoffee.rows.length > 0) {
      throw new Error("A coffee with the same name already exists.");
    }

    const result = await pool.query(
      `INSERT INTO coffee (name, description, type, price, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, description, type, price, image_url]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error inserting coffee:", error);
    throw new Error(`${error}`);
  }
}
