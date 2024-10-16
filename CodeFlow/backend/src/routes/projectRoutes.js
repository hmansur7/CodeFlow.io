const express = require('express');
const { listProjects, createProject, deleteProject } = require('../controllers/projectController');
const router = express.Router();


router.get('/list', listProjects);


router.post('/create', createProject);


router.delete('/delete', deleteProject);

module.exports = router;

