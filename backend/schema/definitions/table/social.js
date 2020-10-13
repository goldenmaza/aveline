import Sequelize from 'sequelize';

// This definition has to match the SQL table otherwise the GraphiQL tool will state that the column does not exist...
const socialTable = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    media: {
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
    }
};

export { socialTable };
