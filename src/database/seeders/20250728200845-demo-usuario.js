const bcrypt = require('bcryptjs');
const { sequelize } = require('../../../config/configDb');
const Usuario = require('../models/usuario.model'); // ajuste o caminho conforme sua estrutura

async function criarUsuariosSeed() {
  try {
    await sequelize.sync({ force: false }); // ⚠️ Não usar 'force: true' em produção, isso apaga a tabela

    const usuarios = [
      {
        nome: "Admin Master",
        papel: "admin",
        email: "admin@empresa.com",
        senha: await bcrypt.hash("Admin@123", 10),
      },
      {
        nome: "João Silva",
        papel: "funcionario",
        email: "joao@empresa.com",
        senha: await bcrypt.hash("Joao@123", 10),
      },
      {
        nome: "Maria Oliveira",
        papel: "funcionario",
        email: "maria@empresa.com",
        senha: await bcrypt.hash("Maria@123", 10),
      },
      {
        nome: "Carlos Souza",
        papel: "funcionario",
        email: "carlos@empresa.com",
        senha: await bcrypt.hash("Carlos@123", 10),
      },
      {
        nome: "Ana Lima",
        papel: "admin",
        email: "ana@empresa.com",
        senha: await bcrypt.hash("Ana@123", 10),
      },
    ];

    await Usuario.bulkCreate(usuarios);
    console.log("Usuários inseridos com sucesso!");
    process.exit(); // encerra o script
  } catch (error) {
    console.error("Erro ao criar usuários seed:", error);
    process.exit(1);
  }
}

criarUsuariosSeed();
