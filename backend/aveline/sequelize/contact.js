import Sequelize from 'sequelize';

const seqContact = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    office: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ordering: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    main: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    forename: {
        type: Sequelize.STRING,
        allowNull: true
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

export { seqContact };
