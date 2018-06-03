module.exports = function (sequelize, DataTypes) {

  const User = sequelize.define("User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reset_token: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      reset_token_expires_at: {
        type: DataTypes.DATE,
        defaultValue: null
      },
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  User.associate = function (models) {
    // Associating User with userdockets
    // When an User is deleted, also delete any associated userdockets
    User.hasMany(models.Users_Docket, {
      onDelete: "cascade"
    });
  };

  return User;
};
