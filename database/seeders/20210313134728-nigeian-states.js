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
    await queryInterface.bulkInsert('States', [
      {
        stateId: 1,
        name: 'Abia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 2,
        name: 'Adamawa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 3,
        name: 'Akwa Ibom',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 4,
        name: 'Anambra',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 5,
        name: 'Bauchi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 6,
        name: 'Bayelsa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 7,
        name: 'Benue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 8,
        name: 'Borno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 9,
        name: 'Cross River',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 10,
        name: 'Delta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 11,
        name: 'Ebonyi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 12,
        name: 'Edo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 13,
        name: 'Ekiti',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 14,
        name: 'Enugu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 15,
        name: 'Gombe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 16,
        name: 'Imo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 17,
        name: 'Jigawa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 18,
        name: 'Kaduna',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 19,
        name: 'Kano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 20,
        name: 'Katsina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 21,
        name: 'Kebbi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 22,
        name: 'Kogi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 23,
        name: 'Kwara',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 24,
        name: 'Lagos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 25,
        name: 'Nasarawa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 26,
        name: 'Niger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 27,
        name: 'Ogun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 28,
        name: 'Ondo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 29,
        name: 'Osun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 30,
        name: 'Oyo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 31,
        name: 'Plateau',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 32,
        name: 'Rivers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 33,
        name: 'Sokoto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 34,
        name: 'Taraba',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 35,
        name: 'Yobe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stateId: 36,
        name: 'Zamfara',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('States', null, {});
  },
};
