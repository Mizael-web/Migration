'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('usuario', {

          id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,

       nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
      
          papel: {
            type: Sequelize.ENUM("admin", "funcionario"),
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
        
        });  
         // Adicionar índices para otimização
 await queryInterface.addIndex('usuario', ['email']);
 await queryInterface.addIndex('usuario', ['papel']);
  // Adicionar índices para otimização
 await queryInterface.addIndex('usuario', ['email']);
 await queryInterface.addIndex('usuario', ['papel']);
      
 },


    
      
    
   

  async down (queryInterface, Sequelize) {    
      await queryInterface.dropTable('usuario');
   
  },

