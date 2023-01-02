import Address from "../value-object/address"
import Customer  from "./customer"

describe('Customer unit tests', () => {
    test('Should throw error when id is empty', () => {
        expect(() => {
            let customer = new Customer("", "John")
        }).toThrowError("Id is required")
    })

    test('Should throw error when name is empty', () => {
        expect(() => {
            let customer = new Customer("123", "")
        }).toThrowError("Name is required")
    })

    test('Should change name', () => {
        //arrange
        const customer = new Customer("123", "John")
        
        //act
        customer.changeName("Jane")

        //assert
        expect(customer.name).toBe("Jane")
    })

    test('Should activate customer', () => {

        const customer = new Customer("1", "Customer")
        const address = new Address("Rua 1", "12345", "São Paulo", 123)
        customer.Address = address

        customer.activate()

        expect(customer.isActive()).toBeTruthy()
    })

    test('Should deactivate customer', () => {

        const customer = new Customer("1", "Customer")

        customer.deactivate()

        expect(customer.isActive()).toBeFalsy()
    })

    test('Should thrown error when address is undefined when you acticate a customer', () => {

        expect(() => {
            const customer = new Customer("1", "Customer")
            customer.activate()
        }).toThrowError("Address is mandatory to activate a customer")
    })
    
    test('Should add reward points', () => {
        const customer = new Customer('1', 'Customer 1')

        expect(customer.rewardPoints).toBe(0)

        customer.addRewardPoints(10)

        expect(customer.rewardPoints).toBe(10)

        customer.addRewardPoints(10)

        expect(customer.rewardPoints).toBe(20)
    
    })
})