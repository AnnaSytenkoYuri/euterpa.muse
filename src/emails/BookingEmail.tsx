import { lessonFormatLabels, vocalLevelLabels } from "@/constants/formOptionsLabel";
import { BookingApi } from "@/validation/bookingApiSchema";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
interface BookingEmailProps {
  booking: BookingApi;
}

export function BookingEmail({ booking }: BookingEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New booking request from {booking.name}</Preview>
      <Body>
        <Container>
          <Heading>🎤 New Booking Request</Heading>
          <Section>
            <Text>Name: {booking.name}</Text>
            <Text>Email: {booking.email}</Text>
            <Text>Phone: {booking.phone}</Text>
            <Text>Lesson format: {lessonFormatLabels[booking.lessonFormat]}</Text>
            <Text>Vocal level: {vocalLevelLabels[booking.vocalLevel]}</Text>

            <Text>
              Date:{" "}
              {booking.date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>

            <Text>Time: {booking.lessonTime}</Text>
            <Text>Message: {booking.message ?? "-"}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
