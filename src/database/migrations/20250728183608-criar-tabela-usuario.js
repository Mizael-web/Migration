'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID, // Corrigido de UIID para UUID
        defaultValue: Sequelize.UUIDV4, // Corrigido para gerar UUID automaticamente
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      papel: {
        type: Sequelize.ENUM('admin', 'funcionario'),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });

    // Adicionar índices para otimização
    await queryInterface.addIndex('usuario', ['email']);
    await queryInterface.addIndex('usuario', ['papel']);
  },

  async down(queryInterface, Sequelize) {
    // Remover índices
    await queryInterface.removeIndex('usuario', ['email']);
    await queryInterface.removeIndex('usuario', ['papel']);  
  },
   async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  },
};