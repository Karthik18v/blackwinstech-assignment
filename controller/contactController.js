const contactService = require("../services/contactService");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

const getContact = async (req, res) => {
  console.log(req.params.contactId);
  try {
    const contact = await contactService.getContact(req.params.contactId);
    return res.status(200).json(contact);
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

const addContact = async (req, res) => {
  try {
    const contact = await contactService.addContact(req.body);
    return res.status(201).json({
      success: true,
      message: "Contact added successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

const deleteContact = async (req, res) => {
  console.log(req.params.contactId);
  try {
    const response = await contactService.deleteContact(req.params.contactId);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

const updateContact = async (req, res) => {
  console.log(req.body);
  try {
    const response = await contactService.updateContact(
      req.params.contactId,
      req.body
    );
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

const searchContact = async (req, res) => {
  console.log("Received search request:", req.query); // Debugging log

  try {
    const { name, email } = req.query;
    const result = await contactService.searchContact(name, email);

    return res.status(200).json(result); // Directly return the structured response
  } catch (error) {
    console.error("Error in searchContact:", error.message);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};


module.exports = {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  searchContact,
};
