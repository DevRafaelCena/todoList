let users = require('./../models/users')()


let userLogin = {
    /* 
        tasks.create({
            title: 'TESTE',
            description: 'ADADAS',
            status:0,
            user_id: "2dsfdsf"
          })
        
          tasks.find(null, function (err,tasks){
            if(err){
              res.status(400).json({msg: "Erro ao consultar"})
        
            }else{
              res.status(200).json({tasks})
            } */


    Login: async (req, res) => {

        const {
            user,
            password
        } = req.body


        try {
            let busca = users.findOne({
                user: user
            }).then(async (result) => {
                let usuario = result

                if (result == null) { //não encontrou usuario

                    let newUser = await users.create({
                        user: user,
                        password: password
                    }).then((res) => {
                        usuario = res
                    })
                } else { //confere a senha digitada

                    if (usuario.password != password) {
                        return res.status(403).json({
                            msg: "Senha incorreta"
                        })
                    }
                }
                return res.status(200).json({
                    usuario
                })
            });
        } catch (err) {
            return res.status(400).json(err)
        }



    }


}


module.exports = userLogin