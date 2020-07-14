/**
 * This file contains all of our REST endpoints representing our Database layer.
 */
const express = require('express');
const router = express.Router();

// Starter customer data (replace this with a file import at some point)
const customerData = [
  {
    id: 0,
    customerName: 'Lida Snyder',
    companyName: 'Alexander Gravel & Stone',
    location: 'Terrencefort, TX',
    phone: '414-821-0697',
    startDate: '04/25/2016'
  }
];

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
  res.status(200).json(customerData);
});

// Catch-all Base Route
router.get('/', (req, res, next) => {
  res.status(200).send('<p>API Layer active</p>');
});

module.exports = router;
