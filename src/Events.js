import { EventRegister } from 'react-native-event-listeners';
export const emitEvent = (data)=> {
    EventRegister.emit(data[0], data[1]);
}
export const event = EventRegister;