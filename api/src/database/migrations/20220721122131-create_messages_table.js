'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('messages',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          unique: true,
          primaryKey: true,
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue: ''
        },
        isSent: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      }
    );
  },

  async down (queryInterface) {
    return queryInterface.dropTable('messages');
  }
};
