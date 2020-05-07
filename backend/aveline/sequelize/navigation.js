import Sequelize from 'sequelize';

const seqNavigation = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    office: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    latitude: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longitude: {
        type: Sequelize.STRING,
        allowNull: false
    },
    main: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

export { seqNavigation };
