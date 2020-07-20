/**
 * This file contains all of our REST endpoints representing our Database layer.
 */
const express = require('express');
const router = express.Router();

const customers = require("../../data/customers");

// GET a single `/api/customers/:id`
// TODO: Uncomment this and get this working.
/*
router.get('/customers/:id', (req, res, next) => {
  const id = req.query.id;
  const customer = customerData[id];

  res.status(200).json(customer);
});
*/

// GET all `/api/customers`
router.get('/customers', (req, res, next) => {
  res.status(200).json(customers);
});

// GET `/api/customers/:id`
router.get('/customers/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  let record;

// A simple if statement to check if the the id in the collection matches a "customer object".
 
if (isNaN(id)) {
    res.status(422);
    next();
    return;
  }

// A foreach loop that assigns a record to each of the customers in the collection
  customers.forEach((customer, i) => {
    if (id === customer.id && !record) {
      record = customer;
    }
  });

  // checking if a record exists
  if (record) {
    res.status(200).json(record);
  }

  //record not found
  res.status(404);
  //next record
  next();
});

// Catch-all Base Route
router.get('/', (req, res, next) => {
  res.status(200).send('<p>API Layer active</p>');
});

module.exports = router;
