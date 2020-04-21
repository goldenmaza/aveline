import Sequelize from 'sequelize';

const seqType = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING,
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

export { seqType };
