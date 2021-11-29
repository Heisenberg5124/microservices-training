import { OrderCancelledEvent, Publisher, Subjects } from "@vdhticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}