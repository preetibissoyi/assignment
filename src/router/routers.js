const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
const cardController = require("../controller/cardController")

//CREATE CUSTOMER
router.post("/customer", customerController.createCustomer)

//GET CUSTOMER
router.get("/customers", customerController.getCustomer)

//DELETE CUSTOMER
router.delete("/customer/:customerID", customerController.deleteCustomer)

//CREATE USER
router.post("/card", cardController.createCard)

//GET CARD
router.get('/cards', cardController.getCard)

module.exports = router