const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDb');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID, // ✅ use DataTypes e não Sequelize
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, // Gera automaticamente um UUID
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  papel: {
    type: DataTypes.ENUM('admin', 'funcionario'),
    allowNull: false,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;
