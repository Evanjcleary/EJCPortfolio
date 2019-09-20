module.exports = function (sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        project_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_repo: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        deployed_link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        developers: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Project;
}