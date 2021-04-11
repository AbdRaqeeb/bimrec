'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      //  lga belongsTo a state
      await queryInterface.describeTable('Lgas').then(async (Lgas) => {
        if (!Lgas['stateId']) {
          await queryInterface.addColumn('Lgas', 'stateId', {
            type: Sequelize.INTEGER,
            references: {
              model: 'States',
              key: 'stateId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }
      });

      // Patient associations
      await queryInterface.describeTable('Patients').then(async (Patients) => {
        if (!Patients['stateId']) {
          await queryInterface.addColumn('Patients', 'stateId', {
            type: Sequelize.INTEGER,
            references: {
              model: 'States',
              key: 'stateId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }

        if (!Patients['lgaId']) {
          // patient hasOne lga
          await queryInterface.addColumn('Patients', 'lgaId', {
            type: Sequelize.INTEGER,
            references: {
              model: 'Lgas',
              key: 'lgaId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }
      });

      // Doctor belongsTo one state
      await queryInterface.describeTable('Doctors').then(async (Doctors) => {
        if (!Doctors['stateId']) {
          await queryInterface.addColumn('Doctors', 'stateId', {
            type: Sequelize.INTEGER,
            references: {
              model: 'States',
              key: 'stateId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }

        if (!Doctors['lgaId']) {
          // Doctor belongsTo one lga
          await queryInterface.addColumn('Doctors', 'lgaId', {
            type: Sequelize.INTEGER,
            references: {
              model: 'Lgas',
              key: 'lgaId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }
      });

      // hospitals association
      await queryInterface
        .describeTable('Hospitals')
        .then(async (Hospitals) => {
          if (!Hospitals['stateId']) {
            // Hospital belongsTo one state
            await queryInterface.addColumn('Hospitals', 'stateId', {
              type: Sequelize.INTEGER,
              references: {
                model: 'States',
                key: 'stateId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Hospitals['lgaId']) {
            // Hospital hasOne lga
            await queryInterface.addColumn('Hospitals', 'lgaId', {
              type: Sequelize.INTEGER,
              references: {
                model: 'Lgas',
                key: 'lgaId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      // appointments
      await queryInterface
        .describeTable('Appointments')
        .then(async (Appointments) => {
          if (!Appointments['doctorId']) {
            // Doctor hasMany appointments
            await queryInterface.addColumn('Appointments', 'doctorId', {
              type: Sequelize.UUID,
              references: {
                model: 'Doctors',
                key: 'doctorId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Appointments['hospitalId']) {
            // Hospital hasMany appointments
            await queryInterface.addColumn('Appointments', 'hospitalId', {
              type: Sequelize.UUID,
              references: {
                model: 'Hospitals',
                key: 'hospitalId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Appointments['patientId']) {
            // Patient hasMany appointments
            await queryInterface.addColumn('Appointments', 'patientId', {
              type: Sequelize.UUID,
              references: {
                model: 'Patients',
                key: 'patientId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Appointments['appTypeId']) {
            // AppointmentType hasMany appointments
            await queryInterface.addColumn('Appointments', 'appTypeId', {
              type: Sequelize.UUID,
              references: {
                model: 'AppointmentTypes',
                key: 'appTypeId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      // Nextofkins association
      await queryInterface
        .describeTable('NextOfKins')
        .then(async (NextOfKins) => {
          if (!NextOfKins['patientId']) {
            // next of kin belong to one patient
            await queryInterface.addColumn('NextOfKins', 'patientId', {
              type: Sequelize.UUID,
              references: {
                model: 'Patients',
                key: 'patientId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            });
          }
        });

      // ECards association
      await queryInterface.describeTable('ECards').then(async (ECards) => {
        if (!ECards['patientId']) {
          // ECard belongsTo patient
          await queryInterface.addColumn('ECards', 'patientId', {
            type: Sequelize.UUID,
            references: {
              model: 'Patients',
              key: 'patientId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          });
        }
      });

      // transactions association
      await queryInterface
        .describeTable('Transactions')
        .then(async (Transactions) => {
          if (!Transactions['trxTypeId']) {
            await queryInterface.addColumn('Transactions', 'trxTypeId', {
              type: Sequelize.STRING,
              references: {
                model: 'TransactionTypes',
                key: 'trxTypeId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Transactions['patientId']) {
            // Patient hasMany appointments
            await queryInterface.addColumn('Transactions', 'patientId', {
              type: Sequelize.UUID,
              references: {
                model: 'Patients',
                key: 'patientId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Transactions['doctorId']) {
            // Doctor hasMany appointments
            await queryInterface.addColumn('Transactions', 'doctorId', {
              type: Sequelize.UUID,
              references: {
                model: 'Doctors',
                key: 'doctorId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Transactions['hospitalId']) {
            // Hospital hasMany appointments
            await queryInterface.addColumn('Transactions', 'hospitalId', {
              type: Sequelize.UUID,
              references: {
                model: 'Hospitals',
                key: 'hospitalId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!Transactions['appointmentId']) {
            // Hospital hasMany appointments
            await queryInterface.addColumn('Transactions', 'appointmentId', {
              type: Sequelize.UUID,
              references: {
                model: 'Appointments',
                key: 'appointmentId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      // transaction results associations
      await queryInterface
        .describeTable('TransactionResults')
        .then(async (TransactionResults) => {
          if (!TransactionResults['trxId']) {
            await queryInterface.addColumn('TransactionResults', 'trxId', {
              type: Sequelize.UUID,
              references: {
                model: 'Transactions',
                key: 'trxId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      // hospital wallets association
      await queryInterface
        .describeTable('HospitalWallets')
        .then(async (HospitalWallets) => {
          if (!HospitalWallets['hospitalId']) {
            await queryInterface.addColumn('HospitalWallets', 'hospitalId', {
              type: Sequelize.UUID,
              references: {
                model: 'Hospitals',
                key: 'hospitalId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      await queryInterface
        .describeTable('WalletLogs')
        .then(async (WalletLogs) => {
          if (!WalletLogs['trxId']) {
            await queryInterface.addColumn('WalletLogs', 'trxId', {
              type: Sequelize.UUID,
              references: {
                model: 'Transactions',
                key: 'trxId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!WalletLogs['walletLogTypeId']) {
            await queryInterface.addColumn('WalletLogs', 'walletLogTypeId', {
              type: Sequelize.STRING,
              references: {
                model: 'WalletLogTypes',
                key: 'walletLogTypeId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }

          if (!WalletLogs['walletId']) {
            await queryInterface.addColumn('WalletLogs', 'walletId', {
              type: Sequelize.UUID,
              references: {
                model: 'HospitalWallets',
                key: 'walletId',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            });
          }
        });

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('Lgas', 'stateId');

      await queryInterface.removeColumn('Patients', 'stateId');

      await queryInterface.removeColumn('Patients', 'lgaId');

      await queryInterface.removeColumn('Doctors', 'lgaId');

      await queryInterface.removeColumn('Doctors', 'stateId');

      await queryInterface.removeColumn('Patients', 'nextOfKinId');

      await queryInterface.removeColumn('NextOfKins', 'patientId');

      await queryInterface.removeColumn('Appointments', 'patientId');

      await queryInterface.removeColumn('Appointments', 'doctorId');

      await queryInterface.removeColumn('Appointments', 'hospitalId');

      await queryInterface.removeColumn('Appointments', 'appTypeId');

      await queryInterface.removeColumn('ECards', 'patientId');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
