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
    await queryInterface.bulkInsert('HospitalSpecialties', [
      {
        id: 'b6bd4e2b-58ad-488d-a754-b14cc4090489',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        specialtyId: '450aa426-9ac8-4e8f-be27-d599d87f3dac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '702024f8-0651-4754-9795-ffa5ee05ab39',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4b054907-51e1-4295-aca4-e8eae0f36319',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '12de92c2-9ccf-49d2-b650-13ab50408827',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        specialtyId: 'cb76e590-25cc-4054-88ea-75c00886259f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7e6a7b53-2f43-409d-bc4c-81995138abd0',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        specialtyId: 'd73fd8aa-9597-4818-bec3-1b36f2e60d24',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bb64dfa3-08c1-4eee-9ca9-cad2d88324fe',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        specialtyId: '7ad515e6-ee32-41e8-9a16-ce00ebc4a299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '25514ea9-eb33-4044-9118-0d74423872ad',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        specialtyId: '903b062a-44c9-4165-b22e-ad1c18c5a2c5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ab32d029-49e0-467a-a0b7-03e83ce2f702',
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        specialtyId: 'e9a9ae64-0e6a-46f3-9f1c-96f71884337d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '020cfca5-b5c6-40f5-b239-f40ee74e2322',
        hospitalId: 'f2cf2b8e-2d14-48b4-bb37-737beb7fc99f',
        specialtyId: '5d8855e7-d027-4dc9-a4e5-4da03925e64a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '53ce83b6-6c1e-4e1f-abc4-9518e7845121',
        hospitalId: 'f2cf2b8e-2d14-48b4-bb37-737beb7fc99f',
        specialtyId: '9d4a4f9c-84a3-46b4-a899-dbfc2451a88a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '39f9eb18-28ae-43c0-8b13-26b8440be0ed',
        hospitalId: '3cb11667-532c-406b-ad2b-15b80d03bc90',
        specialtyId: '450aa426-9ac8-4e8f-be27-d599d87f3dac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6fbe8bd3-4c1b-4626-b0db-6cafea80771b',
        hospitalId: '321c744a-f3fc-4222-b518-8e1ce3a1fbfe',
        specialtyId: '9f755a13-9e3a-4d5c-b0f8-b8359be21a89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '402393bb-4cc3-4c97-a97c-d688d383cde3',
        hospitalId: '49d00d0c-7387-4fb8-bf6c-10a41f2cfde8',
        specialtyId: 'd877939b-7406-4177-8f02-ad02fcef99fa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '99f2666e-1a7a-4543-ac87-46b908b90f92',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        specialtyId: 'cb76e590-25cc-4054-88ea-75c00886259f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7cfd9d0a-3c5c-4913-bd35-ca6f750ba51d',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        specialtyId: 'd73fd8aa-9597-4818-bec3-1b36f2e60d24',
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
    await queryInterface.bulkDelete('HospitalSpecialties', null, {});
  },
};
