const Task = require("../models/Task")

const TaskController = {
  async create (req, res) {
    try {
      const task = await Task.create({...req.body, completed: false})
      res.status(201).json(task)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  },
  async getAllTasks (req, res) {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  },
  async getTaskById (req, res) {
    try {
        const id = req.params._id;
        const task = await Task.findById(id);
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  },
  async markAsCompleted (req, res) {
    try {
      const id = req.params._id;
      const task = await Task.findByIdAndUpdate( id, { completed: true }, {new: true})
      res.send(task);
      
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  },
  async updateTitle(req, res){
    try {
      const id = req.params._id;
      const title = req.body.title;
      const task = await Task.findByIdAndUpdate( id, { title }, {new: true});
      res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  },
  async deleteTaskById (req, res) {
    try {
      const id = req.params._id;
      const task = await Task.findByIdAndDelete(id);
      res.json({mensaje: "task deleted", task });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  }
};

module.exports = TaskController;