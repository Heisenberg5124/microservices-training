import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    version: number;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
    }
}