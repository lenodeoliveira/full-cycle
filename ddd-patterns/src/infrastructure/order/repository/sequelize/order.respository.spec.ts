import { Sequelize } from 'sequelize-typescript'
import Address from '../../../../domain/customer/value-object/address'
import Customer from '../../../../domain/customer/entity/customer'
import Order from '../../../../domain/checkout/entity/order'
import OrderItem from '../../../../domain/checkout/entity/order_item'
import Product from '../../../../domain/product/entity/product'
import CustomerModel from '../../../customer/repository/sequelize/customer.model'
import OrderItemModel from './order-item.model'
import OrderModel from './order.model'
import ProductModel from '../../../product/repository/sequelize/product.model'
import CustomerRepository from '../../../customer/repository/sequelize/customer.repository'
import OrderRepository from './order.repository'
import ProductRepository from '../../../product/repository/sequelize/product.repository'


describe("Order repository test", () => {
    let sequelize: Sequelize;
  
    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
  
      await sequelize.addModels([
        CustomerModel,
        OrderModel,
        OrderItemModel,
        ProductModel,
      ]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });
  
    it("should create a new order", async () => {
      const customerRepository = new CustomerRepository();
      const customer = new Customer("123", "Customer 1");
      const address = new Address("Street 1", "Zipcode 1", "City 1", 1);
      customer.changeAddress(address);
      await customerRepository.create(customer);
  
      const productRepository = new ProductRepository();
      const product = new Product("123", "Product 1", 10);
      await productRepository.create(product);
  
      const ordemItem = new OrderItem(
        "1",
        product.name,
        product.price,
        2,
        product.id,
      );
  
      const order = new Order("123", "123", [ordemItem]);
  
      const orderRepository = new OrderRepository();
      await orderRepository.create(order);
  
      const orderModel = await OrderModel.findOne({
        where: { id: order.id },
        include: ["items"],
      });
  
      expect(orderModel.toJSON()).toStrictEqual({
        id: "123",
        customer_id: "123",
        total: order.total(),
        items: [
          {
            id: ordemItem.id,
            name: ordemItem.name,
            price: ordemItem.price,
            quantity: ordemItem.quantity,
            order_id: "123",
            product_id: "123",
          },
        ],
      });
    });

    it("Should find a order", async () => {
      //Customer
      const customerRepository = new CustomerRepository();
      const customer = new Customer("123", "Customer 1");
      const address = new Address("Street 1", "Zipcode 1", "City 1", 1);
      customer.changeAddress(address);
      await customerRepository.create(customer);
  
      //Product
      const productRepository = new ProductRepository();
      const product = new Product("123", "Product 1", 10);
      await productRepository.create(product);
  
      //Item
      const ordemItem = new OrderItem(
        "1",
        product.name,
        product.price,
        2,
        product.id,
      );
  
      //Order
      const order = new Order("123", "123", [ordemItem]);
  
      const orderRepository = new OrderRepository();
      await orderRepository.create(order);
  
      const orderFound = await orderRepository.find(order.id)
      expect(order).toStrictEqual(orderFound);
    
    });

  });



