module.exports = function (sequelize, DataTypes) {

    var Request = sequelize.define("Request", {
        request_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        request_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        requester_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        requester_email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        requester_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        request_budget: {
            type: DataTypes.STRING,
            allowNull: false
        },
        request_misc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        
            timestamps: false
        
    });
    return Request;
}