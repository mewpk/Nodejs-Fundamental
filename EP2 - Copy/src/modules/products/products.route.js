const exprees = require('express')
const productsController = require('./controllers/product.controllers')
const router = exprees.Router()

router.get('/', productsController.getProducts)
router.get('/:id',productsController.getProductsById)

module.exports = router