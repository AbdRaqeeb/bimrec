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
    await queryInterface.bulkInsert('Appointments', [
      {
        appointmentId: '16b2b340-4218-485c-b19f-35f5a5139826',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: 'f2a71c6c-c7a2-46d3-9dee-2b22daeca8a6',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Come to the hospital',
        address: 'Dutse Sagbagyi, Abuja',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '95167dbf-a417-4d12-9f00-fee505d3e82a',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'pending',
        price: 2000.78,
        payment: 'Cash',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: 'cb03b2b3-530f-42eb-b720-2fb0cac3a1fc',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: '990167c0-dc77-4a46-abf8-3c80f08ba789',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Enter Kubwa car, Stop at Kubwa general hospital',
        address: 'Dutse Sagbagyi, Abuja',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '95167dbf-a417-4d12-9f00-fee505d3e82a',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'in-session',
        price: 2000.78,
        payment: 'Cash',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '81c2392b-2dd8-4286-a6cf-509ca687e1d8',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: 'a18cbe75-f11f-496b-8075-de407c06dac8',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'I want to use WhatsApp chat',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '98f89bec-d432-4f37-b0a2-a3c0792534b6',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'finished',
        price: 2000.78,
        payment: 'Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '7241bc65-69a5-485d-9ffd-17da4cd09074',
        hospitalId: 'bfba52eb-5673-47bd-8f2f-55a73e04fbb8',
        doctorId: '794f8f1c-225f-47cf-b367-86e04393385f',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'SMS',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '98f89bec-d432-4f37-b0a2-a3c0792534b6',
        doctorFinish: false,
        patientFinish: false,
        isPaid: false,
        status: 'pending',
        price: 2000.78,
        payment: 'Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '91703f69-7c8b-43b7-996e-b9873003ebd9',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: '6287995d-1d6c-4e0d-aad3-26c1306e668d',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Phone call',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '167080b2-0ee9-4f4c-acb5-07e0aa34e47f',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'pending',
        price: 200.78,
        payment: 'Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '9e57474e-0fb0-4f5c-93b8-080fe90c1a0b',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: 'ade82c3d-6398-4d0a-b89b-b9dfb675fffc',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'WhatsApp voice call',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: '167080b2-0ee9-4f4c-acb5-07e0aa34e47f',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'finished',
        price: 2000.78,
        payment: 'Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: 'ce7b955e-e1e0-4614-a752-a1ad54786d08',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: '2186a38d-c361-4efd-86d7-bd4a448c2124',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Zoom call',
        link: 'https://zoom.com/ygfewf8we8y',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: 'd87361b3-ddda-4037-aaa9-702ca550f5c0',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'pending',
        price: 2000.78,
        payment: 'Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '7a789cb2-083a-4975-b3d1-3f29aa384d43',
        hospitalId: 'ca7e07a9-e612-4348-bcd1-793549f0fc32',
        doctorId: 'f4295ae0-8693-4c6f-a877-70f5bb3a0d95',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Zoom call',
        link: 'https://zoom.com/ygfewf8we8y',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: 'd87361b3-ddda-4037-aaa9-702ca550f5c0',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'in-session',
        price: 2000.78,
        payment: 'Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: '1f642829-d9f2-45b1-b283-a680ee77978f',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        doctorId: '0802f2a9-f203-457f-9951-aefeaf553925',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Zoom call',
        link: 'https://zoom.com/ygfewf8we8y',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: 'd87361b3-ddda-4037-aaa9-702ca550f5c0',
        doctorFinish: false,
        patientFinish: false,
        isPaid: true,
        status: 'accepted',
        price: 2000.78,
        payment: 'Card',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        appointmentId: 'ea25dabc-5e05-44f1-a84d-e87d70d35871',
        hospitalId: '8d0831aa-534e-49f8-bf4d-858ec1425d96',
        doctorId: '4e60ff08-2c64-4849-a674-71ad3f9e973a',
        patientId: '00d990cc-0962-4636-99a3-efaaeb6f764d',
        startTime: '12:30 pm',
        endTime: '1:00 pm',
        date: new Date(),
        description: 'Zoom call',
        link: 'https://zoom.com/ygfewf8we8y',
        patientNotificationTime: new Date(),
        doctorNotificationTime: new Date(),
        appTypeId: 'd87361b3-ddda-4037-aaa9-702ca550f5c0',
        doctorFinish: false,
        patientFinish: false,
        isPaid: false,
        status: 'pending',
        price: 2000.78,
        payment: 'Card',
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
    await queryInterface.bulkDelete('Appointments', null, {});
  },
};
