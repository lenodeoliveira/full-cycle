import Product from "../../domain/product/entity/product";
import ProductRepositoryInterface from "../../domain/product/repository/product-repository.interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
    
    async find(id: string): Promise<Product> {
        const product = await (await ProductModel.findOne({ where: { id: id} })).toJSON()
        return product
    }
    
    async update(entity: Product): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price
        }, {
            where: {
                id: entity.id
            }
        })
    }
    
    async findAll(): Promise<Product[]> {
        const result = await ProductModel.findAll()
        const products = result.map((p) => {
            return new Product(p.id, p.name, p.price)
        })

        return products

    }
    
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price
        })
    }

}