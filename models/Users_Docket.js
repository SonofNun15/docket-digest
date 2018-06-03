module.exports = function (sequelize, DataTypes) {

    const Users_Docket = sequelize.define("Users_Docket",
        {},
        {
            timestamps: true,
            underscored: true
        }
    );
    return Users_Docket;
};
