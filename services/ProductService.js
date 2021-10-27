const productDAO = require('../dao/ProductDAO');

module.exports = {
    
    list : (sortCriteria) => {
        return productDAO.list(sortCriteria);
    },

    create : (product) => {
        const isNameValid = typeof product["name"] === "string" &&
        product["name"].length >= 3 && product["name"] <= 100;

        const isPriceValid = product["price"] > 0;

        if (isNameValid && isPriceValid) {
            return productDAO.create(product);
        } else {
            throw new Error('BAD_PARAMETERS');
        }
    }
}
