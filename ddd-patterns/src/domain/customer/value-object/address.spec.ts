
import Address from "./address"

describe('Adress unit tests', () => {
    test('Should throw error when street is empty', () => {
        expect(() => {
            new Address("", "1234567", "São Paulo", 123)
        }).toThrowError("Street is required")
    })

    test('Should number must be greater than zero', () => {
        expect(() => {
            new Address("Rua dois", "12345", "São Paulo", -1)
        }).toThrowError("Number must be greater than zero")
    })

    test('Should throw error when zip is empty', () => {
        expect(() => {
            new Address("Rua dois", "", "São Paulo", 147)
        }).toThrowError("Zip is required")
    })

    test('Should throw error when City is empty', () => {
        expect(() => {
            new Address("Rua dois", "123456", "", 147)
        }).toThrowError("City is required")
    })

    test('Should return full address', () => {
        const address = new Address("Rua dois", "123456", "Sao Paulo", 147)
        expect(address.toString()).toBe('Rua dois, 147, 123456, Sao Paulo')
    })
})