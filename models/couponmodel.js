class Coupon{
    constructor(couponCode, couponDiscount, isValid, forUser) {
        this.couponCode = couponCode;
        this.couponDiscount = couponDiscount;
        this.isValid = isValid;
        this.forUser = forUser;
    }

}
module.exports = Coupon;