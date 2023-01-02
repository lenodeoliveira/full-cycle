import Order from "../../domain/checkout/entity/order";
import OrderItem from "../../domain/checkout/entity/order_item";
import OrderRepositoryInterface from "../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface{
    
    async update(entity: Order): Promise<void> {
      throw new Error("Method not implemented.");
    }
    
    async find(id: string): Promise<Order> {
      const orderModel = await OrderModel.findOne({
        where: { id: id },
        include: ["items"],
      })
      
      let orderItems;
      if(orderModel.items.length > 0) {
          orderItems = orderModel.items.map((item) => {
            const orderItemModel = new OrderItem(item.id, item.name, item.price, item.quantity, item.product_id)
            return orderItemModel
          })
      }

      const orderFound = new Order(orderModel.id, orderModel.customer_id, orderItems);
      return orderFound

    }
    
    async findAll(): Promise<Order[]> {
      throw new Error("Method not implemented.");
    }
    
    async create(entity: Order): Promise<void> {
      await OrderModel.create(
        {
          id: entity.id,
          customer_id: entity.customerId,
          total: entity.total(),
          items: entity.items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            product_id: item.productId,
            quantity: item.quantity,
          })),
        },
        {
          include: [{ model: OrderItemModel }],
        }
      );
    }
  }