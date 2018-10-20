module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        monthOfBrith: DataTypes.INTEGER,
        dayOfBirth: DataTypes.INTEGER,
        yearOfBirth: DataTypes.INTEGER
    });
    return User;
}