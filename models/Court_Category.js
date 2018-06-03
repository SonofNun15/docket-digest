module.exports = function (sequelize, DataTypes) {

    const Court_Category = sequelize.define("Court_Category",
        {
            identifier: DataTypes.STRING,
            allowNull: false
        },
        {
            name: DataTypes.STRING,
            allowNull: false
        },
        {
            timestamps: true
        }
    );
  
    Court_Category.associate = function (models) {
        Court_Category.hasMany(models.Court);
    };
  
    return Court_Category;
  };
  