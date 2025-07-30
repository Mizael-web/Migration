/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona o campo criado_em
    await queryInterface.addColumn('usuario', 'criado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });

    // Adiciona o campo atualizado_em com atualização automática
    await queryInterface.addColumn('usuario', 'atualizado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      onUpdate: Sequelize.NOW, // Atualiza automaticamente na modificação
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove os campos criados
    await queryInterface.removeColumn('usuario', 'criado_em');
    await queryInterface.removeColumn('usuario', 'atualizado_em');
  },
};
