import express from "express";
import { getDb } from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();


// Route to add a tag to a specific wardrobe item
router.post('/wardrobe/:itemId/tags', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { newTags } = req.body; // The new tags sent from the client

    if (!newTags || !Array.isArray(newTags)) {
      return res.status(400).json({ message: 'Invalid tags input.' });
    }

    const db = getDb();

    // Find the item in the wardrobe collection and add the new tags
    const result = await db.collection('wardrobe').updateOne(
      { _id: new ObjectId(itemId) }, // Match the item by ID
      { $push: { tags: { $each: newTags } } } // Add new tags to the tags array, avoiding duplicates
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'Tags added successfully!' });
    } else {
      res.status(404).json({ message: 'Item not found or no tags were added.' });
    }
  } catch (error) {
    console.error('Error adding tags:', error);
    res.status(500).json({ message: 'Failed to add tags.' });
  }
});



export default router;
