//models/NotaFiscal.js

const Sequelize = require('sequelize');

module.exports= (sequelize) => {
    
    const NotaFiscal = sequelize.define('NotaFiscal',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome_razao:{
            type: Sequelize.STRING,
            allowNull:false
        },
        CNPJ:{
            type:Sequelize.STRING,
            allowNull:false
        },
        cpf:{
            type: Sequelize.STRING,
            allowNull: false
        },
        quantidade:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        natureza_operacao: {
            type: Sequelize.ENUM('Devolução', 'Retorno', 'Complementar', 'Remessa', 'Entrega Futura', 'Venda', 'Consignada'),
            allowNull: false
        }
     
    });

    return NotaFiscal;
};