import ProductFactory from "./product.factory"

describe('Product factory unit test', () => {
    test('Should create a product type B', () => {
    
        const product = ProductFactory.create("a", "Product A", 1)

        expect(product.id).toBeDefined()
        expect(product.name).toBe("Product A")
        expect(product.price).toBe(1)
        expect(product.constructor.name).toBe("Product")
    })

    test('Should create a product type B', () => {
    
        const product = ProductFactory.create("b", "Product B", 1)

        expect(product.id).toBeDefined()
        expect(product.name).toBe("Product B")
        expect(product.price).toBe(2)
        expect(product.constructor.name).toBe("ProductB")
    })

    test('Should throw an error when product type is not supported', () => {
        expect(() =>  ProductFactory.create("", "Product B", 1)).toThrowError("Product type not supported")
    })
})