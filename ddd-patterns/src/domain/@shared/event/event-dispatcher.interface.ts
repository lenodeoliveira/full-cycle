import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
    
    notify(event: EventInterface): void;
    register(eventName: string, eventHanler: EventHandlerInterface):void;
    unregister(eventName: string, eventHanler: EventHandlerInterface):void;
    unregisterAll():void;
}