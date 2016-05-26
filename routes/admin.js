/**
 * Created by wedonet on 2016/5/26.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
    res.send('admin');
});

module.exports = router;
