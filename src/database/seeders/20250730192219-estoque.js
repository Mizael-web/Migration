
'use strict';

const { v4: uuidv4 } = require('uuid');

// IDs reais das categorias (devem existir na tabela 'categoria')
const categoriaBikesId = '11111111-1111-1111-1111-111111111111';
const categoriaAcessoriosId = '22222222-2222-2222-2222-222222222222';
const categoriaPecasId = '33333333-3333-3333-3333-333333333333';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estoque', [
      {
        id: uuidv4(),
        nome: 'Mountain Bike Pro 500',
        marca: 'Caloi',
        categoriaId: 1,
        quantidade: 15,
        preco_unitario: 3599.90,
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Luva de Ciclismo Elite',
        marca: 'Giro',
        categoriaId: 2,
        quantidade: 40,
        preco_unitario: 79.50,
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Cambio Traseiro Shimano XT',
        marca: 'Shimano',
        categoriaId: 3,
        quantidade: 20,
        preco_unitario: 589.00,
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estoque', null, {});
  }
};
