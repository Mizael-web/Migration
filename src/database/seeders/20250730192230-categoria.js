'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      {
        id: uuidv4(),
        nome: 'Bicicletas',
        descricao: 'Categoria para todos os tipos de bicicletas.',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'Acessórios',
        descricao: 'Capacetes, luvas, óculos e outros acessórios para ciclistas.',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'Peças',
        descricao: 'Componentes e peças de reposição para bicicletas.',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
