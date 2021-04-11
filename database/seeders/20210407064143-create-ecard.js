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
    await queryInterface.bulkInsert('ECards', [
      {
        eCardId: '3555eeeb-335a-4119-8c69-5e93a7344f43',
        patientId: 'e8b74d14-fc94-4f2d-9333-595a2c22b5c8',
        patientSlug: 'kevin-uti-ghe8ewh',
        bloodGroup: 'B',
        genotype: 'AA',
        weight: 65.76,
        height: 6.92,
        bpSystolic: 120,
        bpDiastolic: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eCardId: 'c51d6284-8536-40ec-8fda-291037e6af73',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        patientSlug: 'test-user-hjehe884nme',
        bloodGroup: 'B',
        genotype: 'AA',
        weight: 65.76,
        height: 6.92,
        bpSystolic: 120,
        bpDiastolic: 80,
        nokName: 'John Doe',
        nokNumber: '09087654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eCardId: 'c45c0ca3-761d-4f51-a69e-d57a5b9214b8',
        patientId: 'da7f3b8a-70a7-4288-95a6-9a43507ddc7e',
        patientSlug: 'test-user-hjehe884nme',
        bloodGroup: 'B',
        genotype: 'AA',
        weight: 65.76,
        height: 6.92,
        bpSystolic: 120,
        bpDiastolic: 80,
        nokName: 'John Doe',
        nokNumber: '09087654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eCardId: 'bbb34326-29f5-4e31-a460-edb7e312be28',
        patientId: '8d74485f-6a96-4ce9-af19-c5c4fb67a01f',
        patientSlug: 'kevin-debruyne-gsegwe8',
        bloodGroup: 'B',
        genotype: 'AA',
        weight: 65.76,
        height: 6.92,
        bpSystolic: 120,
        bpDiastolic: 80,
        nokName: 'John Doe',
        nokNumber: '09087654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eCardId: 'a7a5b674-6e03-4e27-a485-388c41e36334',
        patientId: 'da7f3b8a-70a7-4288-95a6-9a43507ddc7e',
        patientSlug: 'tope-alabi-he8yd',
        bloodGroup: 'B',
        genotype: 'AA',
        weight: 65.76,
        height: 6.92,
        bpSystolic: 120,
        bpDiastolic: 80,
        nokName: 'John Doe',
        nokNumber: '09087654321',
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
    await queryInterface.bulkDelete('ECards', null, {});
  },
};
