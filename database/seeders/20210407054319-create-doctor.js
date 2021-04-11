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
    await queryInterface.bulkInsert('Doctors', [
      {
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        email: 'doc1@gmail.com',
        firstName: 'Emeka',
        lastName: 'Chukwuka',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'emeka-chukwuka-hh87hb',
        registrationNumber: '12345678',
        title: 'Dermatologist',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        email: 'doc2@gmail.com',
        firstName: 'Abu',
        lastName: 'Yusuf',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'abu-yusuf-hru383njh',
        registrationNumber: '12345678',
        title: 'Surgeon',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 'a18cbe75-f11f-496b-8075-de407c06dac8',
        email: 'doc3@gmail.com',
        firstName: 'Kolade',
        lastName: 'Femi',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'kolade-femo-hjher73',
        registrationNumber: '12345678',
        title: 'Oncologist',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '794f8f1c-225f-47cf-b367-86e04393385f',
        email: 'doc4@gmail.com',
        firstName: 'Ben',
        lastName: 'Carson',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'ben-carson-gry7378',
        registrationNumber: '12345678',
        title: 'Surgeon',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '6287995d-1d6c-4e0d-aad3-26c1306e668d',
        email: 'doc5@gmail.com',
        firstName: 'Alhaji',
        lastName: 'Musa',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'alhaji-musa-bgh874',
        registrationNumber: '12345678',
        title: 'Gynaecologist',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 'ade82c3d-6398-4d0a-b89b-b9dfb675fffc',
        email: 'doc6@gmail.com',
        firstName: 'Ken',
        lastName: 'Mba',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'ken-mba-hjru8789',
        registrationNumber: '12345678',
        title: 'Endocrinologist',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '2186a38d-c361-4efd-86d7-bd4a448c2124',
        email: 'doc7@gmail.com',
        firstName: 'Pat',
        lastName: 'Livrite',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'pat-livrite-yt4tghew76',
        registrationNumber: '12345678',
        title: 'Physician',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 'f4295ae0-8693-4c6f-a877-70f5bb3a0d95',
        email: 'doc8@gmail.com',
        firstName: 'Kevin',
        lastName: 'Uti',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'kevin-uti-hy8e97',
        registrationNumber: '12345678',
        title: 'Surgeon',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '0802f2a9-f203-457f-9951-aefeaf553925',
        email: 'doc9@gmail.com',
        firstName: 'Ezekiel',
        lastName: 'Ajayi',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'ezekiel-ajayi-yy8748',
        registrationNumber: '12345678',
        title: 'Obstetrician',
        role: 'doctor',
        stateId: 1,
        lgaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: '4e60ff08-2c64-4849-a674-71ad3f9e973a',
        email: 'doc10@gmail.com',
        firstName: 'Ajao',
        lastName: 'AbdRaqeeb',
        image:
          'https://res.cloudinary.com/abdraqeeb/image/upload/v1617776244/doris_zrqhh0.svg',
        phoneNumber: '09087654321',
        streetAndNumber: 'test street, Abuja',
        slug: 'ajao-abdraqeeb-g7y88g',
        registrationNumber: '12345678',
        title: 'Neurosurgeon',
        role: 'doctor',
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
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
