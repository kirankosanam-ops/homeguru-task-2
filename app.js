// requiring the packages
const db = require('./database/dboperations');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Coupon = require("./models/couponmodel");
const app = express();
const router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/cart/:username', function (req, res) {

    db.getOrders(req.params.username).then(async result => {
        res.json(result);
    });
})

app.get('/getcoupons/:username', function (req, res) {
    db.getCoupons(req.params.username).then(async result => {
        res.json(result);
    });
})

app.post('/addcoupon', function (req, res) {
    let c = {...req.body};

    db.addCoupons(c.couponCode, c.couponDiscount, c.isValid, c.forUser).then(result => {
        res.status(201).send("Coupon Added");
    });
})


app.listen(3000, function () {
    console.log('Server is running')
});

