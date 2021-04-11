'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Patients', [
      {
        firstName: 'Kevin',
        lastName: 'Uti',
        email: 'kevin@gmail.com',
        lgaId: 1,
        stateId: 1,
        patientId: 'e8b74d14-fc94-4f2d-9333-595a2c22b5c8',
        slug: 'kevin-uti-ghe8ewh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Debruyne',
        email: 'Debruyne@gmail.com',
        lgaId: 1,
        stateId: 1,
        patientId: '8d74485f-6a96-4ce9-af19-c5c4fb67a01f',
        slug: 'kib-debruyne-gsegwe8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Tope',
        lastName: 'Alabi',
        email: 'Tope@gmail.com',
        lgaId: 1,
        stateId: 1,
        patientId: 'da7f3b8a-70a7-4288-95a6-9a43507ddc7e',
        slug: 'tope-alabi-he8yd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        email: 'ronaldo@gmail.com',
        slug: 'cristiano-ronaldo-j98iu4',
        lgaId: 1,
        stateId: 1,
        patientId: 'dd3663d4-8778-4df4-bad9-b948f67b1f66',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Test',
        lastName: 'User',
        email: 'testing@gmail.com',
        lgaId: 1,
        stateId: 1,
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        slug: 'test-user-hjehe884nme',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Patients', null, {});
  },
};
