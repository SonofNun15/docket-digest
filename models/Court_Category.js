module.exports = function (sequelize, DataTypes) {

    const Court_Category = sequelize.define("Court_Category",
        {
            identifier: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: true,
            underscored: true
        }
    );

    Court_Category.associate = function (models) {
        Court_Category.hasMany(models.Court);
    };

    return Court_Category;
};
