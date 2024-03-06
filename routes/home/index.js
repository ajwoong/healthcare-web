const express = require('express')
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.hello);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/routine', ctrl.output.routine);
router.get('/routine/new', ctrl.output.new);
router.get('/routine/update', ctrl.output.update);



router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.post('/routine/new', ctrl.process.new);
router.post('/routine', ctrl.process.routine);
router.post('/routine/delete', ctrl.process.delete);
router.post('/routine/save', ctrl.process.save);



module.exports=router;