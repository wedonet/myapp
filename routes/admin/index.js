/**
 * Created by Administrator on 2016-05-26.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/index');
});

module.exports = router;
