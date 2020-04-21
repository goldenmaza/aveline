import Sequelize from 'sequelize';

const seqItem = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    src: {
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
}

export { seqItem };
