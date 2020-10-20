const Model = require('../../database');

class ActorController {
  async index(req, res, next) {
    const users = await Model.actor().allActors();
    res.json(users);
    return next();
  }

  async show(req, res, next) {
    const { id } = req.params;
    const actor = await Model.actor().showActor(id);
    res.json(actor);
    return next();
  }

  async create(req, res, next) {
    const actor = await Model.actor().createActor(req.body);
    res.json(201, actor);
    return next();
  }

  async update(req, res, next) {
    const { id } = req.params;
    const actor = await Model.actor().updateActor(id, req.body);
    res.json(actor);
    return next();
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const actor = await Model.actor().deleteActor(id);

    if (actor.error) {
      res.json(400, { message: actor.message });
      return next();
    }

    res.json(204, actor);
    return next();
  }
}

module.exports = new ActorController();
