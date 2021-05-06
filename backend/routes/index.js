var express = require('express');
var router = express.Router();


const usersController = require("../controllers/users")
const taskController = require("../controllers/tasks")


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.get("/tasks/:user", taskController.find);
router.put("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);
router.post("/task", taskController.create);


router.post('/login', usersController.Login);


module.exports = router;