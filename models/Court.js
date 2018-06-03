module.exports = function (sequelize, DataTypes) {

  const Court = sequelize.define("Court",
    {
      identifier: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rss: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      timestamps: true
    }
  );

  Court.associate = function (models) {
    Court.hasMany(models.Docket);
  };

  return Court;
};
