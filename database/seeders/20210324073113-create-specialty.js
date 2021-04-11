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
    await queryInterface.bulkInsert('Specialties', [
      {
        specialtyId: '450aa426-9ac8-4e8f-be27-d599d87f3dac',
        name: 'Ear',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        name: 'General',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        name: 'Obstetrics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: 'cb76e590-25cc-4054-88ea-75c00886259f',
        name: 'Surgery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: 'd73fd8aa-9597-4818-bec3-1b36f2e60d24',
        name: 'Dentistry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: '7ad515e6-ee32-41e8-9a16-ce00ebc4a299',
        name: 'Gynecology',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: '903b062a-44c9-4165-b22e-ad1c18c5a2c5',
        name: 'Nose',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: 'e9a9ae64-0e6a-46f3-9f1c-96f71884337d',
        name: 'Throat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: '5d8855e7-d027-4dc9-a4e5-4da03925e64a',
        name: 'Oncology',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialtyId: '9d4a4f9c-84a3-46b4-a899-dbfc2451a88a',
        name: 'Paediatrics',
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
    await queryInterface.bulkDelete('Specialties', null, {});
  },
};
