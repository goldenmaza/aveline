import Sequelize from 'sequelize';

// This definition has to match the SQL table otherwise the GraphiQL tool will state that the column does not exist...
const officeTable = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ordering: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    main: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    region: {
        type: Sequelize.STRING,
        allowNull: true
    },
    locale: {
        type: Sequelize.STRING,
        allowNull: true
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    },
    orgnr: {
        type: Sequelize.STRING,
        allowNull: true
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

export { officeTable };
