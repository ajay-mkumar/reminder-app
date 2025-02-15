'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.addColumn("reminder", "subject", {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.addColumn("reminder", "email", {
        type: Sequelize.STRING,
        allowNull: false,
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("reminder", "subject");
    await queryInterface.removeColumn("reminder", "email");
    
  }
};
