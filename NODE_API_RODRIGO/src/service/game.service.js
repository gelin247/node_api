const { game } = require('../model/index')
const { Op } = require('sequelize')

const create = async data => {
    await game.create(data)
}
const getAll = async () => {
    return await game.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}
const getById = async Id => {
    return await game.findAll({
        where: {
            id: Id
        }
    })
}

const getByNation = async nation => {
    return await game.findAll({
        where: {
            [Op.or]: [
                { nation_a: nation },
                { nation_b: nation }
            ]
        }
    })
}

const getByDate = async date => {
    return await game.findAll({
        where: {
            game_date: date
        }
    })
}

const updateScore = async (Id, scoreNationA, scoreNationB) => {
    
    const changedgame = await game.findByPk(Id)

    changedgame.score_nation_a = Number(scoreNationA);
    changedgame.score_nation_b = Number(scoreNationB);
    console.log(changedgame)
    return await changedgame.save()

}

const remove = async Id => {
    return await game.destroy({
        where: {
            id: Id
        }
    })
}

module.exports = {
    create,
    getAll,
    getByNation,
    getByDate,
    getById,
    updateScore,
    remove
}