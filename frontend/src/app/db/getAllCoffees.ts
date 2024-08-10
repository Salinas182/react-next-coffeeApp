import pool from "@/config/dbConfig";

export default async function getAllCoffees() {
  try {
    const result = await pool.query(`SELECT * FROM coffee`);
    return result.rows;
  } catch (error) {
    console.error("Error fetching coffees:", error);
    throw new Error("Failed to fetch coffees");
  }
}
