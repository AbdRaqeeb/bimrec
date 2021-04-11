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
      'WalletLogTypes',
      [
        {
          walletLogTypeId: 'credit',
          description: 'Wallet credit',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          walletLogTypeId: 'debit',
          description: 'Wallet debit',
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
    await queryInterface.bulkDelete('WalletLogTypes', null, {});
  },
};
