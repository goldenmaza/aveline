import Sequelize from 'sequelize';

const seqContent = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    page: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ordering: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    header: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

export { seqContent };
