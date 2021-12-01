import { Subjects } from "..";

export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        version: number;
        orderId: string;
        stripeId: string;
    }
}