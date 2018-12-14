declare module 'servo-pca9685' {
    import { Port } from "tessel";
    export function use(tesselPost: Port): Servo;

    export interface Servo {
        on(eventName: string, callbackFn: () => void): void;
        configure(servoConnectorOnBoard: number, a: number, b: number, callbackFn: () => void): void;
        move(servoConnectorOnBoard: number, servoPosition: number): void;
        setDutyCycle(servoConnectorOnBoard: number, speed: number, callbackFn: () => void): void;
    }
}