import { Publisher, Subjects, TicketCreatedEvent } from '@vdhticketing/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}