import express from "express";
import { getDb } from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Route to add tags to a wardrobe item by ID
router.post("/wardrobe/:id/tags", async (req, res) => {
    try {
      const db = getDb();
      const { id } = req.params;
      const { newTags } = req.body; // Get newTags from request body
  
      // Validate the input
      if (!Array.isArray(newTags) || newTags.length === 0) {
        return res.status(400).json({ message: "Invalid tags data" });
      }
  
      // Update the wardrobe item by adding new tags
      const result = await db.collection("wardrobe").updateOne(
        { _id: new ObjectId(id) },
        {
          $addToSet: { tags: { $each: newTags } }, // Use $addToSet to add unique tags
        }
      );
  
      // Check if the item was found and updated
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Wardrobe item not found" });
      }
  
      // Respond with success
      res.status(200).json({ message: "Tags added successfully" });
    } catch (error) {
      console.error("Error adding tags:", error);
      res.status(500).json({ message: "Failed to add tags" });
    }
  });



export default router;
