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
    await queryInterface.bulkInsert('HospitalDoctors', [
      {
        id: '81517f56-0170-4185-a082-a0f907d24ee5',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'eb8bc54b-27c6-4c98-96cb-5149dc1aa915',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9bcf09a5-0cb8-4d85-b861-92ca5549c743',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: 'a18cbe75-f11f-496b-8075-de407c06dac8',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '84f6f03f-ac2b-4903-a887-69c183d75c2c',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: '794f8f1c-225f-47cf-b367-86e04393385f',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ce8fe73d-3171-411f-ba67-1aebb4b5a0b7',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: '6287995d-1d6c-4e0d-aad3-26c1306e668d',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6f9f224e-bd22-4001-abd2-e19b3b05c0fc',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: 'ade82c3d-6398-4d0a-b89b-b9dfb675fffc',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6f4070a9-c460-4491-bde2-f5213707d466',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: '2186a38d-c361-4efd-86d7-bd4a448c2124',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3a9d776d-6e44-4b5f-9b2c-b59627858bb5',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: 'f4295ae0-8693-4c6f-a877-70f5bb3a0d95',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3093afd0-0803-4a09-bd3b-b2ae80fafe09',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: '0802f2a9-f203-457f-9951-aefeaf553925',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ac748c62-f660-444c-b5a4-081599b298a7',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        doctorId: '4e60ff08-2c64-4849-a674-71ad3f9e973a',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'fece96b7-d0f3-4dac-915a-e5d0383ea44a',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '384719ed-5cc3-43f2-978f-7e1b2d5e8068',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'dd3610ab-6b77-44e6-9a88-d7ea513fc2e2',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        doctorId: 'a18cbe75-f11f-496b-8075-de407c06dac8',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd52c792a-a230-44c8-9538-df79df9988fa',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        doctorId: '794f8f1c-225f-47cf-b367-86e04393385f',
        isConfirmedByHospital: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '26d3be26-523a-40c4-b2ae-cd0c01c7fbc7',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        doctorId: '6287995d-1d6c-4e0d-aad3-26c1306e668d',
        isConfirmedByHospital: true,
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
    await queryInterface.bulkDelete('HospitalDoctors', null, {});
  },
};
