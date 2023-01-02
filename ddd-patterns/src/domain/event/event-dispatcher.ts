import EventDispatcherInterface from "./@shared/event-dispatcher.interface";
import EventHandlerInterface from "./@shared/event-handler.interface";
import EventInterface from "./@shared/event.interface";

export default class EventDispatcher implements EventDispatcherInterface {

    private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {}

    get getEventHanlers(): {[eventName: string]: EventHandlerInterface[]} {
        return this.eventHandlers
    }
    
    notify(event: EventInterface): void{}

    register(eventName: string, eventHandler: EventHandlerInterface): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = []
        }

        this.eventHandlers[eventName].push(eventHandler)
    }

    unregister(eventName: string, eventHanler: EventHandlerInterface<EventInterface>): void {
        
    }

    unregisterAll(): void {}

}