'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ECards', {
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      eCardId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      patientSlug: {
        type: Sequelize.STRING,
      },
      bloodGroup: {
        type: Sequelize.STRING,
      },
      genotype: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.DECIMAL(10, 2),
      },
      height: {
        type: Sequelize.DECIMAL(10, 2),
      },
      bpSystolic: {
        type: Sequelize.INTEGER,
      },
      bpDiastolic: {
        type: Sequelize.INTEGER,
      },
      nokName: {
        type: Sequelize.STRING,
      },
      nokNumber: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ECards');
  },
};
