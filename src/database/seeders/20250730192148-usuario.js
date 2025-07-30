'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        id: uuidv4(),
        nome: 'Admin Master',
        papel: 'admin',
      },
      {
        id: uuidv4(),
        nome: 'Carlos Silva',
        papel: 'funcionario',
      },
      {
        id: uuidv4(),
        nome: 'Fernanda Lima',
        papel: 'funcionario',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
