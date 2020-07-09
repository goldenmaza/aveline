import Sequelize from 'sequelize';

const seqPage = {
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
    ordering: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    main: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    box: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    sitemap: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    layout: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING,
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
