const db = require("../models");

// Defining methods for the RoomController
module.exports = {
  findAll: function (req, res) {
    db.Room.find(req.query)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Room.findById(req.params.id)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Room.create({})
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Room.findOneAndUpdate({
        "_id": req.params.id
      }, req.body)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Room.findById(req.params.id)
      .then(dbRoom => dbRoom.remove())
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  }
};