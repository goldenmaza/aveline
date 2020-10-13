import Sequelize from 'sequelize';

// This definition has to match the SQL table otherwise the GraphiQL tool will state that the column does not exist...
const multimediaTable = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    page: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'page',
            key: "id"
        },
        field: "page"
    },
    content: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'content',
            key: "id"
        },
        field: "content"
    },
    contact: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'contact',
            key: "id"
        },
        field: "contact"
    },
    office: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'office',
            key: "id"
        },
        field: "office"
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
    logo: {
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

export { multimediaTable };
