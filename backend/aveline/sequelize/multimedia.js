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
        allowNull: true
    },
    content: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    contact: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    office: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ordering: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    src: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slideshow: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    box: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    alt: {
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

export { seqMultimedia };
