const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        // defining column: product_id
        product_id: {
            type: DataTypes.INTEGER,
            // referencing the product model's ids
            references: {
                model: 'product',
                key: 'id',
            },
        },
        // defining column: tag_id
        tag_id: {
            type: DataTypes.INTEGER,
            // referencing the tag model's ids
            references: {
                model: 'tag',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;
