'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hospitals', {
      hospitalId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      emailVerified: {
        type: Sequelize.BOOLEAN,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      facilityCode: {
        type: Sequelize.STRING,
      },
      facilityLevel: {
        type: Sequelize.STRING,
      },
      ownership: {
        type: Sequelize.STRING,
      },
      streetAndNumber: {
        type: Sequelize.STRING,
      },
      registrationNumber: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      downVotes: {
        type: Sequelize.INTEGER,
      },
      upVotes: {
        type: Sequelize.INTEGER,
      },
      star: {
        type: Sequelize.DECIMAL(4, 2),
        defaultValue: 0.0,
      },
      verified: {
        type: Sequelize.BOOLEAN,
      },
      flag: {
        type: Sequelize.BOOLEAN,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'hospital',
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hospitals');
  },
};
