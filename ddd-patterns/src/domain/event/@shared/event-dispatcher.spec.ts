import EventDispatcher from "../event-dispatcher";
import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";

describe('Domain Events tests', () => {
    test('Should register an event handler', () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler)

        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHanlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)
    })
})