
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { 
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // converte string para número
    dialect: 'postgres',
    logging: false,
  }
);

// Testar conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
  }
})();

module.exports = { sequelize };
