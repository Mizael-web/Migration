'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       nome: {
         type: DataTypes.STRING,
         allowNull: false,
        
         
       },
       descricao: {
         type: DataTypes.STRING,
         allowNull: false,         
        
       },
      });

      await queryInterface.addIndex('categoria ['categoria']);
      await queryInterface.addIndex('categoria', ['categoria']);
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
