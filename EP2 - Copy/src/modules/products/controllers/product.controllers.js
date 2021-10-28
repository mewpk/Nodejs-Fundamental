const humps = require('humps')

const productsList = [
    {
        id: 1,
        name: 'Iphone X'
    },
    {
        id: 2,
        name: 'Iphone XI'
    },
    {
        id: 3,
        name: 'Earpods Apple'
    },
    {
        id: 4,
        name: 'Submarine'
    }
]

const productsController = {
    getProducts(req, res) {
        res.json(productsList)
    },
    getProductsById(req, res) {
        const { id } = humps.camelizeKeys(req.params)
        const foundProduct = productsList.find((product) => product.id === Number(id))
        res.json({
            sucees: true,
            data: foundProduct
        })
    }
}

module.exports = productsController