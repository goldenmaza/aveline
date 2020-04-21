import Sequelize from 'sequelize';

const seqPage = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    },
    layout: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    aria: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

export { seqPage };
