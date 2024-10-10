import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";
import bcrypt from "bcrypt"; // Ensure bcrypt is imported

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { email} = req.body;

    const query = "SELECT * FROM customer WHERE Email = ?";
    db.query(query, email, async (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      console.log(results);
      if (results.length === 0) {
        return res.status(401).json({ error: "User not found." });
      }

      const user = results[0];
      // try {
      //   const isMatch = await bcrypt.compare(password, user.Hash_Password);
      //   if (!isMatch) {
      //     return res.status(401).json({ error: "User no exist." });
      //   }

      return res.status(200).json(user); // Send user details back to the frontend
      // } catch (error) {
      //   return res.status(500).json({ error: "Internal server error" });
      // }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
