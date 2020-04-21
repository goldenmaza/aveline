import Sequelize from 'sequelize';

const seqCategory = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

export { seqCategory };
