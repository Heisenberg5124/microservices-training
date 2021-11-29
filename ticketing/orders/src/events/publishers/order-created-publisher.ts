import { OrderCreatedEvent, Publisher, Subjects } from "@vdhticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}