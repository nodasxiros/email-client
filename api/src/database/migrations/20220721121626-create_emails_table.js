'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('emails',
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          unique: true,
          primaryKey: true,
        },
        address: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          }
        },
      }
    );
  },

  async down (queryInterface) {
    return queryInterface.dropTable('emails');
  }
};
