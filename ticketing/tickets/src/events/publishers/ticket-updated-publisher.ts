import { Publisher, Subjects, TicketUpdatedEvent } from '@vdhticketing/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}