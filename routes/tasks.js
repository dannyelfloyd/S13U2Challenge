const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js"); 


// POST /create: Endpoint para crear una tarea
router.post("/create", async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

// GET /: Endpoint para traer todas las tareas.
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// GET /id/:_id: Endpoint para buscar tarea por id.
router.get(`/id/:_id`, async (req, res) => {
  try {
    const id = req.params._id;
    const task = await Task.findById(id);
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
router.put('/markAsCompleted/:_id', async (req, res) => {
  try {
    const id = req.params._id;
    const task = await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo “completed” desde este endpoint, sino solo, el título.
router.put('/users/:id', async (req, res) => {
  try {
    const id = req.params._id
    const title = req.body.title
    const task = await Task.findByIdAndUpdate(id, { title }, { new: true });
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// DELETE /id/:_id: Endpoint para eliminar una tarea.
router.delete('/id/:_id', async (req, res) => {
  try {
    const id = req.params._id;
    const task = await Task.findByIdAndDelete(id);
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;