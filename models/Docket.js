module.exports = function (sequelize, DataTypes) {

    const Docket = sequelize.define("Docket",
        {
            identifier: {
                type: DataTypes.STRING,
                allowNull: false
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            timestamps: true
        }
    );

    Docket.associate = function (models) {
        Docket.hasMany(models.User_Docket, {
            onDelete: "cascade"
        });
        Docket.hasMany(models.Filing, {
            onDelete: "cascade"
        });
    };

    return Docket;
};
