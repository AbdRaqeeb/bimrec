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
    await queryInterface.bulkInsert('DoctorSpecialties', [
      {
        id: 'cbf1d9a2-8377-4968-817b-601c66e3d0a7',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        specialtyId: '450aa426-9ac8-4e8f-be27-d599d87f3dac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cbf1d9a2-8377-4968-817b-601c66e3d0a7',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cbf1d9a2-8377-4968-817b-601c66e3d0a7',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cbf1d9a2-8377-4968-817b-601c66e3d0a7',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        specialtyId: 'cb76e590-25cc-4054-88ea-75c00886259f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cbf1d9a2-8377-4968-817b-601c66e3d0a7',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        specialtyId: 'd73fd8aa-9597-4818-bec3-1b36f2e60d24',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f6d98c7a-5721-456f-9550-79901e3fc268',
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        specialtyId: '9d4a4f9c-84a3-46b4-a899-dbfc2451a88a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7ec5380b-e10d-4489-9ff1-a4b4751270ef',
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '36463128-cdeb-4efc-b11d-9036e08472ec',
        doctorId: 'a18cbe75-f11f-496b-8075-de407c06dac8',
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'edb0812b-066a-45e1-a532-47b74240690c',
        doctorId: 'ade82c3d-6398-4d0a-b89b-b9dfb675fffc',
        specialtyId: 'cb76e590-25cc-4054-88ea-75c00886259f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b1d37ea5-340f-4c11-be7d-141cc339e6c4',
        doctorId: '794f8f1c-225f-47cf-b367-86e04393385f',
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a6653d2f-d8bb-4c02-9f78-71402110c43f',
        doctorId: '6287995d-1d6c-4e0d-aad3-26c1306e668d',
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5be013c0-244d-4db2-bb55-d0ea63d35fe9',
        doctorId: '2186a38d-c361-4efd-86d7-bd4a448c2124',
        specialtyId: 'd73fd8aa-9597-4818-bec3-1b36f2e60d24',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b9094ebe-8303-4f9f-8144-51c74768934c',
        doctorId: 'f4295ae0-8693-4c6f-a877-70f5bb3a0d95',
        specialtyId: '7ad515e6-ee32-41e8-9a16-ce00ebc4a299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2eaff007-0c5a-4304-b17e-f3d6cba993bc',
        doctorId: '0802f2a9-f203-457f-9951-aefeaf553925',
        specialtyId: '903b062a-44c9-4165-b22e-ad1c18c5a2c5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2eaff007-0c5a-4304-b17e-f3d6cba993bc',
        doctorId: '4e60ff08-2c64-4849-a674-71ad3f9e973a',
        specialtyId: 'e9a9ae64-0e6a-46f3-9f1c-96f71884337d',
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
    await queryInterface.bulkDelete('DoctorSpecialties', null, {});
  },
};
