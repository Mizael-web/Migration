'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('estoque', { 
      id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
     },
     nome: {
       type: DataTypes.STRING,
       allowNull: false,
     
     },
     marca: {
       type: DataTypes.STRING,
       allowNull: false,
      
     },
     categoria: {
       type: DataTypes.STRING,
       allowNull: false,
      
       },
     
     quantidade: {
       type: DataTypes.INTEGER,
       allowNull: false,
       
     },
       preco_unitario: {
         type: DataTypes.DECIMAL(10, 2),
         allowNull: false,
       }, 
         
       });
      
       await queryInterface.addIndex('estoque', ['marca']);
       await queryInterface.addIndex('estoque', ['categoria']);
         
  
  async down (queryInterface, Sequelize) {

   await queryInterface.dropTable('estoque');
     
  }
};
