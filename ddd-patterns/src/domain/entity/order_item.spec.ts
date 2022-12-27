
import OrderItem from "./order_item"

describe('OrderItem unit tests', () => {
    test('Should throw error when id is empty', () => {
        expect(() => {
            new OrderItem("", "Name Item", 100, 1, "p1")
        }).toThrowError("Id is required")
    })

    test('Should throw error when name is empty', () => {
        expect(() => {
            new OrderItem("123", "", 100, 1, "p1")
        }).toThrowError("Name is required")
    })

    test('Should throw error when price is less than zero', () => {
        expect(() => {
            new OrderItem("123", "Name item", -100, 1, "p1")
        }).toThrowError("Price must be greater than zero")
    })

    test('Should return the price of the item', () => {
        const item = new OrderItem("123", "Name item", 100, 1, "p1")
        expect(item.price).toBe(100)
    })
})