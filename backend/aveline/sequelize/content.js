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
    content: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ordering: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    heading: {
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
