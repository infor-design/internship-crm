/**
 * This file contains all of our REST endpoints representing our Database layer.
 */
const express = require('express');
const router = express.Router();

const customers = require("../data/customers");

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

// GET all `/api/customers/:id`
router.get('/customers/:id', (req, res, next) => {
  const id = req.query.id;
  let record;

  customers.forEach((customer, i) => {
    if (i === customers[i].id && !record) {
      record = customers[i];
    }
  });

  if (record) {
    res.status(200).json(record);
  }
  next();
});

// Catch-all Base Route
router.get('/', (req, res, next) => {
  res.status(200).send('<p>API Layer active</p>');
});

module.exports = router;
