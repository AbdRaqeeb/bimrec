'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Lgas', [
      {
        lgaId: 1,
        name: 'Aba South',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 2,
        name: 'Arochukwu',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 3,
        name: 'Bende',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 4,
        name: 'Ikwuano',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 5,
        name: 'Isiala Ngwa North',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 6,
        name: 'Isiala Ngwa South',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 7,
        name: 'Isuikwuato',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 8,
        name: 'Obi Ngwa',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 9,
        name: 'Ohafia',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 10,
        name: 'Osisioma',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 11,
        name: 'Ugwunagbo',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 12,
        name: 'Ukwa East',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 13,
        name: 'Ukwa West',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 14,
        name: 'Umuahia North',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 15,
        name: 'Umuahia South',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lgaId: 16,
        name: 'Umu Nneochi',
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Lgas', null, {});
  },
};
