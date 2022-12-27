import Order from "./order"
import OrderItem from "./order_item"

describe('Order unit tests', () => {
    test('Should throw error when id is empty', () => {
        expect(() => {
            const item = new OrderItem("1", "Item", 10, 1, "p1")
            new Order("", "123", [item])
        }).toThrowError("Id is required")
    })

    test('Should throw error when Customer Id is empty', () => {
        expect(() => {
            const item = new OrderItem("1", "Item", 10, 1, "p1")
            new Order("123", "", [item])
        }).toThrowError("CustomerId is required")
    })

    test('Should throw error when Item is empty', () => {
        expect(() => {
            new Order("123", "1234", [])
        }).toThrowError("Item qtd must be greater than zero")
    })

    test('Should calculate total', () => {
        const item1 = new OrderItem("1", "Item1", 10, 2, "p1")
        const item2 = new OrderItem("2", "Item2", 10, 2, "p1")
        const order1 = new Order("123", "12345", [item1, item2])
        
        let total = order1.total()

        expect(total).toBe(40)

        const item3 = new OrderItem("2", "Item2", 10, 3, "p1")
        const order2 = new Order("123", "12345", [item3])
        total += order2.total()

        expect(total).toBe(70)
    
    })

    test('Should throw if the item quantity is less or equal zero', () => {
        expect(() => {
            const item1 = new OrderItem("1", "Item1", 10, 0, "p1")
            new Order("123", "12345", [item1])
        }).toThrowError("Quantity must be greater than 0")
    })
})