module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mandante: DataTypes.STRING,
        visitante: DataTypes.STRING,
        gols_mandante: DataTypes.INTEGER,
        gols_visitante: DataTypes.INTEGER,
        data: DataTypes.DATE,
        horario: DataTypes.STRING,
        estadio: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Game;
}