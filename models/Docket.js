module.exports = function (sequelize, DataTypes) {

    const Docket = sequelize.define("Docket",
        {
            identifier: DataTypes.STRING,
            allowNull: false
        },
        {
            url: DataTypes.STRING,
            allowNull: false 
        },
        {
            timestamps: true
        }
    );

    Docket.associate = function (models) {
        Docket.belongsTo(models.Court,{
            as:"court_id"
        });
        Docket.hasMany(models.User_Docket, {
            onDelete: "cascade"
        });
        Docket.hasMany(models.Filing, {
            onDelete: "cascade"
        });
    };

    return Docket;
};
