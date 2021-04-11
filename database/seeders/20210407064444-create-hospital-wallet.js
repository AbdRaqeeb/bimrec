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
    await queryInterface.bulkInsert('HospitalWallets', [
      {
        walletId: 'fa9048f3-45d5-4187-b7e8-92b4e25a3084',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '3e01125a-0009-4803-aa92-7844207265b9',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: 'f28fc686-83a8-4838-a8cf-56d9d58bf7a5',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '73c8939a-845c-4e0c-b3cd-ba8ea0175ca9',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '864155fd-f550-4485-a21c-0c219f390f98',
        hospitalId: 'f2cf2b8e-2d14-48b4-bb37-737beb7fc99f',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '08387910-01db-47f3-ba56-d5a9485a4b6d',
        hospitalId: '3cb11667-532c-406b-ad2b-15b80d03bc90',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: 'a729ca8f-0011-413d-8dea-a8f66615d7c3',
        hospitalId: '321c744a-f3fc-4222-b518-8e1ce3a1fbfe',
        balance: 20.58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: 'd933a121-9d8a-41fe-bdc5-df0791eb4d3e',
        hospitalId: '49d00d0c-7387-4fb8-bf6c-10a41f2cfde8',
        balance: 20.58,
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
    await queryInterface.bulkDelete('HospitalWallets', null, {});
  },
};
