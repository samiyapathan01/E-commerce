const express = require("express");
const router = express.Router();
const Contact = require("../Models/contact");


router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

module.exports = router;
