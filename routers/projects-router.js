const express = require("express");

const Projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving the project" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding the project" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;

  Projects.update(req.params.id, changes)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error updating project" });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json({ message: "The project had been destroyed" });
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error removing the project" });
    });
});

module.exports = router;
