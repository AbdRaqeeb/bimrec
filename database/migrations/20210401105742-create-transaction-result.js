'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('TransactionResults', {
      trxResultId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING,
      },
      trxRef: {
        type: Sequelize.STRING,
      },
      flwRef: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.BIGINT,
      },
      chargedAmount: {
        type: Sequelize.BIGINT,
      },
      currency: {
        type: Sequelize.STRING,
      },
      paymentType: {
        type: Sequelize.STRING,
      },
      processorResponse: {
        type: Sequelize.STRING,
      },
      hospitalId: {
        type: Sequelize.STRING,
      },
      hospitalName: {
        type: Sequelize.STRING,
      },
      patientId: {
        type: Sequelize.STRING,
      },
      patientName: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('TransactionResults');
  },
};
