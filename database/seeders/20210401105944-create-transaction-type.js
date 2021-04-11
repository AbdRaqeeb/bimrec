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
    await queryInterface.bulkInsert(
      'TransactionTypes',
      [
        {
          trxTypeId: 'Appointment payment',
          description: 'Pay for appointment',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          trxTypeId: 'Hospital withdrawal',
          description: 'Hospital withdraw money from wallet',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TransactionTypes', null, {});
  },
};
