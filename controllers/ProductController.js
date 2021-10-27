const productService = require('../services/ProductService');

module.exports = {

    list : (req, res) => {
        const list = productService.list(req.query.sort);
        res.render('product/list', {products: list});
    },

    createForm : (req, res) => {
        res.render('product/create', {message : ''});
    },

    create : (req, res) => {
        try {
            productService.create(req.body);
            res.redirect('/product/list')
        } catch (e) {
            res.render('create', {message : e.message});
        }
    }
}
