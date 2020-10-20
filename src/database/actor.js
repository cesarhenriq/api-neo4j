const actor = (db) => {
  return {
    async allActors() {
      try {
        const actors = await db.execute(
          'MATCH (actors:Person) RETURN {id: ID(actors), name: actors.name, born: actors.born} as actors'
        );
        return actors;
      } catch (error) {
        console.log(error);
        return { error: true, message: 'Erro ao listar Ator' };
      }
    },

    async showActor(id) {
      try {
        const actor = await db.execute(
          `MATCH (actor:Person) WHERE ID(actor) = ${id} RETURN actor`
        );
        return actor;
      } catch (error) {
        console.log(error);
        return { error: true, message: 'Erro ao exibir Ator' };
      }
    },

    async createActor(body) {
      try {
        const { name, born } = body;
        const actor = await db.execute(
          `CREATE (actor:Person {name: '${name}', born: ${born}}) RETURN actor`
        );
        return actor;
      } catch (error) {
        console.log(error);
        return { error: true, message: 'Erro ao criar Ator' };
      }
    },

    async updateActor(id, body) {
      try {
        const { name, born } = body;
        const actor = await db.execute(
          `MATCH (actor:Person) WHERE ID(actor)=${id} SET actor.name='${name}, 'SET actor.born = ${born} RETURN actor`
        );
        return actor;
      } catch (error) {
        console.log(error);
        return { error: true, message: 'Erro ao atualizar Ator' };
      }
    },

    async deleteActor(id) {
      try {
        const actor = await db.execute(
          `MATCH (actor:Person) WHERE ID(p)=${id} DELETE actor`
        );
        return actor;
      } catch (error) {
        console.log(error);
        return { error: true, message: 'Erro ao deletar Ator' };
      }
    },
  };
};

module.exports = actor;
