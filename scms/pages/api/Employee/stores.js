import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const storeDetails = `
    SELECT
    store.Address,
    store.ContactNumber,
    store.RailwayStationContact,
    store.CityName,
    employee.Name
    FROM
    store
    LEFT OUTER JOIN
    storemanager ON store.StoreID = storemanager.StoreID
    LEFT OUTER JOIN
    employee ON storemanager.EmployeeID = employee.EmployeeID
    `;

    db.query(storeDetails, async (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ error: "Database error" });
      }
      console.log(results);
      if (results.length === 0) {
        return res.status(401).json({ error: "Stores not found." });
      }
      return res.status(200).json(results);
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
