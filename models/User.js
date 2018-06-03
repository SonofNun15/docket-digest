module.exports = function (sequelize, DataTypes) {

  const User = sequelize.define("User",
    {
      email: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {
      salt: DataTypes.STRING,
      allowNull: false
    },
    {
      hash: DataTypes.STRING,
      allowNull: false
    },
    {
      reset_token: DataTypes.STRING,
      defaultValue: null
    },
    {
      reset_token_expires_at: DataTypes.DATE,
      defaultValue: null
    },
    {
      timestamps: true
    }
  );

  User.associate = function (models) {
    // Associating User with userdockets
    // When an User is deleted, also delete any associated userdockets
    User.hasMany(models.User_Docket, {
      onDelete: "cascade"
    });
  };

  return User;
};
