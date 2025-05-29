const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController")


router.post("/create", TaskController.create);
router.get('/', TaskController.getAllTasks );
router.get(`/id/:_id`, TaskController.getTaskById);
router.put('/markAsCompleted/:_id', TaskController.markAsCompleted);
router.put('/users/:id', TaskController.updateTitle);
router.delete('/id/:_id', TaskController.deleteTaskById);

module.exports = router;