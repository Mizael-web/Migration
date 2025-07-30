/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona o campo criado_em
    await queryInterface.addColumn('estoque', 'criado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });

    // Adiciona o campo atualizado_em com atualização automática
    await queryInterface.addColumn('estoque', 'atualizado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      onUpdate: 'CURRENT_TIMESTAMP', // Atualiza automaticamente na modificação
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove os campos criados
    await queryInterface.removeColumn('estoque', 'criado_em');
    await queryInterface.removeColumn('estoque', 'atualizado_em');
  },
};
