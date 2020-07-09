import Sequelize from 'sequelize';

const seqOffice = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ordering: {
        type: Sequelize.TINYINT,
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

export { seqOffice };
