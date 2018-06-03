module.exports = function (sequelize, DataTypes) {

    const User_Docket = sequelize.define("User_Docket",
        {
            timestamps: true
        }
    );

    User_Docket.associate = function (models) {
        User_Docket.belongsTo(models.User,{
            as:"user_id",
        });
        User_Docket.belongsTo(models.Docket,{
            as:"docket_id"
        });
    };

    return User_Docket;
};
