import Address  from "./domain/entity/address"
import Customer from "./domain/entity/customer"
import Order from "./domain/entity/order"
import OrderItem from "./domain/entity/order_item"


const address = new Address("Rua dois", "1234567", "São Paulo", 123)
let customer = new Customer("id", "John")

customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, 1, "p1")
const item2 = new OrderItem("2", "Item 2", 20, 1, "p1")

const order = new Order("1", "123", [item1, item2])

console.log('ORDER ==>', customer)