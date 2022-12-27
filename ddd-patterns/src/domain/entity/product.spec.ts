import Product from './product'

describe('Product unit tests', () => {
    test('Should throw error when id is empty', () => {
        expect(() => {
            new Product("", "Product 1", 100)
        }).toThrowError("Id is required")
    })

     test('Should throw error when name is empty', () => {
        expect(() => {
            new Product("123", "", 100)
        }).toThrowError("Name is required")
    })

    test('Should throw error when price is less than zero', () => {
        expect(() => {
            new Product("123", "Product 1", -1)
        }).toThrowError("Price must be greater than zero")
    })

    test('Should change name', () => {
        const product = new Product("123", "Product 1", 100)
        product.changeName('Other name')
        expect(product.name).toBe('Other name')
    })

    test('Should change price', () => {
        const product = new Product("123", "Product 1", 100)
        product.changePrice(200)
        expect(product.price).toBe(200)
    })
})
