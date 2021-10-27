let PRODUCT_COUNT = 0
const { uuid } = require('uuidv4');

module.exports = {
    
    list : (sortCriteria) => {
        if (sortCriteria) {
            return FAKE_DB.products.sort((product1, product2) => {
                if (typeof product1[sortCriteria] === 'string') {
                    return product1[sortCriteria].localeCompare(product2[sortCriteria]);
                } else {
                    return product1[sortCriteria] >= product2[sortCriteria] ? 1 : -1;
                }
            });
        } else {
            return FAKE_DB.products;
        }
    },

    create : (product) => {
        product._id = uuid();
        product.creation_date = new Date().toISOString();
        return FAKE_DB.products.push(product);
    }
}
