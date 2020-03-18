const express = require('express');

const router = express.Router();

const peopleController = require('../controlllers/peopleController');

router.get('/peoples', peopleController.getAllPeople);

router.get('/people/add', peopleController.peopleAddForm);

router.get('/people/:id', peopleController.getPeople);

router.post('/peoples/add', peopleController.peopleAdd)

module.exports = router;
