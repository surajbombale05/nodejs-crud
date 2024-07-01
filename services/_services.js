const model = require('../models/_model');

const service = {
    getAll: async function () {
        const res = await model.find();
        return res;
    },

    getByName: async function (name) {
        const res = await model.find({ "name": name })
        return res;
    },

    getById: async function (id) {
        const res = await model.find({ "id": id })
        return res;
    },

    save: async function (data) {
        const res = await model.create(data);
        return res;
    },

    update: async function (id, data) {
        const res = await model.updateOne(
            { id },
            {
                $set: data
            }
        )
        return res;
    },

    delete: async function (id) {
        const res = await model.deleteOne({ id });
        return res;
    }
}

module.exports = service;