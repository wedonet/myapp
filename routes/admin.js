/**
 * Created by wedonet on 2016/5/26.
 */
var express = require('express');
var router = express.Router();

/* 管理首页 */
router.get('/', require('./admin/index'));
router.get('/device', require('./admin/device'));



module.exports = router;
