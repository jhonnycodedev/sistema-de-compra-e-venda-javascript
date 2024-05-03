// ./models/product.js
const Sequelize = require('sequelize');
module.exports= (sequelize) => {
    
    const Product = sequelize.define('Product',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull:false
        },
        valor:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        }
        
        
    });
    return Product;
};