
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDb');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, // Adicione isso
  },
  
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O nome da categoria é obrigatório.'
      },
      len: {
        args: [3, 100],
        msg: 'O nome da categoria deve ter entre 3 e 100 caracteres.'
      }
    }
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'A descrição é obrigatória.'
      },
      len: {
        args: [10, 255],
        msg: 'A descrição deve ter entre 10 e 255 caracteres.'
      }
      // onupdate: "cascade", colocar nas tabelas com referencias
    }
  }
}, {
  tableName: 'categoria',
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
  underscored: true, // Para compatibilidade com snake_case
});

module.exports = Categoria;
