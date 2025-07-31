'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('estoque', { 
      id: {
       type: Sequelize.UUID, // Corrigido de UIID para UUID
       primaryKey: true,
     },
     nome: {
       type: Sequelize.STRING,
       allowNull: false,
     
     },
     marca: {
       type: Sequelize.STRING,
       allowNull: false,
      
     },
     categoria: {
       type: Sequelize.STRING,
       allowNull: false,
      
       },
     
     quantidade: {
       type: Sequelize.INTEGER,
       allowNull: false,
       
     },
       preco_unitario: {
         type: Sequelize.DECIMAL(10, 2),
         allowNull: false,
       }, 
         
       });
      
         
  
   
  await queryInterface.addIndex('estoque', ['marca']);
  await queryInterface.addIndex('estoque', ['categoria']);
     
  },
  async down(queryInterface, Sequelize) {

  
    // Remover índices
    await queryInterface.removeIndex('estoque', ['marca']); // Corrigido de estoque para usuario
    await queryInterface.removeIndex('estoque', ['categoria']); // Corrigido de estoque para usuario

  },
    async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("estoque");
  },

};
