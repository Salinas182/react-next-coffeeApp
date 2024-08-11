import pool from "@/config/dbConfig";

export default async function seedCoffeeTable() {
  try {
    const { rows } = await pool.query("SELECT COUNT(*) FROM coffee");

    if (parseInt(rows[0].count) > 0) {
      return;
    }

    const coffees = [
      {
        name: "Dark Roast",
        description: "Free in the MVST office",
        type: "Arabic",
        price: 19.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
      },
      {
        name: "Americano",
        description: "Free in the MVST office",
        type: "Robusta",
        price: 20.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
      },
      {
        name: "Cappucino",
        description: "Free in the MVST office",
        type: "Arabic",
        price: 15.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
      },
      {
        name: "Decaf Americano",
        description: "Free in the MVST office",
        type: "Robusta",
        price: 20.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
      },
      {
        name: "Pine Roast",
        description: "Free in the MVST office",
        type: "Arabic",
        price: 19.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
      },
      {
        name: "Raphael Original",
        description: "Free in the MVST office",
        type: "Arabic",
        price: 15.00,
        image_url:
          "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
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
