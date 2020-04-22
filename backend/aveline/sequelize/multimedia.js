import Sequelize from 'sequelize';

const seqMultimedia = {
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
    src: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ordering: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    box: {
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

export { seqMultimedia };
