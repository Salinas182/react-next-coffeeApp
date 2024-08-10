import pool from "@/config/dbConfig";

export default async function seedCoffeeTable() {
  try {
    const { rows } = await pool.query("SELECT COUNT(*) FROM coffee");

    if (parseInt(rows[0].count) > 0) {
      return;
    }

    const coffees = [
      {
        name: "Espresso",
        description: "Strong and black",
        type: "Hot",
        price: 2.5,
        image_url: "https://example.com/espresso.jpg",
      },
      {
        name: "Cappuccino",
        description: "Espresso with milk and foam",
        type: "Hot",
        price: 3.0,
        image_url: "https://example.com/cappuccino.jpg",
      },
      {
        name: "Iced Coffee",
        description: "Cold brew with ice",
        type: "Cold",
        price: 2.75,
        image_url: "https://example.com/iced-coffee.jpg",
      },
    ];

    for (const coffee of coffees) {
      await pool.query(
        "INSERT INTO coffee (name, description, type, price, image_url) VALUES ($1, $2, $3, $4, $5)",
        [
          coffee.name,
          coffee.description,
          coffee.type,
          coffee.price,
          coffee.image_url,
        ]
      );
    }
    console.log("Coffee table seeded with initial data.");
  } catch (error) {
    console.error("Error seeding coffee table:", error);
  }
}
