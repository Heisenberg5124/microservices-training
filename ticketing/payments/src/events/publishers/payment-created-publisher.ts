import { PaymentCreatedEvent, Publisher, Subjects } from '@vdhticketing/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}