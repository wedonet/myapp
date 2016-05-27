/**
 * Created by Administrator on 2016-05-27.
 */

var express = require('express');
var router = express.Router();

router.get('/device', function(req, res, next) {
    res.render('admin/device');
});

module.exports = router;
