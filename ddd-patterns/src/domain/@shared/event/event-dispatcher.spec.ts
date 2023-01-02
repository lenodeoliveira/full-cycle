import EventDispatcher from "./event-dispatcher";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";

describe('Domain Events tests', () => {
    test('Should register an event handler', () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)
    })

    test('Should unregister an event handler', () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"].length).toBe(1);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"].length).toBe(0)
    })

    test('Should unregister all event handlers', () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"].length).toBe(1);

        eventDispatcher.unregisterAll()
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"]).toBeUndefined()
    })

    test('Should notify all event handlers', () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)

        const productCreatedEvent = new ProductCreatedEvent({
            name: "Product 1",
            description: "Product 1 description",
            price: 10.0
        })

        //Quando o notify for executado o SendEmailWhenProductIsCreated.handler () deve ser chamado
        eventDispatcher.notify(productCreatedEvent)

        expect(spyEventHandler).toHaveBeenCalled();

    })
})