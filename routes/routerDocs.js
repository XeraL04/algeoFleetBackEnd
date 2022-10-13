// import express from 'express';
const express = require('express');
const router = express.Router();

// controller:
const getCollectionsController = require("../controllers/docs.js")
const oneCollectionController = require("../controllers/oneDoc.js")

// router:
router.get('/docs', getCollectionsController.getCollectionsName);
router.get('/docs/:nameCollection', oneCollectionController.getOneCollection);


module.exports =router;