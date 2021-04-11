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
    await queryInterface.bulkInsert('Hospitals', [
      {
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        name: 'Memorial Hospital',
        email: 'memorial@gmail.com',
        emailVerified: true,
        phoneNumber: '090987654321',
        ward: '19',
        streetAndNumber: 'Test street',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774375/hospital5_wyc4ok.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'memorial-yyghw-87fdnjf8723',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        name: 'Federal Medical Center, Akure',
        email: 'fmac@gmail.com',
        emailVerified: true,
        phoneNumber: '080987654321',
        ward: '19',
        streetAndNumber: '21 Akure Expressway',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774375/hospital1_lrlurz.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'fmac-y7yt6-jhgt2',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        name: 'FMC Lagos',
        email: 'fmcl@gmail.com',
        emailVerified: true,
        phoneNumber: '09087657843',
        ward: '19',
        streetAndNumber: 'MaryLand Lagos',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774376/hospital2_hfew5y.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'fmcl-hfhe-4hrui',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: '30994b61-7280-4bc0-8ca0-3bbbf06640ce',
        name: 'Grace Hospital',
        email: 'grace@gmail.com',
        emailVerified: true,
        phoneNumber: '09087654321',
        ward: '19',
        streetAndNumber: 'Grace road, Ilesha',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774377/hospital4_urwhds.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'grace-u7u-jfh8',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: 'f2cf2b8e-2d14-48b4-bb37-737beb7fc99f',
        name: 'Sam Medical Care',
        email: 'sammedical@gmail.com',
        emailVerified: true,
        phoneNumber: '09087654321',
        ward: '19',
        streetAndNumber: 'Iwo road, Ibadan',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774378/hospital3_beqltk.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'sam-med-hyh7h3-ngh',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: '3cb11667-532c-406b-ad2b-15b80d03bc90',
        name: 'Seyi hospital and maternity',
        email: 'seyimat@gmail.com',
        emailVerified: true,
        phoneNumber: '09087654321',
        ward: '19',
        streetAndNumber: 'Ekiti Road',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774375/hospital5_wyc4ok.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'seyi-hf84h-uyhr',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: '321c744a-f3fc-4222-b518-8e1ce3a1fbfe',
        name: 'Daughter of Charity',
        email: 'daughter@gmail.com',
        emailVerified: true,
        phoneNumber: '09087654321',
        ward: '19',
        streetAndNumber: 'Dutse Alhaji, Bwari, Abuja',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774378/hospital3_beqltk.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'daughter-hh7h-hyr',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospitalId: '49d00d0c-7387-4fb8-bf6c-10a41f2cfde8',
        name: 'Ted Medical Care',
        email: 'ted@gmail.com',
        emailVerified: true,
        phoneNumber: '09087654321',
        ward: '19',
        streetAndNumber: 'Ayandeji, Ota',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617774376/hospital2_hfew5y.jpg',
        registrationNumber: '12345678',
        star: 4.0,
        slug: 'ted-hfu8-hurue',
        role: 'hospital',
        stateId: 1,
        lgaId: 1,
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
    await queryInterface.bulkDelete('Hospitals', null, {});
  },
};
