const Contact = require("../model/contact");
const { v4: uuidv4 } = require("uuid");
const { validateContact } = require("../validation/contactValidation");


const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return { success: true, contacts };
  } catch (error) {
    console.error("Error While Fetching Contacts:", error.message);
    return { success: false, error: error.message };
  }
};

const getContact = async (contactId) => {
  try {
    const contact = await Contact.findOne({ contactId });
    if (!contact) {
      return { success: false, message: "Contact not found", status: 404 };
    }
    return { success: true, contact };
  } catch (error) {
    console.error("Error While Fetching Contact:", error.message);
    return { success: false, error: error.message };
  }
};

const addContact = async (reqBody) => {
  const { name, email, phoneNumber, address } = reqBody;

  const existingContact = await Contact.findOne({ email });
  if (existingContact) {
    return { success: false, message: "Email already exists", status: 409 };
  }

  const newContact = {
    contactId: uuidv4(),
    name,
    email,
    phoneNumber,
    address,
  };

  const { error } = validateContact(newContact);
  if (error) {
    return { success: false, error: error.details.map((err) => err.message) };
  }

  try {
    const contact = new Contact(newContact);
    await contact.save();
    return {
      success: true,
      message: "Contact added successfully",
      data: contact,
    };
  } catch (error) {
    console.error("Error While Adding Contact:", error.message);
    return { success: false, error: error.message };
  }
};

const deleteContact = async (contactId) => {
  try {
    const deletedContact = await Contact.findOneAndDelete({ contactId });
    if (!deletedContact) {
      return { success: false, message: "Contact not found", status: 404 };
    }
    return { success: true, message: "Contact deleted successfully" };
  } catch (error) {
    console.error("Error While Deleting Contact:", error.message);
    return { success: false, error: error.message };
  }
};

const updateContact = async (contactId, contactData) => {
  const { error } = validateContact(contactData);
  if (error) {
    return { success: false, error: error.details.map((err) => err.message) };
  }

  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { contactId },
      contactData,
      { new: true }
    );

    if (!updatedContact) {
      return { success: false, message: "Contact not found", status: 404 };
    }

    return {
      message: "Contact updated successfully",
      data: updatedContact,
    };
  } catch (error) {
    console.error("Error While Updating Contact:", error.message);
    return { error: error.message };
  }
};

const searchContacts = async (name, email) => {
  try {
    let query = {};
    if (name) query.name = new RegExp(name, "i");
    if (email) query.email = new RegExp(email, "i");

    console.log(query);

    const contacts = await Contact.find(query);

    return contacts;
  } catch (error) {
    return { message: error.message };
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
