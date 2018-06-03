module.exports = function (sequelize, DataTypes) {

  const Court = sequelize.define("Court",
      {
          identifier: DataTypes.STRING,
          allowNull: false
      },
      {
          rss: DataTypes.STRING,
          allowNull: false
      },
      {
          timestamps: true
      }
  );

  Court.associate = function (models) {
      Court.belongsTo(models.Court_Category,{
        as:"court_category_id"
      });
      Court.hasMany(models.Docket);
  };

  return Court;
};
