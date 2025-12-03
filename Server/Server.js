const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()
const productRoutes = require("./Routes/products.routes")
const dotenv = require("dotenv").config();
const contactRoutes = require("./Routes/contact.routes");
const contactModel = require("./Models/contact")
const port = 3000

app.use(cors())
app.use(express.json())
app.use("/api/", productRoutes);
app.use("/api/contact", contactRoutes);

const db = require("./Config/db")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    contactModel.create({
        name,
        email,
        message,
    })

    res.json({ success: true, message: "Contact form submitted successfully" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})