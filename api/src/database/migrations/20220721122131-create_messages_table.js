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
      }
    );
  },

  async down (queryInterface) {
    return queryInterface.dropTable('messages');
  }
};
