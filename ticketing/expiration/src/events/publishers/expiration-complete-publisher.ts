import { ExpirationCompleteEvent, Publisher, Subjects } from "@vdhticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}