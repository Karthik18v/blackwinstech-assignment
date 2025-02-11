const contactService = require("../services/contactService");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

const getContact = async (req, res) => {
  console.log("Fetching contact:", req.params.contactId);
  try {
    const contact = await contactService.getContact(req.params.contactId);
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
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
  console.log("Deleting contact:", req.params.contactId);
  try {
    const response = await contactService.deleteContact(req.params.contactId);
    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res.status(200).json({ success: true, message: "Contact deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

const updateContact = async (req, res) => {
  console.log("Updating contact:", req.body);
  try {
    const response = await contactService.updateContact(
      req.params.contactId,
      req.body
    );
    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Contact updated", data: response });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

const searchContacts = async (req, res) => {
  const { name, email } = req.query;
  try {
    const searchingContacts = await contactService.searchContacts(name, email);
    return res.status(200).json({
      success: true,
      message: "Searching Contacts",
      data: searchingContacts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  searchContacts,
};
