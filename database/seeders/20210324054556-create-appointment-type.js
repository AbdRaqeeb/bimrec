'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('AppointmentTypes', [
      {
        appTypeId: '95167dbf-a417-4d12-9f00-fee505d3e82a',
        name: 'Physical Appointment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appTypeId: '98f89bec-d432-4f37-b0a2-a3c0792534b6',
        name: 'Virtual Appointment',
        choice: 'Text',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appTypeId: '167080b2-0ee9-4f4c-acb5-07e0aa34e47f',
        name: 'Virtual Appointment',
        choice: 'Voice Call',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appTypeId: 'd87361b3-ddda-4037-aaa9-702ca550f5c0',
        name: 'Virtual Appointment',
        choice: 'Video Call',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AppointmentTypes', null, {});
  },
};
