const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

router.get("/contacts", contactController.getAllContacts);
router.post("/contacts", contactController.addContact);
router.delete("/contacts/:contactId", contactController.deleteContact);
router.put("/contacts/:contactId", contactController.updateContact);
router.get("/contacts/:contactId", contactController.getContact);
router.get("/contacts/search",contactController.searchContact);

module.exports = router;
