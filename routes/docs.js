// import express from 'express';
const express = require('express');

// import collectionController from '../controllers/docs.js';
const getCollectionsController = require("../controllers/docs.js")

// controller:
const router = express.Router();

// router:
router.get('/docs', getCollectionsController.getCollectionsName);

module.exports =router;