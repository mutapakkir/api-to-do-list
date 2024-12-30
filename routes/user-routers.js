//const userContoller = require('../controllers/user-controllers') 
//const express = require('express');
//const router = express.Router();

//router.get('/students', userContoller.getAllStudent)
//router.get('/students/:id', userContoller.getStudentById)
//router.post('/', userContoller.addStudent)

//module.exports = router;
const userController = require('../controllers/user-controllers')
const express = require('express')
const router = express.Router()

const userAuth = require('../middleware/user-auth')

// router.get('/', userController.getAllStudent)
// router.get('/:id', userController.getStudentById)
// router.post('/', userController.addStudent)
// router.delete('/:id', userController.deleteStudent)

// Versi 2.0
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', '../index.html'));
// });

router.get('/', userAuth, userController.getAllStudent)
router.get('/:id', userAuth, userController.getStudentById)
router.post('/', userAuth, userController.addStudent)
router.delete('/:id', userAuth, userController.deleteStudent)

// res.sendFile(path.join(__dirname, 'public', 'index.html'));

module.exports = router