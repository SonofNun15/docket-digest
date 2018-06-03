module.exports = function (sequelize, DataTypes) {

    const User_Docket = sequelize.define("User_Docket",
        {},
        {
            timestamps: true
        }
    );
    return User_Docket;
};
