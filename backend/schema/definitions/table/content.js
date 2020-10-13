import Sequelize from 'sequelize';

// This definition has to match the SQL table otherwise the GraphiQL tool will state that the column does not exist...
const seqContent = {//TODO: rename to contentTable
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
    ordering: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    box: {
        type: Sequelize.BOOLEAN,
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
