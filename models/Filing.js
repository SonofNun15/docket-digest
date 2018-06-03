module.exports = function (sequelize, DataTypes) {

    const Filing = sequelize.define("Filing",
        {
            description: DataTypes.STRING,
            allowNull: false
        },
        {
            url: DataTypes.STRING,
            allowNull: false
        },
        {
            document_url: DataTypes.STRING,
            allowNull: false
        },
        {
            published_at: DataTypes.DATE,
            allowNull: false
        },
        {
            timestamps: true
        }
    );

    Filing.associate = function (models) {
        Filing.belongsTo(models.Docket,{
            as:"docket_id"
        });
    };

    return Filing;
};
