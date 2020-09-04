const express = require("express");

const Projects = require("./projectModel");

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

module.exports = router;
