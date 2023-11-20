const db = require("../models");    
const Nishu = db.nishus;
const Op = db.Sequelize.Op;

// This is for branch work testing
// Create and Save a new Donar
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
// Testing
  // Create a Donar
  const nishu = {
    cid: req.body.cid,
    name: req.body.name,
    adhar: req.body.adhar,
    dob: req.body.dob,
    gender: req.body.gender,
    mob: req.body.mob,
    email: req.body.email,
    place: req.body.place,
    date: req.body.date,
    no_members: req.body.no_members,
    roomtype: req.body.roomtype,
    price: req.body.price
  };

  // Save Nishu in the database
  Nishu.create(nishu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the nishu."
      });
    });
};

// Retrieve all Nishus from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  data.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving nishus."
      });
    });
};

// Find a single Nishu with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Nishu.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Nishu with id=" + id
      });
    });
};

// Update a Nishu by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Nishu.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Nishu Details updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Nishu with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Nishu with id=" + id
      });
    });
};

// Delete a Nishu with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Nishu.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Nishu was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Nishu with id=${id}. Maybe Nishu was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Nishu with id=" + id
      });
    });
};

// Delete all Nishus from the database.
exports.deleteAll = (req, res) => {
  Nishu.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Nishus were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all nishuss."
      });
    });
};

// find all Active Nishu
exports.findAllPublished = (req, res) => {
  Nishu.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving nishus."
      });
    });
};
// Count All Nishu
exports.findTotalNishu = (req, res) => {
 
  Nishu.count().then(nums => {
    res.send({ no: `${nums}` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving nishus."
      });
    });
};
