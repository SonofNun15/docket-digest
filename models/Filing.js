module.exports = function (sequelize, DataTypes) {

    const Filing = sequelize.define("Filing",
        {
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false
            },
            document_url: {
                type: DataTypes.STRING,
                allowNull: false
            },
            published_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
        },
        {
            timestamps: true,
            underscored:true
        }
    );

    return Filing;
};
