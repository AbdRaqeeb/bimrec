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
    await queryInterface.bulkInsert('NextOfKins', [
      {
        nextOfKinId: '6cf38d01-47ae-4680-a429-ae7739dde0c0',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        firstName: 'John',
        lastName: 'Doe',
        address: '56, Leo layout, Akure, Ondo.',
        phoneNumber: '09087654321',
        relationship: 'Brother',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nextOfKinId: '6b0624f6-32bb-4175-b88a-08e79b8ac91b',
        patientId: 'dd3663d4-8778-4df4-bad9-b948f67b1f66',
        firstName: 'John',
        lastName: 'Doe',
        address: '56, Leo layout, Akure, Ondo.',
        phoneNumber: '09087654321',
        relationship: 'Brother',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nextOfKinId: '49767d90-9f68-42cf-8265-7f953846c47f',
        patientId: 'da7f3b8a-70a7-4288-95a6-9a43507ddc7e',
        firstName: 'John',
        lastName: 'Doe',
        address: '56, Leo layout, Akure, Ondo.',
        phoneNumber: '09087654321',
        relationship: 'Brother',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nextOfKinId: '3fdc3b07-0869-469d-9a6d-b8bfbb632cdc',
        patientId: '8d74485f-6a96-4ce9-af19-c5c4fb67a01f',
        firstName: 'John',
        lastName: 'Doe',
        address: '56, Leo layout, Akure, Ondo.',
        phoneNumber: '09087654321',
        relationship: 'Brother',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nextOfKinId: '1137724a-0dca-43f9-8dae-b9e3399825aa',
        patientId: 'e8b74d14-fc94-4f2d-9333-595a2c22b5c8',
        firstName: 'John',
        lastName: 'Doe',
        address: '56, Leo layout, Akure, Ondo.',
        phoneNumber: '09087654321',
        relationship: 'Brother',
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
    await queryInterface.bulkDelete('NextOfKins', null, {});
  },
};
