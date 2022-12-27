import { Sequelize } from 'sequelize-typescript'
import Address from '../../domain/entity/address'
import Customer from '../../domain/entity/customer'
import CustomerModel from '../db/sequelize/model/customer.model'
import CustomerRepository from './customer.repository'

describe('Customer repository test', () => {
    
    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        })
        sequelize.addModels([CustomerModel]);
        await sequelize.sync()
    })


    afterEach(async () => {
        await sequelize.close()
    })

    test('Should create a customer', async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("1", "Customer 1")

        const address = new Address("Rua dois", "1234567", "São Paulo", 123)

        customer.Address = address

        await customerRepository.create(customer)

        const customerModel = await CustomerModel.findOne({where: { id: "1" }})

        expect(customerModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Customer 1",
            street: "Rua dois",
            number: 123,
            zipcode: "1234567",
            city: "São Paulo",
            active: false,
            rewardPoints: 0
        })
    })

    test('Should update a customer', async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("1", "Customer 1")
        const address = new Address("Rua dois", "1234567", "São Paulo", 123)
        customer.Address = address
        await customerRepository.create(customer)

        const customerModel = await CustomerModel.findOne({where: { id: "1" }})


        expect(customerModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Customer 1",
            street: "Rua dois",
            number: 123,
            zipcode: "1234567",
            city: "São Paulo",
            active: false,
            rewardPoints: 0
        })

        customer.changeName("Customer updated")
        const addressUpdated = new Address("Rua Updated", "12345678", "São Paulo", 1235678)
        customer.changeAddress(addressUpdated)

        await customerRepository.update(customer)

        const customerModel2 = await CustomerModel.findOne({where: { id: "1" }})

        expect(customerModel2.toJSON()).toStrictEqual({
            id: "1",
            name: "Customer updated",
            street: "Rua Updated",
            number: 1235678,
            zipcode: "12345678",
            city: "São Paulo",
            active: false,
            rewardPoints: 0
        })
        
    })

    test("should throw an error when customer is not found", async () => {
        const customerRepository = new CustomerRepository();
    
        expect(async () => {
          await customerRepository.find("456ABC");
        }).rejects.toThrow("Customer not found");
    });

    test("should find a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("123", "Customer 1");
        const address = new Address("Street 1", "Zipcode 1", "City 1", 1);
        customer.Address = address;
        await customerRepository.create(customer);
    
        const customerResult = await customerRepository.find(customer.id);
    
        expect(customer).toStrictEqual(customerResult);
    });

    test('Should find all customer', async () => {
        const customerRepository = new CustomerRepository()
        const customer1 = new Customer("1", "Customer 1")

        const address1 = new Address("Rua dois", "1234567", "São Paulo", 123)

        customer1.Address = address1

        await customerRepository.create(customer1)

        const customer2 = new Customer("2", "Customer 2")

        const address2 = new Address("Rua tres", "1234567", "São Paulo", 123)

        customer2.Address = address2

        await customerRepository.create(customer2)

        const foundProducts = await customerRepository.findAll()

        expect(foundProducts).toEqual([customer1, customer2])
    })
})