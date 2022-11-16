const { Op } = require('sequelize')
const { game } = require('../model/index')

const create = async data => {
    await game.create(data)
}

const getAll = async () => {
    return await game.findAll()
}

const getById = async idJogo => {
    return await game.findAll({
        where: {
            id: idJogo
        }
    })
}

const update = async (idJogo, data) => {
    return await game.update(data, {
        where: {
            id: idJogo
        }
    })
}

const remove = async idJogo => {
    return await game.destroy({
        where: {
            id: idJogo
        }
    })
}

const getByTeam = async nomeTime => {

    return await game.findAll({
        where: {
            [Op.or]: [
                { mandante: nomeTime },
                { visitante: nomeTime }
            ]
        }
    })
}

const getByDate = async dataJogo => {
    return await game.findAll({
        where: {
            data_partida: dataJogo
        }
    })
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    getByTeam,
    getByDate
} 

