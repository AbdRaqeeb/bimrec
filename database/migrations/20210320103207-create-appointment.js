'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Appointments', {
      appointmentId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: Sequelize.UUIDV4,
      },
      startTime: {
        type: Sequelize.STRING,
      },
      endTime: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.TEXT,
      },
      patientNotificationTime: {
        type: Sequelize.DATE,
      },
      doctorNotificationTime: {
        type: Sequelize.DATE,
      },
      link: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: Sequelize.ENUM(
          'pending',
          'accepted',
          'canceled',
          'finished',
          'in-session',
          'available',
          'booked',
        ),
        defaultValue: 'pending',
      },
      price: {
        type: Sequelize.STRING,
      },
      doctorFinish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      patientFinish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      payment: {
        type: Sequelize.ENUM('Card', 'Cash', 'Transfer'),
        defaultValue: 'Transfer',
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
    await queryInterface.dropTable('Appointments');
  },
};
