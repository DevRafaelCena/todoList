let tasks = require('./../models/tasks')()


let task = {

    create: async (req, res) => {

        const {
            title,
            user
        } = req.body


        try {
            let busca = tasks.findOne({
                user: user,
                title: title

            }).then(async (result) => {
                if (!result) { //não encontrou a task com o mesmo title e user       


                    let newTask = await tasks.create({
                        title: title,
                        status: true,
                        user: user
                    }).then((r) => {

                        return res.status(200).json(r)

                    })
                } else {
                    return res.status(200).json({
                        msg: "Task já cadastrada"
                    })
                }
            });
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }

    },

    find: async (req, res) => {

        const {
            user
        } = req.params

        try {
            let busca = tasks.find({
                user: user
            }).then(async (result) => {
                let tasks = result

                if (tasks.length <= 0) { //não encontrou tasks
                    console.log("sem tasks")
                }
                return res.status(200).json({
                    tasks
                })
            });
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    },

    update: async (req, res) => {

        const {
            id
        } = req.params
        const {
            status
        } = req.body

        try {
            let taskUpdate = tasks.updateOne({
                _id: id
            }, {
                status: !status
            }).then(async (result) => {
                let tasks = result

                return res.status(200).json({
                    tasks
                })
            });
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    },

    delete: async (req, res) => {

        const {
            id
        } = req.params

        try {
            let taskDelete = tasks.findByIdAndDelete({
                _id: id
            }).then(async (result) => {
                let tasks = result

                return res.status(200).json({
                    tasks
                })
            });
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    }




}


module.exports = task