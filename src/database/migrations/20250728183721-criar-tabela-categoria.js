'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    

      await queryInterface.createTable('categoria', { 
        id: {
          type: Sequelize.UUID, // Corrigido de UIID para UUID
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,       
          
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,   
                
       },
  });
       
    


    await queryInterface.addIndex('categoria' , ['nome']);
    await queryInterface.addIndex('categoria', ['descricao']);

  },
   
    async down(queryInterface, Sequelize) {
      // Remover índices
      await queryInterface.removeIndex('categoria', ['nome']); // Corrigido de estoque para usuario
      await queryInterface.removeIndex('categoria', ['descricao']);  // Corrigido de estoque para usuario
  
    },
  
  };
  