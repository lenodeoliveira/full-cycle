import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe('Customer factory unit test', () => {
    test('Should create a customer', () => {

        const customer = CustomerFactory.create("John")
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBeUndefined()
    })

    test('Should create a customer with an address', () => {
        const address = new Address("123 Main St", "12345", "AnyTown",  12)
        const customer = CustomerFactory.createWithAddress("John", address)
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBe(address)
    })
})