const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//return all contacts
const getAll = async (req, res, next) => {
  try{
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }  catch (err){
    res.status(500).json({message: err.message});
  }
};

// return an specific contact by id
const getSingle = async (req, res, next) => {
  try{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err){
    res.status(500).json(err);
  }
  
};

//create a contact
const createContact = async (req, res, next) => {
  try{
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  } catch (err){
    res.status(500).json(err);
  }
};


//update a contact
const updateContact = async (req, res, next) => {
  try{
    const userId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  } catch (err){
    res.status(500).json(err);
  }
};


//delete a contact
const deleteContact = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
                      .getDb()
                      .db()
                      .collection('contacts')
                      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  } catch (err){
    res.status(500).json(err);
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };