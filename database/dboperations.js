const config = require('./dbconfig');
const sql = require('mssql');


async function getOrders(username) {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request()
            .input('Username', sql.NVarChar, username)
            .execute('GetCartItems');
        console.log(orders.recordsets);
        return orders.recordsets[0];
    } catch (error) {
        throw error;
    }
}


async function getCoupons(username) {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request()
            .input('Username', sql.NVarChar, username)
            .execute('GetCoupons');
        console.log(orders.recordsets);
        return orders.recordsets[0];
    } catch (error) {
        throw error;
    }
}


async function addCoupons(couponCode, couponDiscount, isValid, forUser) {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request()
            .input('CouponCode', sql.NVarChar, couponCode)
            .input('CouponDiscount', sql.Int, couponDiscount)
            .input('IsValid', sql.Int, 1)
            .input('ForUser', sql.NVarChar, forUser)
            .execute('CreateCoupons');
        console.log(orders.recordsets);
        return orders.recordsets;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getOrders: getOrders,
    getCoupons: getCoupons,
    addCoupons: addCoupons
}
